<?php

declare(strict_types=1);

namespace NITSAN\NsPersonio\Command;

use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use NITSAN\NsPersonio\Domain\Model\Jobs;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\DataHandling\SlugHelper;
use NITSAN\NsPersonio\Domain\Model\Department;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use NITSAN\NsPersonio\Domain\Repository\JobsRepository;
use NITSAN\NsPersonio\Domain\Repository\DepartmentRepository;
use TYPO3\CMS\Extbase\Persistence\Exception\IllegalObjectTypeException;
use TYPO3\CMS\Extbase\Persistence\Generic\PersistenceManager;

class FetchApiDataCommand extends Command
{
    /**
     * Guzzle Http Client
     * @var Client
     */
    protected Client $client;

    /**
     * Configure the command by defining the name, options and arguments
     * 
     * @return void
     */
    protected function configure(): void
    {
        $this
            ->addArgument(
                'api',
                InputArgument::REQUIRED,
                'Listing API'
            )
            ->addArgument(
                'languageUid',
                InputArgument::REQUIRED,
                'Language Uid'
            )
            ->addArgument(
                'pageId',
                InputArgument::OPTIONAL,
                'Page Uid',
                0
            );
    }

    /**
     * execute
     *
     * @param InputInterface $input
     * @param OutputInterface $output
     * @return int
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $language = (int)$input->getArgument('languageUid');
        $api = trim($input->getArgument('api'));
        $validateApi = $this->validatePersonioAPi($api);
        $pageId = (int)$input->getArgument('pageId');
        
        if($validateApi != 1) {
            return Command::FAILURE;
        }else{
            try {
                $departmentRepository = GeneralUtility::makeInstance(DepartmentRepository::class);
                $jobsRepository = GeneralUtility::makeInstance(JobsRepository::class);
    
                $apiData = $this->getApiData($api);
                if(isset($apiData['position']['id'])){
                    $tempData = $apiData['position'];
                    $apiData['position'] = [];
                    $apiData['position'][0] = $tempData;
                }
                $categories = []; 
                foreach($apiData['position'] as $item){
                    $category = isset($item['department'])?$item['department']:'';
                    if($category != NULL || $category!=''){
                        array_push($categories,$category);
                    }
                }
                $uniqueCategories = array_unique($categories);
    
                // Get existing categories(departments)
                $departmentResult = $departmentRepository->findAll()->toArray();
                if(empty($departmentResult)){
                    $this->addCategories($uniqueCategories, $language, $pageId);
                }else {
                    $departmentRepository->deleteAllDepartments($language, $pageId);
                    $this->addCategories($uniqueCategories, $language, $pageId);
                }
    
                // Get existing Jobs
                $jobsResult = $jobsRepository->findAll()->toArray();
                if(empty($jobsResult)){
                    $this->addJobs($apiData['position'], $language, $pageId);
                }else {
                    $jobsRepository->deleteAllJobs($language, $pageId);
                    $this->addJobs($apiData['position'], $language, $pageId);
                }
    
                return Command::SUCCESS;
            }catch (Exception $e){
                return Command::FAILURE;
            }
        }
    }

    /**
     * addCategories
     *
     * @param array $uniqueCategories
     * @return void
     * @throws IllegalObjectTypeException
     */
    public function addCategories(array $uniqueCategories, int $language, int $pageId): void
    {
        $departmentRepository = GeneralUtility::makeInstance(DepartmentRepository::class);
        $persistenceManager = GeneralUtility::makeInstance(PersistenceManager ::class);
        foreach($uniqueCategories as $category){
            $departmentObj = GeneralUtility::makeInstance(Department::class);
            $departmentObj->setName($category);
            $departmentObj->setPid($pageId);
            $departmentObj->set_languageUid($language);
            $departmentRepository->add($departmentObj);
            $persistenceManager->persistAll();
        }
    }

    /**
     * addJobs
     *
     * @param array $jobs
     * @return void
     */
    public function addJobs(array $jobs, int $language, int $pageId): void
    {
        $departmentRepository = GeneralUtility::makeInstance(DepartmentRepository::class);
        $jobsRepository = GeneralUtility::makeInstance(JobsRepository::class);
        $persistenceManager = GeneralUtility::makeInstance(PersistenceManager ::class);
        foreach($jobs as $job){
            
            $jobObj = GeneralUtility::makeInstance(Jobs::class);
            $jobObj->setJobid($job['id']);
            isset($job['subcompany']) ? $jobObj->setSubcompany($job['subcompany']) : $jobObj->setSubcompany('');
            isset($job['office']) ? $jobObj->setOffice($job['office']) : $jobObj->setOffice('');
            if(isset($job['department'])){
                $department = $departmentRepository->getUid($job['department'],$language);
                $dept = $departmentRepository->findByUid($department);
                $jobObj->setDepartment($dept);
            }
            isset($job['recruitingCategory']) ? $jobObj->setRecruitingcategory($job['recruitingCategory']) : $jobObj->setRecruitingcategory('');
            isset($job['name']) ? $jobObj->setName($job['name']) : $jobObj->setName('');
            if(is_array($job['jobDescriptions']['jobDescription'])) {
                $fullDescription = '';
                foreach($job['jobDescriptions']['jobDescription'] as $data) {
                    if ($data['name'] != '') {
                        $fullDescription .= '<h5 class="headline-with-list">'.$data['name'].'</h5>';
                    }
                    $fullDescription .= $data['value'];
                }
                $description = preg_replace('/ style=("|\')(.*?)("|\')/','',$fullDescription);
                $jobObj->setDescriptions($description);
            } else {
                if(isset($job['jobDescriptions']['jobDescription']['value'])){
                    $description = preg_replace('/ style=("|\')(.*?)("|\')/','',$job['jobDescriptions']['jobDescription']['value']);
                    $jobObj->setDescriptions($description);
                }
            }
            isset($job['employmentType']) ? $jobObj->setEmploymenttype($job['employmentType']) : $jobObj->setEmploymenttype('');
            isset($job['seniority']) ? $jobObj->setSeniority($job['seniority']) : $jobObj->setSeniority('');
            isset($job['schedule']) ? $jobObj->setSchedule($job['schedule']) : $jobObj->setSchedule('');
            isset($job['yearsOfExperience']) ? $jobObj->setExperience($job['yearsOfExperience']) : $jobObj->setExperience('');
            isset($job['bookkeeping']) ? $jobObj->setOccupation($job['bookkeeping']) : $jobObj->setOccupation('');
            isset($job['occupationCategory']) ? $jobObj->setOccupationcategory($job['occupationCategory']) : $jobObj->setOccupationcategory('');
            isset($job['createdAt']) ? $jobObj->setCreatedat($job['createdAt']) : $jobObj->setCreatedat('');
            $jobObj->setPid($pageId);
            $jobObj->set_languageUid($language);
            $slug = $this->getJobSlug($job,0);
            $jobObj->setSlug($slug);
            $jobsRepository->add($jobObj);
            $persistenceManager->persistAll();
        }
        $persistenceManager->persistAll();
    }

    /**
     * Gets to guzzle client model
     * @return Client
     */
    public function getClient() : Client
    {
        $this->client = new Client([]);
        return $this->client;
    }

    /**
     * getApiData
     *
     * @param string $api
     * @return array
     * @throws GuzzleException
     */
    public function getApiData(string $api): array
    {
        $response = $this->getClient()->get($api)->getBody()->getContents();
        $xmlToString = simplexml_load_string($response, null, LIBXML_NOCDATA);
        $apiJsonData = json_encode($xmlToString);
        $dataArray = json_decode($apiJsonData, true);
        return empty($dataArray) ? [] : $dataArray;
    }

    /**
     * getJobSlug
     *
     * @param array $record
     * @param int $pid
     * @return string
     */
    public function getJobSlug($record, $pid): string
    {
        $fieldConfig = $GLOBALS['TCA']['tx_nspersonio_domain_model_jobs']['columns']['slug']['config'];
        $slugHelper = GeneralUtility::makeInstance(
            SlugHelper::class,
            'tx_nspersonio_domain_model_jobs',
            $record['name'],
            $fieldConfig
        );
        return $slugHelper->generate($record, $pid);
    }


    /**
     * validatePersonioAPi
     *
     * @param string $api
     * @return int
     */
    public function validatePersonioAPi(string $api): int
    {
        $pattern = '/^https:\/\/[a-zA-Z0-9_-]+\.jobs\.personio\.de\/xml\?language=[a-zA-Z]+$/';
        $result =  preg_match($pattern, $api);
        return $result;
    }
}

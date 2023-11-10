<?php

declare(strict_types=1);

namespace NITSAN\NsPersonio\Controller;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use TYPO3\CMS\Core\Configuration\Exception\ExtensionConfigurationExtensionNotConfiguredException;
use TYPO3\CMS\Core\Configuration\Exception\ExtensionConfigurationPathDoesNotExistException;
use TYPO3\CMS\Core\Context\Context;
use Psr\Http\Message\ResponseInterface;
use TYPO3\CMS\Core\Context\Exception\AspectNotFoundException;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Mvc\Controller\ActionController;
use NITSAN\NsPersonio\Domain\Repository\JobsRepository;
use NITSAN\NsPersonio\Domain\Repository\DepartmentRepository;
use NITSAN\NsPersonio\Domain\Model\Jobs;
use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use TYPO3\CMS\Extbase\Persistence\Exception\InvalidQueryException;

/**
 * This file is part of the "NsPersonio" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * (c) 2023 Team NITSAN <info@nitsan.in>, NITSAN Technologies Pvt Ltd
 */

/**
 * JobsController
 */
class JobsController extends ActionController
{
    /**
     * Guzzle Http Client
     * @var Client
     */
    protected Client $client;

    /**
     * JobsRepository
     *
     * @var JobsRepository
     */
    protected JobsRepository $jobsRepository;

    /**
     * DepartmentRepository
     *
     * @var DepartmentRepository
     */
    protected DepartmentRepository $departmentRepository;

    /**
     * ExtensionConfiguration
     *
     * @var ExtensionConfiguration
     */
    private ExtensionConfiguration $extensionConfiguration;

    public function __construct(
        JobsRepository $jobsRepository,
        DepartmentRepository $departmentRepository,
        ExtensionConfiguration $extensionConfiguration
    )
    {
        $this->jobsRepository = $jobsRepository;
        $this->departmentRepository = $departmentRepository;
        $this->extensionConfiguration = $extensionConfiguration;
    }

    /**
     * action list
     *
     * @throws AspectNotFoundException|InvalidQueryException
     */
    public function listAction()
    {
        $storagePages = $this->settings['storagePage'];
        $storagePagesArray = explode (",", $storagePages);
        $context = GeneralUtility::makeInstance(Context::class);
        $langId = $context->getPropertyFromAspect('language', 'id');

        $categories = [];
        $locations = [];
        $schedules = [];
        $allCategories = $this->departmentRepository->fetchAll($langId, $storagePagesArray);
        $allJobs = $this->jobsRepository->fetchJobs($langId, $storagePagesArray);
        if ($allJobs) {
            foreach ($allJobs as $key => $job) {
                if($job->getDepartment()) {
                    $departmentId = $job->getDepartment()->getUid();
                    $categories[$departmentId] = $job->getDepartment();
                }
                if($job->getOffice()) {
                    $locations[] = $job->getOffice();
                }
                if($job->getSchedule()) {
                    $schedules[] = $job->getSchedule();
                }
            }
        }
        $uniqueLocations = array_unique($locations);
        $uniqueSchedules = array_unique($schedules);

        $arguments = GeneralUtility::_GP('tx_nspersonio_pi1');
        if (empty($arguments['search-word'])) {
            $jobs = $this->jobsRepository->fetchJobs($langId, $storagePagesArray);
        } else {
            $jobs = $this->jobsRepository->dataFilterAndSort($arguments, $storagePagesArray, $langId);
        }

        $filterCategory = [];
        foreach ($jobs as $key => $job) {
            if($job->getDepartment()) {
                $departmentId = $job->getDepartment()->getUid();
                $filterCategory[$departmentId] = $job->getDepartment();
            }
        }
        $this->view->assignMultiple([
            'jobs' => $jobs,
            'categories' => $categories,
            'settings' => $this->settings,
            'allCategories' => $allCategories,
            'filterCategory' => $filterCategory,
            'locations' => $uniqueLocations,
            'schedules' => $uniqueSchedules,
        ]);
    }

    /**
     * action detail
     * @param Jobs|null $job
     */
    public function detailAction(Jobs $job = null)
    {
        if($job) {
            $listPid = $this->settings['listPid'];
            $this->view->assignMultiple([
                'job' => $job,
                'contentElementUid' => ($this->settings['contentElements'])??null,
                'applicationPid' => $this->settings['applicationPid'],
                'listPid' => $listPid
            ]);
        }
    }

    /**
     * action application
     * @param Jobs|null $application
     */
    public function applicationAction(Jobs $job = null)
    {
        $jobUid = isset(GeneralUtility::_GP('tx_nspersonio_pi2')['job']) ? GeneralUtility::_GP('tx_nspersonio_pi2')['job'] : null;
        if($job==null) {
            if($jobUid){
                $job = $this->jobsRepository->findByUid($jobUid) ;
            }
        }
        if ($job) {
            $this->view->assignMultiple([
                'jobId' => $job->getJobid(),
                'jobUid' => $job->getUid(),
                'job' => $job,
                'settings' => $this->settings,
            ]);
        }
    }

    /**
     * action submitApplication
     *
     * @return ResponseInterface
     * @throws ExtensionConfigurationExtensionNotConfiguredException
     * @throws ExtensionConfigurationPathDoesNotExistException
     * @throws GuzzleException
     */
    public function submitApplicationAction()
    {
        $formValid = true;
        $successPid = (int) $this->settings['successPID'];
        $failurePid = (int) $this->settings['failurePid'];
        $globalConfiguration = $this->extensionConfiguration->get('ns_personio');
        $api = $globalConfiguration['applicationApi'];
        if ($api === '') {
            $formValid = false;
        }
        $companyId = (int) $this->settings['companyId'];
        if ($companyId === '') {
            $formValid = false;
        }
        $formData = [
            'jobId' => $this->request->getArgument('jobId'),
            'cv-upload' => GeneralUtility::_GP('cv-upload'),
            'other-upload' => GeneralUtility::_GP('other-upload'),
            'first_name' => GeneralUtility::_GP('first_name'),
            'last_name' => GeneralUtility::_GP('last_name'),
            'email' => GeneralUtility::_GP('email'),
            'gender' => GeneralUtility::_GP('gender'),
            'phone' => GeneralUtility::_GP('phone'),
            'available_from' => GeneralUtility::_GP('available_from'),
            'salary_expectations' => GeneralUtility::_GP('salary_expectations'),
        ];
        $token = $this->settings['accessToken'];
        if ($token === '') {
            $formValid = false;
        }
        $jobId =$formData['jobId'];
        if ($jobId === '') {
            $formValid = false;
        }
        $cvData = json_decode($formData['cv-upload'], true);
        $otherData = [];
        if (!empty($formData['other-upload'])) {
            $otherData = json_decode($formData['other-upload'], true);
        }
        if ($formData['first_name'] === '') {
            $formValid = false;
        }
        if ($formData['last_name'] === '') {
            $formValid = false;
        }
        if ($formData['email'] === '') {
            $formValid = false;
        }
        $uriBuilder = $this->uriBuilder;
        if ($formValid) {
            $params = [
                "job_position_id" => $jobId,
                "first_name" => $formData['first_name'],
                "last_name" => $formData['last_name'],
                "email" => $formData['email'],
                "attributes" => [
                    [
                        "id" => "gender",
                        "value" => $formData['gender']
                    ],
                    [
                        "id" => "phone",
                        "value" => $formData['phone']
                    ],
                    [
                        "id" => "available_from",
                        "value" => $formData['available_from']
                    ],
                    [
                        "id" => "salary_expectations",
                        "value" => $formData['salary_expectations']
                    ],
                ],
            ];
            if (!empty($cvData)) {
                foreach ($cvData as $key => $value) {
                    $params['files'][$key] = [
                        "uuid" => $value['uuid'],
                        "original_filename" => $value['original_filename'],
                        "category" => "cv"
                    ];
                }
            }
            $lastKey = key(array_slice($params['files'], -1, 1, true)) + 1;
            if (!empty($otherData)) {
                foreach ($otherData as $key => $value) {
                    $params['files'][$key + $lastKey] = [
                        "uuid" => $value['uuid'],
                        "original_filename" => $value['original_filename'],
                        "category" => "work-sample"
                    ];
                }
            }
            $body = json_encode($params);
            $options = [
                'http_errors' => true,
                'headers' => [
                    'Accept' => 'application/json',
                    'X-Company-ID' => $companyId,
                    'Authorization' => 'Bearer ' . $token,
                    'Content-Type' => 'application/json',
                ],
                'body' => $body,
            ];
            try {
                $this->getClient()->post($api, $options)->getBody()->getContents();
                $uri = $uriBuilder
                    ->setTargetPageUid($successPid)
                    ->build();
                return $this->redirectToURI($uri);
            } catch (\GuzzleHttp\Exception\RequestException $e) {
                $uri = $uriBuilder
                    ->setTargetPageUid($failurePid)
                    ->build();
                return $this->redirectToURI($uri);
            }
        } else {
            $uri = $uriBuilder
                ->setTargetPageUid($failurePid)
                ->build();
            return $this->redirectToURI($uri);
        }
    }


    /**
     * fileProcessAction
     *
     * @return void
     * @throws GuzzleException
     * @throws ExtensionConfigurationExtensionNotConfiguredException
     * @throws ExtensionConfigurationPathDoesNotExistException
     */
    public function fileProcessAction(): void
    {
        $globalConfiguration = $this->extensionConfiguration->get('ns_personio');
        $api = $globalConfiguration['documentApi'];
        $companyId = $this->settings['companyId'];
        $token = $this->settings['accessToken'];

        $options = [
            'headers' => [
                'X-Company-ID' => $companyId,
                'Accept' => 'application/json',
                'Authorization' => 'Bearer '.$token
            ],
            'multipart' => [
                [
                    'name'     => 'file',
                    'filename' => $_FILES['file']['name'][0],
                    'contents' => fopen($_FILES['file']['tmp_name'][0], 'r'),
                    'headers' => [
                        'Content-Type' => $_FILES['file']['type'][0]
                    ]
                ]
            ]
        ];
        try{
            $response = $this->getClient()->post($api, $options);
            $responseBody = $response->getBody()->getContents();
            echo json_encode($responseBody);
            die;
        } catch (\GuzzleHttp\Exception\RequestException $e) {
            $return = [
                'success' => false,
                'message' => $e
            ];
            echo json_encode($return);
            die;
        }

    }

    /**
     * Gets to guzzle client model
     * @return Client
     */
    public function getClient(): Client
    {
        $this->client = new Client([]);
        return $this->client;
    }
}

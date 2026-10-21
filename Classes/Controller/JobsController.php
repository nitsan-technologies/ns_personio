<?php

declare(strict_types=1);

namespace NITSAN\NsPersonio\Controller;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use TYPO3\CMS\Core\Configuration\Exception\ExtensionConfigurationExtensionNotConfiguredException;
use TYPO3\CMS\Core\Configuration\Exception\ExtensionConfigurationPathDoesNotExistException;
use TYPO3\CMS\Core\Context\Context;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\UploadedFileInterface;
use TYPO3\CMS\Core\Http\PropagateResponseException;
use TYPO3\CMS\Core\Context\Exception\AspectNotFoundException;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Mvc\Controller\ActionController;
use NITSAN\NsPersonio\Domain\Repository\JobsRepository;
use NITSAN\NsPersonio\Domain\Repository\DepartmentRepository;
use NITSAN\NsPersonio\Domain\Model\Jobs;
use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use TYPO3\CMS\Extbase\Persistence\Exception\InvalidQueryException;
use TYPO3\CMS\Core\Utility\VersionNumberUtility;
use NITSAN\NsPersonio\Utility\ApiResponseUtility;

/**
 * This file is part of the "Personio" Extension for TYPO3 CMS.
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

    /**
     * typo3VersionArray
     *
     * @var array
     */
    protected array $typo3VersionArray;

    public function __construct(
        JobsRepository $jobsRepository,
        DepartmentRepository $departmentRepository,
        ExtensionConfiguration $extensionConfiguration
    ) {
        $this->jobsRepository = $jobsRepository;
        $this->departmentRepository = $departmentRepository;
        $this->extensionConfiguration = $extensionConfiguration;
        $this->typo3VersionArray = VersionNumberUtility::convertVersionStringToArray(
            VersionNumberUtility::getCurrentTypo3Version()
        );
    }

    /**
     * action list
     *
     * @throws AspectNotFoundException|InvalidQueryException
     */
    public function listAction()
    {
        $storagePages = $this->settings['storagePage'];
        $storagePagesArray = explode(",", $storagePages);
        $context = GeneralUtility::makeInstance(Context::class);
        $langId = $context->getPropertyFromAspect('language', 'id');

        $categories = $locations = $schedules = [];
        $allCategories = $this->departmentRepository->fetchAll($langId, $storagePagesArray);
        $allJobs = $this->jobsRepository->fetchJobs($langId, $storagePagesArray);
        if ($allJobs) {
            foreach ($allJobs as $job) {
                if ($job->getDepartment()) {
                    $departmentId = $job->getDepartment()->getUid();
                    $categories[$departmentId] = $job->getDepartment();
                }
                if ($job->getOffice()) {
                    $locations[] = $job->getOffice();
                }
                if ($job->getSchedule()) {
                    $schedules[] = $job->getSchedule();
                }
            }
        }
        $uniqueLocations = array_unique($locations);
        $uniqueSchedules = array_unique($schedules);

        $arguments = $this->request->getArguments();


        if (empty($arguments['search-word'])) {

            $jobs = $this->jobsRepository->fetchJobs($langId, $storagePagesArray);
        } else {
            $jobs = $this->jobsRepository->dataFilterAndSort($arguments, $storagePagesArray, $langId);
        }

        $filterCategory = [];
        foreach ($jobs as $job) {
            if ($job->getDepartment()) {
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
        
            return $this->htmlResponse();
        
    }

    /**
     * action detail
     * @param Jobs|null $job
     */
    public function detailAction(?Jobs $job = null)
    {
        if ($job) {
            $listPid = $this->settings['listPid'];
            $this->view->assignMultiple([
                'job' => $job,
                'contentElementUid' => ($this->settings['contentElements']) ?? null,
                'applicationPid' => $this->settings['applicationPid'],
                'listPid' => $listPid
            ]);
        }
       
            return $this->htmlResponse();
        
    }

    /**
     * action application
     * @param Jobs|null $job
     */
    public function applicationAction(?Jobs $job = null)
    {

        $jobUid = $this->request->hasArgument('job')
            ? $this->request->getArgument('job')
            : null;

        if ($job === null && $jobUid) {
            $job = $this->jobsRepository->findByUid($jobUid);
        }

        $message = $this->request->hasArgument('message')
            ? $this->request->getArgument('message')
            : null;


        if ($message) {
            $this->view->assign('message', $message);
        }
        if ($job == null && $jobUid) {
            $job = $this->jobsRepository->findByUid($jobUid);
        }
        if ($job) {
            $this->view->assignMultiple([
                'jobId' => $job->getJobid(),
                'jobUid' => $job->getUid(),
                'job' => $job,
                'settings' => $this->settings,
            ]);
        }
        
            return $this->htmlResponse();
        
    }

    /**
     * action submitApplication
     *
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

        $formData = [
            'jobId' => $this->request->getArgument('jobId')
        ];

            $formData = array_merge($formData, $this->request->getParsedBody());

        $requiredFields = [
            'jobId',
            'first_name',
            'last_name',
            'email',
            'cv-upload',
            'other-upload'
        ];

        foreach ($requiredFields as $field) {
            if (empty($formData[$field])) {
                $formValid = false;
                break;
            }
        }
        $attributes = [
            'gender',
            'phone',
            'available_from',
            'salary_expectations'
        ];

        $applicationAttribute = [];
        foreach ($attributes as $attribute) {
            if (!empty($formData[$attribute])) {
                $applicationAttribute[] = [
                    "id" => $attribute,
                    "value" => $formData[$attribute]
                ];
            }
        }
        $jobId = $formData['jobId'];
        $uriBuilder = $this->uriBuilder;
        if ($formValid) {

            $cvData = json_decode($formData['cv-upload'], true);
            $otherData = [];
            if (!empty($formData['other-upload'])) {
                $otherData = json_decode($formData['other-upload'], true);
            }

            $applicationAttribute = [];
            foreach ($attributes as $attribute) {
                if (isset($formData[$attribute]) && !empty($formData[$attribute])) {
                    $applicationAttribute[] = [
                        "id" => $attribute,
                        "value" => $formData[$attribute]
                    ];
                }
            }

            $params = [
                "job_position_id" => $jobId,
                "first_name" => $formData['first_name'],
                "last_name" => $formData['last_name'],
                "email" => $formData['email'],
            ];
            if (!empty($applicationAttribute)) {
                $params['attributes'] = $applicationAttribute;
            }

            if (!empty($cvData)) {
                foreach ($cvData as $key => $value) {
                    $params['files'][$key] = [
                        "uuid" => $value['uuid'],
                        "original_filename" => $value['original_filename'],
                        "category" => "cv"
                    ];
                }
            }
            if (isset($params['files']) && !empty($params['files'])) {
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
            }

            $body = json_encode($params);
            $options = [
                'http_errors' => true,
                'headers' => $this->personioRequestHeaders([
                    'Content-Type' => 'application/json',
                ]),
                'body' => $body,
            ];
            try {
                $this->getClient()->post($api, $options)->getBody()->getContents();
                $uri = $uriBuilder
                    ->setTargetPageUid($successPid)
                    ->build();
                return $this->redirectToURI($uri);
            } catch (\GuzzleHttp\Exception\RequestException $e) {
                $response = $e->getResponse();
                if ($response === null) {
                    $uri = $uriBuilder
                        ->setTargetPageUid($failurePid)
                        ->build();
                    return $this->redirectToURI($uri);
                }
                $responseBody = $response->getBody()->getContents();
                $decodedResponse = json_decode($responseBody, true);
                $responseMessage = is_array($decodedResponse)
                    ? ApiResponseUtility::getApiResponse($decodedResponse)
                    : $this->plainPersonioErrorMessage($responseBody);
                if ($responseMessage != '') {
                    return $this->redirect(
                        'application',
                        null,
                        null,
                        ['job' => $this->request->getArguments()['jobUid'] ?? null, 'message' => $responseMessage]
                    );
                }
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
     * @throws GuzzleException
     * @throws ExtensionConfigurationExtensionNotConfiguredException
     * @throws ExtensionConfigurationPathDoesNotExistException
     * @throws PropagateResponseException
     */
    public function fileProcessAction(): never
    {
        $globalConfiguration = $this->extensionConfiguration->get('ns_personio');
        $api = $globalConfiguration['documentApi'] ?? '';
        $uploadedFile = $this->getFirstUploadedFile('file');

        if ($uploadedFile === null || $uploadedFile->getError() !== UPLOAD_ERR_OK) {
            $this->emitJsonResponse([
                'success' => false,
                'message' => 'No file uploaded',
            ]);
        }

        $uploadedName = $uploadedFile->getClientFilename() ?? '';
        $contents = $uploadedFile->getStream()->getContents();
        if ($uploadedName === '' || $contents === '') {
            $this->emitJsonResponse([
                'success' => false,
                'message' => 'Unable to read uploaded file',
            ]);
        }

        $options = [
            'headers' => $this->personioRequestHeaders(),
            'multipart' => [
                [
                    'name' => 'file',
                    'filename' => $uploadedName,
                    'contents' => $contents,
                    'headers' => [
                        'Content-Type' => $uploadedFile->getClientMediaType() ?? 'application/octet-stream',
                    ],
                ],
            ],
        ];
        try {
            $responseBody = $this->getClient()->post($api, $options)->getBody()->getContents();
            $decodedBody = json_decode($responseBody, true);
            if (!is_array($decodedBody)) {
                $this->emitJsonResponse([
                    'success' => false,
                    'message' => 'Invalid document API response',
                ]);
            }
            $this->emitJsonResponse($decodedBody);
        } catch (\GuzzleHttp\Exception\RequestException $e) {
            $message = $e->getMessage();
            $errorResponse = $e->getResponse();
            if ($errorResponse !== null) {
                $plain = $this->plainPersonioErrorMessage($errorResponse->getBody()->getContents());
                if ($plain !== '') {
                    $message = $plain;
                }
            }
            $this->emitJsonResponse([
                'success' => false,
                'message' => $message,
            ]);
        }
    }

    private function getFirstUploadedFile(string $key): ?UploadedFileInterface
    {
        $serverRequest = $GLOBALS['TYPO3_REQUEST'] ?? null;
        $uploadedFiles = $serverRequest instanceof ServerRequestInterface
            ? $serverRequest->getUploadedFiles()
            : [];
        if ($uploadedFiles === []) {
            $uploadedFiles = $this->request->getUploadedFiles();
        }
        $uploaded = $uploadedFiles[$key] ?? ($uploadedFiles === [] ? null : reset($uploadedFiles));
        while (is_array($uploaded)) {
            $uploaded = reset($uploaded);
        }
        return $uploaded instanceof UploadedFileInterface ? $uploaded : null;
    }

    private function plainPersonioErrorMessage(string $responseBody): string
    {
        $plain = trim($responseBody);
        if ($plain === '' || str_starts_with($plain, '<')) {
            return '';
        }
        return $plain;
    }

    /**
     * Guzzle 7.9+/8 rejects non-string header values (e.g. int company id).
     *
     * @param array<string, string> $extra
     * @return array<string, string>
     */
    private function personioRequestHeaders(array $extra = []): array
    {
        return array_merge([
            'Accept' => 'application/json',
            'X-Company-ID' => (string) ($this->settings['companyId'] ?? ''),
            'Authorization' => 'Bearer ' . (string) ($this->settings['accessToken'] ?? ''),
        ], $extra);
    }

    /**
     * Stop page rendering and send JSON. echo/die from a plugin hangs TYPO3 shutdown.
     *
     * @throws PropagateResponseException
     */
    private function emitJsonResponse(array $payload): never
    {
        throw new PropagateResponseException(
            $this->jsonResponse((string)json_encode($payload)),
            1760943512
        );
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

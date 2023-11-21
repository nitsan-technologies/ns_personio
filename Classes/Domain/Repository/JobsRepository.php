<?php

declare(strict_types=1);

namespace NITSAN\NsPersonio\Domain\Repository;

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Database\ConnectionPool;
use TYPO3\CMS\Extbase\Persistence\Exception\InvalidQueryException;
use TYPO3\CMS\Extbase\Persistence\QueryResultInterface;
use TYPO3\CMS\Extbase\Persistence\Repository;
use TYPO3\CMS\Extbase\Persistence\Generic\Typo3QuerySettings;

/**
 * This file is part of the "NsPersonio" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * (c) 2023 Team NITSAN <info@nitsan.in>, NITSAN Technologies Pvt Ltd
 */

/**
 * JobsRepository
 */
class JobsRepository extends Repository
{
    /**
     * initializeObject
     *
     * @return void
     */
    public function initializeObject() : void
    {
        $querySettings = GeneralUtility::makeInstance(Typo3QuerySettings::class);
        $querySettings->setRespectStoragePage(false);
        $querySettings->setRespectSysLanguage(false);
        $this->setDefaultQuerySettings($querySettings);
    }

    /**
     * @param int $languageUid
     * @param array $storagePid
     * @return array|object[]|QueryResultInterface
     */
    public function fetchJobs(int $languageUid, array $storagePid)
    {
        $query = $this->createQuery();
        $constraints = [];
        $constraints[] = $query->equals('sys_language_uid', $languageUid);
        $conditions = [];
        foreach ($storagePid as $pid) {
            $conditions[] =  $query->equals('pid', $pid);
        }
        $constraints[] = $query->logicalOr(...array_values($conditions));
        $query->matching($query->logicalAnd(...array_values($constraints)));
        return $query->execute();
    }

    /**
     * deleteAllJobs
     *
     * @param int $lang
     * @param int $pageId
     * @return void
     */
    public function deleteAllJobs(int $lang, int $pageId) : void
    {
        $queryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)->getQueryBuilderForTable('tx_nspersonio_domain_model_jobs');
        $queryBuilder
        ->delete('tx_nspersonio_domain_model_jobs')
        ->where(
            $queryBuilder->expr()->eq('sys_language_uid', $queryBuilder->createNamedParameter($lang)),
            $queryBuilder->expr()->eq('pid', $queryBuilder->createNamedParameter($pageId))
        )
        ->execute();
    }

    /**
     * @param array $arguments
     * @param array $storagePages
     * @param int $langId
     * @return array|QueryResultInterface
     * @throws InvalidQueryException
     */
    public function dataFilterAndSort(array $arguments, array $storagePages, int $langId)
    {
        $query = $this->createQuery();
        $constraints = $searchConstraints = $storageConstraints = [];
        foreach ($storagePages as $index => $value) {
            $storageConstraints[] = $query->equals('pid', (int)$value);
        }
        $constraints[] = $query->logicalOr(...$storageConstraints);
        $constraints[] = $query->equals('sys_language_uid', $langId);
        if (!empty($arguments['search-word'])) {
            $searchConstraints[] = $query->like('name', '%' . $arguments['search-word'] . '%');
             $searchConstraints[] = $query->like('descriptions', '%' . $arguments['search-word'] . '%');
            $constraints[] = $query->logicalOr(...$searchConstraints);
        }
        $query->matching($query->logicalAnd(...$constraints));
        return $query->execute();
    }
}

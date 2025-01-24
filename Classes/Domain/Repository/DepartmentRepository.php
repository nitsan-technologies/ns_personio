<?php

declare(strict_types=1);

namespace NITSAN\NsPersonio\Domain\Repository;

use Doctrine\DBAL\Exception;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Database\ConnectionPool;
use TYPO3\CMS\Extbase\Persistence\Repository;
use TYPO3\CMS\Extbase\Persistence\Generic\Typo3QuerySettings;
use TYPO3\CMS\Core\Database\Query\QueryBuilder;
use TYPO3\CMS\Core\Utility\VersionNumberUtility;

/**
 * This file is part of the "Personio" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * (c) 2023 Team NITSAN <info@nitsan.in>, NITSAN Technologies Pvt Ltd
 */

/**
 * DepartmentRepository
 */
class DepartmentRepository extends Repository
{
    /**
     * initializeObject
     *
     * @return void
     */
    public function initializeObject(): void
    {
        $querySettings = GeneralUtility::makeInstance(Typo3QuerySettings::class);
        $querySettings->setRespectStoragePage(false);
        $querySettings->setRespectSysLanguage(false);
        $this->setDefaultQuerySettings($querySettings);
    }

    /**
     * deleteAllDepartments
     *
     * @param int $lang
     * @param int $pageId
     * @return void
     */
    public function deleteAllDepartments(int $lang, int $pageId): void
    {
        $queryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)
            ->getQueryBuilderForTable('tx_nspersonio_domain_model_department');

        $query = $queryBuilder
            ->delete('tx_nspersonio_domain_model_department')
            ->where(
                $queryBuilder->expr()->eq('sys_language_uid', $queryBuilder->createNamedParameter($lang)),
                $queryBuilder->expr()->eq('pid', $queryBuilder->createNamedParameter($pageId))
            );

        $this->executeQuery($query);
    }

    /**
     * getUid
     *
     * @param string $departmentName
     * @param int $language_code
     * @return int|null
     * @throws Exception
     */
    public function getUid(string $departmentName, int $language_code): ?int
    {
        $queryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)
            ->getQueryBuilderForTable('tx_nspersonio_domain_model_department');

        $query = $queryBuilder
            ->select('uid')
            ->from('tx_nspersonio_domain_model_department')
            ->where(
                $queryBuilder->expr()->eq('name', $queryBuilder->createNamedParameter($departmentName)),
                $queryBuilder->expr()->eq('sys_language_uid', $queryBuilder->createNamedParameter($language_code))
            );

        $typo3VersionArray = VersionNumberUtility::convertVersionStringToArray(
            VersionNumberUtility::getCurrentTypo3Version()
        );

        if (version_compare((string)$typo3VersionArray['version_main'], '11', '<=')) {

            $result = $this->executeQuery($query)->fetch();
        } else {
            $result = $this->executeQuery($query)->fetchAssociative();
        }

        return $result['uid'] ?? null;
    }

    /**
     * Executes a query, handling version differences for TYPO3.
     *
     * @param QueryBuilder $query
     * @return \Doctrine\DBAL\Result
     */
    private function executeQuery(QueryBuilder $query)
    {
        $typo3VersionArray = VersionNumberUtility::convertVersionStringToArray(
            VersionNumberUtility::getCurrentTypo3Version()
        );
        if (version_compare((string)$typo3VersionArray['version_main'], '12', '<=')) {

            return $query->execute();
        } else {
            return $query->executeQuery();
        }
    }

    /**
     * @param int $lang
     * @param array $storagePid
     * @return array|object[]|QueryResultInterface
     */
    public function fetchAll($lang, $storagePid)
    {
        $query = $this->createQuery();
        $constraints = [];
        $constraints[] = $query->equals('sys_language_uid', $lang);
        $conditions = [];
        foreach ($storagePid as $pid) {
            $conditions[] =  $query->equals('pid', $pid);
        }
        $constraints[] = $query->logicalOr(...array_values($conditions));
        $query->matching($query->logicalAnd(...array_values($constraints)));
        return $query->execute();
    }
}

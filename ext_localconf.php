<?php

defined('TYPO3_MODE') || die();

use TYPO3\CMS\Core\Imaging\IconRegistry;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Utility\ExtensionUtility;
use NITSAN\NsPersonio\Controller\JobsController;
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider;
use TYPO3\CMS\Core\Utility\VersionNumberUtility;

$typo3VersionArray = VersionNumberUtility::convertVersionStringToArray(VersionNumberUtility::getCurrentTypo3Version());

if (version_compare($typo3VersionArray['version_main'], 10, '<')) {
    $jobsController = 'Jobs';
} else {
    $jobsController = JobsController::class;
}

ExtensionUtility::configurePlugin(
    'NITSAN.NsPersonio',
    'Pi1',
    [
        $jobsController => 'list'
    ],
    // non-cacheable actions
    [
        $jobsController => 'list'
    ]
);

ExtensionUtility::configurePlugin(
    'NITSAN.NsPersonio',
    'Pi2',
    [
        $jobsController => 'detail'
    ],

);

ExtensionUtility::configurePlugin(
    'NITSAN.NsPersonio',
    'Pi3',
    [
        $jobsController => 'application, submitApplication, fileProcess'
    ],
    // non-cacheable actions
    [
        $jobsController => 'application, submitApplication, fileProcess'
    ]
);

ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:ns_personio/Configuration/page.tsconfig">'
);
$iconRegistry = GeneralUtility::makeInstance(IconRegistry::class);
$iconRegistry->registerIcon(
    'ns-personio-plugin-pi1',
    SvgIconProvider::class,
    ['source' => 'EXT:ns_personio/ext_icon.svg']
);
$iconRegistry->registerIcon(
    'ns-personio-plugin',
    SvgIconProvider::class,
    ['source' => 'EXT:ns_personio/Resources/Public/Icons/Extension.svg']
);


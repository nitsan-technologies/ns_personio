<?php

defined('TYPO3_MODE') || defined('TYPO3') || die();

$typo3VersionArray = \TYPO3\CMS\Core\Utility\VersionNumberUtility::convertVersionStringToArray(
    \TYPO3\CMS\Core\Utility\VersionNumberUtility::getCurrentTypo3Version()
);

if (version_compare((string)$typo3VersionArray['version_main'], '10', '<')) {
    $jobsController = 'Jobs';
    $extensionName = 'NITSAN.NsPersonio';
} else {
    $jobsController = \NITSAN\NsPersonio\Controller\JobsController::class;
    $extensionName = 'NsPersonio';
}

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
    $extensionName,
    'Pi1',
    [
        $jobsController => 'list'
    ],
    // non-cacheable actions
    [
        $jobsController => 'list'
    ]
);

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
    $extensionName,
    'Pi2',
    [
        $jobsController => 'detail'
    ],
);

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
    $extensionName,
    'Pi3',
    [
        $jobsController => 'application, submitApplication, fileProcess'
    ],
    // non-cacheable actions
    [
        $jobsController => 'application, submitApplication, fileProcess'
    ]
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:ns_personio/Configuration/page.tsconfig">'
);
$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
    \TYPO3\CMS\Core\Imaging\IconRegistry::class
);
$iconRegistry->registerIcon(
    'ns-personio-plugin-pi1',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:ns_personio/ext_icon.svg']
);
$iconRegistry->registerIcon(
    'ns-personio-plugin',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:ns_personio/Resources/Public/Icons/Extension.svg']
);

<?php

defined('TYPO3_MODE') || defined('TYPO3') || die();

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

ExtensionManagementUtility::addStaticFile(
    'ns_personio',
    'Configuration/TypoScript',
    'Personio'
);

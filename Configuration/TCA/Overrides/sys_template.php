<?php

defined('TYPO3_MODE') || die();

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

ExtensionManagementUtility::addStaticFile(
    'ns_personio', 
    'Configuration/TypoScript', 
    'NsPersonio'
);

<?php

defined('TYPO3') or die();

use TYPO3\CMS\Extbase\Utility\ExtensionUtility;
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

$pluginArray = [
    [
        'plugin_name' => 'Pi1',
        'plugin_title' => 'Personio Jobs List',
        'flexform' => 'flexform_pi1_joblisting.xml',
    ],
    [
        'plugin_name' => 'Pi2',
        'plugin_title' => 'Personio Jobs Details',
        'flexform' => 'flexform_pi2_jobdetail.xml',
    ],
    [
        'plugin_name' => 'Pi3',
        'plugin_title' => 'Personio Jobs Application',
        'flexform' => 'flexform_pi3_jobapplication.xml',
    ],
];

foreach ($pluginArray as $plugin) {
    ExtensionUtility::registerPlugin(
        'NsPersonio',
        $plugin['plugin_name'],
        $plugin['plugin_title'],
        'ns-personio-plugin-pi1',
        'plugins'
    );

    $signature = 'nspersonio_' . strtolower($plugin['plugin_name']);

    $GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist'][$signature] = 'pi_flexform';
    $GLOBALS['TCA']['tt_content']['types']['list']['subtypes_excludelist'][$signature] = 'recursive,select_key,pages';

    ExtensionManagementUtility::addPiFlexFormValue(
        '*',
        'FILE:EXT:ns_personio/Configuration/FlexForms/' . $plugin['flexform'],
        $signature
    );

    ExtensionManagementUtility::addToAllTCAtypes(
        'tt_content',
        '--div--;plugin,pi_flexform,',
        $signature,
        'after:subheader'
    );
}
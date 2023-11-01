<?php

defined('TYPO3') || die();

use TYPO3\CMS\Extbase\Utility\ExtensionUtility;
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

$signatures = [];
$plugins = [
    ['Pi1', 'Personio Jobs List', 'flexform_pi1_joblisting'],
    ['Pi2', 'Personio Jobs Details', 'flexform_pi2_jobdetail'],
    ['Pi3', 'Personio Jobs Application', 'flexform_pi3_jobapplication']
];

foreach ($plugins as $plugin) {
    $signature = ExtensionUtility::registerPlugin(
        'NsPersonio',
        $plugin[0],
        $plugin[1]
    );

    $signatures[] = $signature;
}

$config = [
    'flexform_pi1_joblisting' => $signatures[0],
    'flexform_pi2_jobdetail' => $signatures[1],
    'flexform_pi3_jobapplication' => $signatures[2]
];
foreach($config as $key => $value)
{
    $GLOBALS['TCA']['tt_content']['types']['list']['subtypes_excludelist'][$value] = 'pages,layout,select_key,recursive';

    $GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist'][$value] = 'pi_flexform';

    ExtensionManagementUtility::addPiFlexFormValue(
        $value,
        'FILE:EXT:ns_personio/Configuration/FlexForms/'.$key.'.xml'
    );
}

$config = [
    'flexform_pi1_joblisting' => 'Pi1',
    'flexform_pi2_jobdetail' => 'Pi2',
    'flexform_pi3_jobapplication' => 'Pi3'
];

foreach ($config as $key => $value) {
    $subtypesExcludelist = &$GLOBALS['TCA']['tt_content']['types']['list']['subtypes_excludelist'];
    $subtypesAddlist = &$GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist'];

    $subtypesExcludelist[$value] = 'pages,layout,select_key,recursive';
    $subtypesAddlist[$value] = 'pi_flexform';

    ExtensionManagementUtility::addPiFlexFormValue(
        $value,
        'FILE:EXT:ns_personio/Configuration/FlexForms/'.$key.'.xml'
    );
}


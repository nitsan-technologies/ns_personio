<?php

defined('TYPO3') || die();

use TYPO3\CMS\Extbase\Utility\ExtensionUtility;
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

$signaturePi1 = ExtensionUtility::registerPlugin(
    'NsPersonio',
    'Pi1',
    'Personio Jobs List'
);

$signaturePi2 = ExtensionUtility::registerPlugin(
    'NsPersonio',
    'Pi2',
    'Personio Jobs Details'
);

$signaturePi3 = ExtensionUtility::registerPlugin(
    'NsPersonio',
    'Pi3',
    'Personio Jobs Application'
);

$config = [
    'flexform_pi1_joblisting' => $signaturePi1,
    'flexform_pi2_jobdetail' => $signaturePi2,
    'flexform_pi3_jobapplication' => $signaturePi3
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

<?php

use TYPO3\CMS\Core\Utility\VersionNumberUtility;

$typo3VersionArray = VersionNumberUtility::convertVersionStringToArray(VersionNumberUtility::getCurrentTypo3Version());
if (version_compare((string)$typo3VersionArray['version_main'], '12', '>=')) {
    $sysLanguageUidConfig = [
        'exclude' => true,
        'label' => 'LLL:EXT:core/Resources/Private/Language/locallang_general.xlf:LGL.language',
        'config' => [
            'type' => 'language',
        ],
    ];
    $hiddenConfig = [
        'exclude' => true,
        'label' => 'LLL:EXT:core/Resources/Private/Language/locallang_general.xlf:LGL.enabled',
        'config' => [
            'type' => 'check',
            'renderType' => 'checkboxToggle',
            'items' => [
                [
                    'label' => '',
                    'invertStateDisplay' => true
                ]
            ],
        ]
    ];
    $starttimeConfig = [
        'exclude' => true,
        'label' => 'LLL:EXT:core/Resources/Private/Language/locallang_general.xlf:LGL.starttime',
        'config' => [
            'type' => 'datetime',
            'default' => 0,
        ],
        'l10n_mode' => 'exclude',
        'l10n_display' => 'defaultAsReadonly',
    ];
    $endtimeConfig = [
        'exclude' => true,
        'label' => 'LLL:EXT:core/Resources/Private/Language/locallang_general.xlf:LGL.endtime',
        'config' => [
            'type' => 'datetime',
            'default' => 0,
            'range' => [
                'upper' => mktime(0, 0, 0, 1, 1, 2038),
            ],
        ],
        'l10n_mode' => 'exclude',
        'l10n_display' => 'defaultAsReadonly',
    ];
} else {
    $sysLanguageUidConfig = [
        'exclude' => true,
        'label' => 'LLL:EXT:core/Resources/Private/Language/locallang_general.xlf:LGL.language',
        'config' => [
            'type' => 'select',
            'renderType' => 'selectSingle',
            'special' => 'languages',
            'items' => [
                [
                    'LLL:EXT:lang/locallang_general.xlf:LGL.allLanguages',
                    -1,
                    'flags-multiple'
                ]
            ],
            'default' => 0,
        ],
    ];
    $hiddenConfig = [
        'exclude' => true,
        'label' => 'LLL:EXT:core/Resources/Private/Language/locallang_general.xlf:LGL.visible',
        'config' => [
            'type' => 'check',
            'renderType' => 'checkboxToggle',
            'items' => [
                [
                    0 => '',
                    1 => '',
                    'invertStateDisplay' => true
                ]
            ],
        ],
    ];
    $starttimeConfig = [
        'exclude' => true,
        'label' => 'LLL:EXT:core/Resources/Private/Language/locallang_general.xlf:LGL.starttime',
        'config' => [
            'type' => 'input',
            'renderType' => 'inputDateTime',
            'eval' => 'datetime,int',
            'default' => 0,
            'behaviour' => [
                'allowLanguageSynchronization' => true
            ]
        ],
    ];
    $endtimeConfig = [
        'exclude' => true,
        'label' => 'LLL:EXT:core/Resources/Private/Language/locallang_general.xlf:LGL.endtime',
        'config' => [
            'type' => 'input',
            'renderType' => 'inputDateTime',
            'eval' => 'datetime,int',
            'default' => 0,
            'range' => [
                'upper' => mktime(0, 0, 0, 1, 1, 2038)
            ],
            'behaviour' => [
                'allowLanguageSynchronization' => true
            ]
        ],
    ];
}

return [
    'ctrl' => [
        'title' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_department',
        'label' => 'name',
        'tstamp' => 'tstamp',
        'crdate' => 'crdate',
        'versioningWS' => true,
        'languageField' => 'sys_language_uid',
        'transOrigPointerField' => 'l10n_parent',
        'transOrigDiffSourceField' => 'l10n_diffsource',
        'delete' => 'deleted',
        'enablecolumns' => [
            'disabled' => 'hidden',
            'starttime' => 'starttime',
            'endtime' => 'endtime',
        ],
        'searchFields' => 'name',
        'iconfile' => 'EXT:ns_personio/Resources/Public/Icons/tx_nspersonio_domain_model_department.gif'
    ],
    'types' => [
        '1' => ['showitem' => 'name, --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language, sys_language_uid, l10n_parent, l10n_diffsource, --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access, hidden, starttime, endtime'],
    ],
    'columns' => [
        'sys_language_uid' => $sysLanguageUidConfig,
        'l10n_parent' => [
            'displayCond' => 'FIELD:sys_language_uid:>:0',
            'label' => 'LLL:EXT:core/Resources/Private/Language/locallang_general.xlf:LGL.l18n_parent',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'default' => 0,
                'foreign_table' => 'tx_nspersonio_domain_model_department',
                'foreign_table_where' => 'AND {#tx_nspersonio_domain_model_department}.{#pid}=###CURRENT_PID### AND {#tx_nspersonio_domain_model_department}.{#sys_language_uid} IN (-1,0)',
            ],
        ],
        'l10n_diffsource' => [
            'config' => [
                'type' => 'passthrough',
            ],
        ],
        'hidden' => $hiddenConfig,
        'starttime' => $starttimeConfig,
        'endtime' => $endtimeConfig,
        'name' => [
            'exclude' => true,
            'label' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_department.name',
            'description' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_department.name.description',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'default' => ''
            ],
        ],
    ],
];

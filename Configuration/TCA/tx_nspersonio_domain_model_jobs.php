<?php
return [
    'ctrl' => [
        'title' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs',
        'label' => 'jobid',
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
        'searchFields' => 'jobid,subcompany,office,recruitingcategory,name,descriptions,employmenttype,seniority,schedule,experience,occupation,occupationcategory,createdat',
        'iconfile' => 'EXT:ns_personio/Resources/Public/Icons/tx_nspersonio_domain_model_jobs.gif'
    ],
    'types' => [
        '1' => ['showitem' => 'jobid, subcompany, office, recruitingcategory, name, slug, descriptions, employmenttype, seniority, schedule, experience, occupation, occupationcategory, createdat, department, --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language, sys_language_uid, l10n_parent, l10n_diffsource, --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access, hidden, starttime, endtime'],
    ],
    'columns' => [
        'sys_language_uid' => [
            'exclude' => true,
            'label' => 'LLL:EXT:core/Resources/Private/Language/locallang_general.xlf:LGL.language',
            'config' => [
                'type' => 'language',
            ],
        ],
        'l10n_parent' => [
            'displayCond' => 'FIELD:sys_language_uid:>:0',
            'label' => 'LLL:EXT:core/Resources/Private/Language/locallang_general.xlf:LGL.l18n_parent',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'default' => 0,
                'items' => [
                    ['', 0],
                ],
                'foreign_table' => 'tx_nspersonio_domain_model_jobs',
                'foreign_table_where' => 'AND {#tx_nspersonio_domain_model_jobs}.{#pid}=###CURRENT_PID### AND {#tx_nspersonio_domain_model_jobs}.{#sys_language_uid} IN (-1,0)',
            ],
        ],
        'l10n_diffsource' => [
            'config' => [
                'type' => 'passthrough',
            ],
        ],
        'hidden' => [
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
        ],
        'starttime' => [
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
        ],
        'endtime' => [
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
        ],

        'jobid' => [
            'exclude' => true,
            'label' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.jobid',
            'description' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.jobid.description',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'default' => ''
            ],
        ],
        'subcompany' => [
            'exclude' => true,
            'label' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.subcompany',
            'description' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.subcompany.description',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'default' => ''
            ],
        ],
        'office' => [
            'exclude' => true,
            'label' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.office',
            'description' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.office.description',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'default' => ''
            ],
        ],
        'recruitingcategory' => [
            'exclude' => true,
            'label' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.recruitingcategory',
            'description' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.recruitingcategory.description',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'default' => ''
            ],
        ],
        'name' => [
            'exclude' => true,
            'label' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.name',
            'description' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.name.description',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'default' => ''
            ],
        ],
        'descriptions' => [
            'exclude' => true,
            'label' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.descriptions',
            'description' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.descriptions.description',
            'config' => [
                'type' => 'text',
                'enableRichtext' => true,
                'richtextConfiguration' => 'default',
                'fieldControl' => [
                    'fullScreenRichtext' => [
                        'disabled' => false,
                    ],
                ],
                'cols' => 40,
                'rows' => 15,
                'eval' => 'trim',
            ],
            
        ],
        'employmenttype' => [
            'exclude' => true,
            'label' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.employmenttype',
            'description' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.employmenttype.description',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'default' => ''
            ],
        ],
        'seniority' => [
            'exclude' => true,
            'label' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.seniority',
            'description' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.seniority.description',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'default' => ''
            ],
        ],
        'schedule' => [
            'exclude' => true,
            'label' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.schedule',
            'description' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.schedule.description',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'default' => ''
            ],
        ],
        'experience' => [
            'exclude' => true,
            'label' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.experience',
            'description' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.experience.description',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'default' => ''
            ],
        ],
        'occupation' => [
            'exclude' => true,
            'label' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.occupation',
            'description' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.occupation.description',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'default' => ''
            ],
        ],
        'occupationcategory' => [
            'exclude' => true,
            'label' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.occupationcategory',
            'description' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.occupationcategory.description',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'default' => ''
            ],
        ],
        'createdat' => [
            'exclude' => true,
            'label' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.createdat',
            'description' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.createdat.description',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'default' => ''
            ],
        ],
        'department' => [
            'exclude' => true,
            'label' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.department',
            'description' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.department.description',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'foreign_table' => 'tx_nspersonio_domain_model_department',
                'default' => 0,
                'minitems' => 0,
                'maxitems' => 1,
            ],

        ],
        'language_code' => [
            'exclude' => true,
            'label' => 'LLL:EXT:ns_personio/Resources/Private/Language/locallang_db.xlf:tx_nspersonio_domain_model_jobs.language_code',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
                'default' => ''
            ],
        ],
        'slug' => [
            'label' => 'slug',
            'config' => [
              'type' => 'slug',
              'size' => 50,
              'generatorOptions' => [
                'fields' => [
                  'input',
                  ['name'],
                ],
                'replacements' => [
                  '/' => '-',
                ],
                'fieldSeparator' => '/',
                'prefixParentPageSlug' => true,
              ],
              'fallbackCharacter' => '-',
              'eval' => 'uniqueInSite',
              'default' => '',
            ],
        ],
    ],
];

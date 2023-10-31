<?php

$EM_CONF['ns_personio'] = [
    'title' => 'NsPersonio',
    'description' => 'Extension to integrate jobs from Personio Recruiting API',
    'category' => 'plugin',
    'author' => 'NITSAN Technologies Pvt Ltd',
    'author_email' => 'sanjay@nitsan.in',
    'author_company' => 'NITSAN Technologies Pvt Ltd',
    'state' => 'stable',
    'version' => '1.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '12.4.0-12.5.99',
            'scheduler' => '12.0.0-12.5.99',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];

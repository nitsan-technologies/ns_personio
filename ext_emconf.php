<?php

$EM_CONF['ns_personio'] = [
    'title' => '[NITSAN] Personio',
    'description' => 'This TYPO3 CMS extension seamlessly integrates a job portal from the Personio Recruiting API into TYPO3. It offers a range of features, including job listing, customizable layouts and designs, robust search and filtering options, and a user-friendly application form etc. Explore more https://t3planet.com/typo3-personio-extension',
    'category' => 'plugin',
    'author' => 'T3: Nilesh Malankiya, T3: Parth Parmar, T3: Rohan Parmar, QA: Krishna Dhapa',
    'author_email' => 'sanjay@nitsantech.com',
    'author_company' => 'NITSAN Technologies Pvt Ltd',
    'state' => 'stable',
    'version' => '1.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '9.5.0-11.5.99',
            'scheduler' => '9.5.0-11.5.99',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];

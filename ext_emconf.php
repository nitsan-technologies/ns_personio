<?php

$EM_CONF['ns_personio'] = [
    'title' => 'Personio',
    'description' => 'The extension offers various customization options for job listing, detail, and application pages on the frontend. Additionally, a scheduler ensures data synchronization. Directly list, view, and apply to Personio vacancies through the TYPO3 Backend. 
    
    *** Live Demo: https://demo.t3planet.com/t3-extensions/pro/typo3-personio/ *** Premium Version, Documentation & Free Support: https://t3planet.com/typo3-personio-extension',
    'category' => 'plugin',
    'author' => 'T3: Nilesh Malankiya, T3: Parth Parmar, T3: Rohan Parmar, QA: Krishna Dhapa',
    'author_email' => 'sanjay@nitsantech.com',
    'author_company' => 'T3Planet // NITSAN',
    'state' => 'stable',
    'version' => '1.0.1',
    'constraints' => [
        'depends' => [
            'typo3' => '9.5.0-12.5.99',
            'scheduler' => '9.5.0-12.5.99',
            'php' => '7.4.0-8.2.99',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];

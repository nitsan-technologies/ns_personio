<?php

$EM_CONF['ns_personio'] = [
    'title' => 'TYPO3 Personio Integration',
    'description' => 'Seamlessly integrate Personio job listings into your TYPO3 website. Customize job listings, detail pages, and application forms with real-time synchronization via TYPO3 Scheduler. Enables direct interaction with Personio from the TYPO3 backend.',
    
    'category' => 'plugin',
    'author' => 'Team T3Planet',
    'author_email' => 'info@t3planet.de',
    'author_company' => 'T3Planet',
    'state' => 'stable',
    'version' => '2.0.1',
    'constraints' => [
        'depends' => [
            'typo3' => '9.5.0-13.9.99',
            'scheduler' => '9.5.0-13.9.99',
            'php' => '7.4.0-8.3.99',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];

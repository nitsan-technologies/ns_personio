<?php

defined('TYPO3') || die();

use TYPO3\CMS\Extbase\Utility\ExtensionUtility;
use NITSAN\NsPersonio\Controller\JobsController;

ExtensionUtility::configurePlugin(
    'NsPersonio',
    'Pi1',
    [
        JobsController::class => 'list'
    ],
    // non-cacheable actions
    [
        JobsController::class => 'list'
    ]
);

ExtensionUtility::configurePlugin(
    'NsPersonio',
    'Pi2',
    [
        JobsController::class => 'detail'
    ],
);

ExtensionUtility::configurePlugin(
    'NsPersonio',
    'Pi3',
    [
        JobsController::class => 'application, submitApplication, fileProcess'
    ],
    // non-cacheable actions
    [
        JobsController::class => 'submitApplication, fileProcess'
    ]
);

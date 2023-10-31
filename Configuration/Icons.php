<?php

use TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider;

return [
   // use same identifier as used in TSconfig for icon
   'ns-personio-plugin-pi1' => [
      'provider' => SvgIconProvider::class,
      'source' => 'EXT:ns_personio/ext_icon.svg',
   ],
   'ns-personio-plugin' => [
      'provider' => SvgIconProvider::class,
      'source' => 'EXT:ns_personio/Resources/Public/Icons/Extension.svg'
   ]
];

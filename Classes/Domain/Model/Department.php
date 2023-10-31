<?php

declare(strict_types=1);

namespace NITSAN\NsPersonio\Domain\Model;

use TYPO3\CMS\Extbase\DomainObject\AbstractEntity;


/**
 * This file is part of the "NsPersonio" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * (c) 2023 Team NITSAN <info@nitsan.in>, NITSAN Technologies Pvt Ltd
 */

/**
 * Department
 */
class Department extends AbstractEntity
{
    /**
     * _languageUid
     * @var int<-1, max>|null
     */
    protected int|null $_languageUid = null;

    /**
     * languageCode
     * @var string
     */
    protected string $languageCode = '';

    /**
     * name
     *
     * @var string
     */
    protected string $name = '';

    /**
     * @param int $_languageUid
     * @return void
     */
    public function set_languageUid(int $_languageUid): void
    {
        $this->_languageUid = $_languageUid;
    }

    /**
     * @return int
     */
    public function get_languageUid(): ?int
    {
        return $this->_languageUid;
    }

    /**
     * Returns the name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Sets the name
     *
     * @param string $name
     * @return void
     */
    public function setName(string $name) : void
    {
        $this->name = $name;
    }

        /**
     * setLanguageCode
     * 
     * @param string $languageCode
     * @return void
     */
    public function setLanguageCode(string $languageCode) : void
    {
        $this->languageCode = $languageCode;
    }

    /**
     * getLanguageCode
     * 
     * @return string
     */
    public function getLanguageCode() : string
    {
        return $this->languageCode;
    }
}

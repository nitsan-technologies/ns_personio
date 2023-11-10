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
 * Jobs
 */
class Jobs extends AbstractEntity
{
    /**
     * _languageUid
     * @var int<-1, max>|null
     */
    protected $_languageUid = null;

    /**
     * languageCode
     * @var string
     */
    protected string $languageCode = '';


    /**
     * jobid
     *
     * @var string
     */
    protected string $jobid = '';

    /**
     * subcompany
     *
     * @var string
     */
    protected string $subcompany = '';

    /**
     * office
     *
     * @var string
     */
    protected string $office = '';

    /**
     * recruitingcategory
     *
     * @var string
     */
    protected string $recruitingcategory = '';

    /**
     * name
     *
     * @var string
     */
    protected string $name = '';

    /**
     * descriptions
     *
     * @var string
     */
    protected string $descriptions = '';

    /**
     * employmenttype
     *
     * @var string
     */
    protected string $employmenttype = '';

    /**
     * seniority
     *
     * @var string
     */
    protected string $seniority = '';

    /**
     * slug
     *
     * @var string
     */
    protected string $slug = '';

    /**
     * schedule
     *
     * @var string
     */
    protected string $schedule = '';

    /**
     * experience
     *
     * @var string
     */
    protected string $experience = '';

    /**
     * occupation
     *
     * @var string
     */
    protected string $occupation = '';

    /**
     * occupationcategory
     *
     * @var string
     */
    protected string $occupationcategory = '';

    /**
     * createdat
     *
     * @var string
     */
    protected string $createdat = '';

    /**
     * department
     *
     * @var \NITSAN\NsPersonio\Domain\Model\Department
     */
    protected $department = null;

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
     * Returns the jobid
     *
     * @return string
     */
    public function getJobid(): string
    {
        return $this->jobid;
    }

    /**
     * Sets the jobid
     *
     * @param string $jobid
     * @return void
     */
    public function setJobid(string $jobid): void
    {
        $this->jobid = $jobid;
    }

    /**
     * Returns the subcompany
     *
     * @return string
     */
    public function getSubcompany(): string
    {
        return $this->subcompany;
    }

    /**
     * Sets the subcompany
     *
     * @param string $subcompany
     * @return void
     */
    public function setSubcompany(string $subcompany): void
    {
        $this->subcompany = $subcompany;
    }

    /**
     * Returns the office
     *
     * @return string
     */
    public function getOffice(): string
    {
        return $this->office;
    }

    /**
     * Sets the office
     *
     * @param string $office
     * @return void
     */
    public function setOffice(string $office): void
    {
        $this->office = $office;
    }

    /**
     * Returns the recruitingcategory
     *
     * @return string
     */
    public function getRecruitingcategory(): string
    {
        return $this->recruitingcategory;
    }

    /**
     * Sets the recruitingcategory
     *
     * @param string $recruitingcategory
     * @return void
     */
    public function setRecruitingcategory(string $recruitingcategory): void
    {
        $this->recruitingcategory = $recruitingcategory;
    }

    /**
     * Returns the slug
     *
     * @return string
     */
    public function getSlug(): string
    {
        return $this->slug;
    }

    /**
     * Sets the slug
     *
     * @param string $slug
     * @return void
     */
    public function setSlug(string $slug): void
    {
        $this->slug = $slug;
    }

    /**
     * Returns the name
     *
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Sets the name
     *
     * @param string $name
     * @return void
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * Returns the descriptions
     *
     * @return string
     */
    public function getDescriptions(): string
    {
        return $this->descriptions;
    }

    /**
     * Sets the descriptions
     *
     * @param string $descriptions
     * @return void
     */
    public function setDescriptions(string $descriptions): void
    {
        $this->descriptions = $descriptions;
    }

    /**
     * Returns the employmenttype
     *
     * @return string
     */
    public function getEmploymenttype(): string
    {
        return $this->employmenttype;
    }

    /**
     * Sets the employmenttype
     *
     * @param string $employmenttype
     * @return void
     */
    public function setEmploymenttype(string $employmenttype): void
    {
        $this->employmenttype = $employmenttype;
    }

    /**
     * Returns the seniority
     *
     * @return string
     */
    public function getSeniority(): string
    {
        return $this->seniority;
    }

    /**
     * Sets the seniority
     *
     * @param string $seniority
     * @return void
     */
    public function setSeniority(string $seniority): void
    {
        $this->seniority = $seniority;
    }

    /**
     * Returns the schedule
     *
     * @return string
     */
    public function getSchedule(): string
    {
        return $this->schedule;
    }

    /**
     * Sets the schedule
     *
     * @param string $schedule
     * @return void
     */
    public function setSchedule(string $schedule): void
    {
        $this->schedule = $schedule;
    }

    /**
     * Returns the experience
     *
     * @return string
     */
    public function getExperience(): string
    {
        return $this->experience;
    }

    /**
     * Sets the experience
     *
     * @param string $experience
     * @return void
     */
    public function setExperience(string $experience): void
    {
        $this->experience = $experience;
    }

    /**
     * Returns the occupation
     *
     * @return string
     */
    public function getOccupation(): string
    {
        return $this->occupation;
    }

    /**
     * Sets the occupation
     *
     * @param string $occupation
     * @return void
     */
    public function setOccupation(string $occupation): void
    {
        $this->occupation = $occupation;
    }

    /**
     * Returns the occupationcategory
     *
     * @return string
     */
    public function getOccupationcategory(): string
    {
        return $this->occupationcategory;
    }

    /**
     * Sets the occupationcategory
     *
     * @param string $occupationcategory
     * @return void
     */
    public function setOccupationcategory(string $occupationcategory): void
    {
        $this->occupationcategory = $occupationcategory;
    }

    /**
     * Returns the createdat
     *
     * @return string
     */
    public function getCreatedat(): string
    {
        return $this->createdat;
    }

    /**
     * Sets the createdat
     *
     * @param string $createdat
     * @return void
     */
    public function setCreatedat(string $createdat): void
    {
        $this->createdat = $createdat;
    }

    /**
     * Returns the department
     *
     * @return \NITSAN\NsPersonio\Domain\Model\Department
     */
    public function getDepartment()
    {
        return $this->department;
    }

    /**
     * Sets the department
     *
     * @param \NITSAN\NsPersonio\Domain\Model\Department $department
     * @return void
     */
    public function setDepartment(\NITSAN\NsPersonio\Domain\Model\Department $department): void
    {
        $this->department = $department;
    }
}
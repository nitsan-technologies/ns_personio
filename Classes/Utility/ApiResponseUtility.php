<?php

namespace NITSAN\NsPersonio\Utility;


class ApiResponseUtility
{

    /**
     * @param array $apiResponse
     * @return string
     */
    public static function getApiResponse(array $apiResponse): string
    {
        if (isset($apiResponse['errors']) && is_array($apiResponse['errors'])) {
            foreach ($apiResponse['errors'] as $error) {
                if (isset($error['field']) && isset($error['errors']) && is_array($error['errors'])) {
                    foreach ($error['errors'] as $fieldError) {
                        if (isset($fieldError['reason'])) {
                            $error['field'] = ucfirst($error['field']);
                            switch ($fieldError['reason']) {
                                case 'errors.attribute-validation.unknown':
                                    $errorMessage = $error['field'].' is Unknown attribute validation error';
                                    break;
                                case 'errors.attribute-validation.required-attribute':
                                    $errorMessage = $error['field'].' Required attribute is missing';
                                    break;
                                case 'errors.attribute-validation.invalid-date-format':
                                    $errorMessage = $error['field'].' is invalid date format';
                                    break;
                                case 'errors.attribute-validation.invalid-email-format':
                                    $errorMessage = 'Invalid email format';
                                    break;
                                case 'errors.attribute-validation.invalid-type':
                                    $errorMessage = $error['field'].' Invalid attribute type';
                                    break;
                                case 'errors.attribute-validation.unknown-attribute-option':
                                    $errorMessage = $error['field'].' Unknown attribute option';
                                    break;
                                case 'errors.date-validation.date-in-the-future':
                                    $errorMessage = $error['field'].' Date is in the future';
                                    break;
                                case 'errors.phase-validation.invalid-system-phase':
                                    $errorMessage = $error['field'].' Invalid system phase';
                                    break;
                                case 'errors.file-validation.file-not-exists':
                                    $errorMessage = $error['field'].' File does not exist';
                                    break;
                                case 'errors.invalid-file-type':
                                    $errorMessage = $error['field'].' Invalid file type';
                                    break;
                                case 'errors.file-too-big':
                                    $errorMessage = $error['field'].' File is too big';
                                    break;
                                case 'errors.applicant-already-exists':
                                    $errorMessage = $error['field'].' is already exists';
                                    break;
                                case 'errors.posting-validation.posting-not-found':
                                    $errorMessage =  'Posting not found';
                                    break;
                                case 'errors.posting-validation.channel-not-found':
                                    $errorMessage = 'Posting channel not found';
                                    break;
                                case 'feature.recruiting.disabled':
                                    $errorMessage = 'Recruiting feature is disabled';
                                    break;
                                case 'feature.public-api.disabled':
                                    $errorMessage = 'Public API is disabled';
                                    break;
                                default:
                                    $errorMessage = 'An unknown error occurred';
                                    break;
                            }
                            return $errorMessage;
                        }
                    }
                }
            }
        }
        return '';
    }
}

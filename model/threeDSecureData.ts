/**
 * Gr4vy API
 * Welcome to the Gr4vy API reference documentation. Our API is still very much a work in product and subject to change.
 *
 * The version of the OpenAPI document: 1.1.0-beta
 * Contact: code@gr4vy.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class ThreeDSecureData {
    /**
    * The cardholder authentication value or AAV.
    */
    'cavv': string;
    /**
    * The electronic commerce indicator for the 3DS transaction.
    */
    'eci': string;
    /**
    * The version of 3-D Secure that was used.
    */
    'version': string;
    /**
    * For 3-D Secure version 1, the enrolment response. For 3-D Secure version , the transaction status from the `ARes`.
    */
    'directoryResponse': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cavv",
            "baseName": "cavv",
            "type": "string"
        },
        {
            "name": "eci",
            "baseName": "eci",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        },
        {
            "name": "directoryResponse",
            "baseName": "directory_response",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ThreeDSecureData.attributeTypeMap;
    }
}


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

/**
* Details about the error resulting from 3DS processing a Transaction.
*/
export class ThreeDSecureError {
    /**
    * The error description.
    */
    'description': string | null;
    /**
    * Detail for the error.
    */
    'detail': string | null;
    /**
    * The error code.
    */
    'code': string | null;
    /**
    * Code indicating the 3-D Secure component that identified the error..
    */
    'component': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "component",
            "baseName": "component",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ThreeDSecureError.attributeTypeMap;
    }
}


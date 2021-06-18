/**
 * Gr4vy API (Beta)
 * Welcome to the Gr4vy API reference documentation. Our API is still very much a work in product and subject to change.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: code@gr4vy.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* A request to reset a password for a user.
*/
export class ResetPasswordRequest {
    /**
    * The email address of the user account to reset.
    */
    'emailAddress'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "emailAddress",
            "baseName": "email_address",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ResetPasswordRequest.attributeTypeMap;
    }
}

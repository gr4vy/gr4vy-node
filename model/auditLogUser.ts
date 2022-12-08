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
* The user who performed the action.
*/
export class AuditLogUser {
    /**
    * The ID of the user.
    */
    'id'?: string;
    /**
    * The name of the user.
    */
    'name'?: string;
    /**
    * The email address for this user.
    */
    'emailAddress'?: string | null;
    /**
    * Whether the user is Gr4vy staff.
    */
    'staff'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "emailAddress",
            "baseName": "email_address",
            "type": "string"
        },
        {
            "name": "staff",
            "baseName": "staff",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return AuditLogUser.attributeTypeMap;
    }
}


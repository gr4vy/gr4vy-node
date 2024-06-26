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
import { ErrorDetail } from './errorDetail';

/**
* Not Found Error (HTTP 404).
*/
export class Error404NotFound {
    /**
    * `error`.
    */
    'type'?: Error404NotFound.TypeEnum;
    /**
    * The reason code for the error.
    */
    'code'?: Error404NotFound.CodeEnum;
    /**
    * `404`.
    */
    'status'?: Error404NotFound.StatusEnum;
    /**
    * The human readable reason for the error.
    */
    'message'?: string;
    /**
    * A list of detail objects that further clarify the reason for the error. Not every error supports more detail.
    */
    'details'?: Array<ErrorDetail>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "Error404NotFound.TypeEnum"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "Error404NotFound.CodeEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Error404NotFound.StatusEnum"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "Array<ErrorDetail>"
        }    ];

    static getAttributeTypeMap() {
        return Error404NotFound.attributeTypeMap;
    }
}

export namespace Error404NotFound {
    export enum TypeEnum {
        Error = <any> 'error'
    }
    export enum CodeEnum {
        NotFound = <any> 'not_found',
        PendingCreation = <any> 'pending_creation'
    }
    export enum StatusEnum {
        NUMBER_404 = <any> 404
    }
}

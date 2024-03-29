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
* Bad Request (HTTP 400).
*/
export class Error400BadRequest {
    /**
    * `error`.
    */
    'type'?: Error400BadRequest.TypeEnum;
    /**
    * `bad_request`.
    */
    'code'?: Error400BadRequest.CodeEnum;
    /**
    * `400`.
    */
    'status'?: Error400BadRequest.StatusEnum;
    /**
    * Describes the fields that are missing or incorrectly formatted in the API request.
    */
    'message'?: string;
    /**
    * A list of detail objects that further clarify the reason for the error.
    */
    'details'?: Array<ErrorDetail>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "Error400BadRequest.TypeEnum"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "Error400BadRequest.CodeEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Error400BadRequest.StatusEnum"
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
        return Error400BadRequest.attributeTypeMap;
    }
}

export namespace Error400BadRequest {
    export enum TypeEnum {
        Error = <any> 'error'
    }
    export enum CodeEnum {
        BadRequest = <any> 'bad_request'
    }
    export enum StatusEnum {
        NUMBER_400 = <any> 400
    }
}

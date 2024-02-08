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
* Too Many Requests Error (HTTP 429).
*/
export class Error429TooManyRequests {
    /**
    * `error`.
    */
    'type'?: Error429TooManyRequests.TypeEnum;
    /**
    * `too_many_requests`.
    */
    'code'?: Error429TooManyRequests.CodeEnum;
    /**
    * `429`.
    */
    'status'?: Error429TooManyRequests.StatusEnum;
    /**
    * Further details on the field that triggered the error.
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
            "type": "Error429TooManyRequests.TypeEnum"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "Error429TooManyRequests.CodeEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Error429TooManyRequests.StatusEnum"
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
        return Error429TooManyRequests.attributeTypeMap;
    }
}

export namespace Error429TooManyRequests {
    export enum TypeEnum {
        Error = <any> 'error'
    }
    export enum CodeEnum {
        TooManyRequests = <any> 'too_many_requests'
    }
    export enum StatusEnum {
        NUMBER_429 = <any> 429
    }
}
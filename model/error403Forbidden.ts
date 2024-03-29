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
* Forbidden Error (HTTP 403).
*/
export class Error403Forbidden {
    /**
    * `error`.
    */
    'type'?: Error403Forbidden.TypeEnum;
    /**
    * `forbidden`.
    */
    'code'?: Error403Forbidden.CodeEnum;
    /**
    * `403`.
    */
    'status'?: Error403Forbidden.StatusEnum;
    /**
    * Invalid credentials.
    */
    'message'?: Error403Forbidden.MessageEnum;
    /**
    * A list of detail objects that further clarify the reason for the error. Not every error supports more detail.
    */
    'details'?: Array<ErrorDetail>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "Error403Forbidden.TypeEnum"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "Error403Forbidden.CodeEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Error403Forbidden.StatusEnum"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "Error403Forbidden.MessageEnum"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "Array<ErrorDetail>"
        }    ];

    static getAttributeTypeMap() {
        return Error403Forbidden.attributeTypeMap;
    }
}

export namespace Error403Forbidden {
    export enum TypeEnum {
        Error = <any> 'error'
    }
    export enum CodeEnum {
        Forbidden = <any> 'forbidden'
    }
    export enum StatusEnum {
        NUMBER_403 = <any> 403
    }
    export enum MessageEnum {
        InvalidCredentials = <any> 'Invalid credentials'
    }
}

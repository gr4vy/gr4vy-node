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
* Unauthorized Error (HTTP 401).
*/
export class Error401Unauthorized {
    /**
    * `error`.
    */
    'type'?: Error401Unauthorized.TypeEnum;
    /**
    * `unauthorized`.
    */
    'code'?: Error401Unauthorized.CodeEnum;
    /**
    * `401`.
    */
    'status'?: Error401Unauthorized.StatusEnum;
    /**
    * No valid API authentication found.
    */
    'message'?: Error401Unauthorized.MessageEnum;
    /**
    * A list of detail objects that further clarify the reason for the error. Not every error supports more detail.
    */
    'details'?: Array<ErrorDetail>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "Error401Unauthorized.TypeEnum"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "Error401Unauthorized.CodeEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Error401Unauthorized.StatusEnum"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "Error401Unauthorized.MessageEnum"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "Array<ErrorDetail>"
        }    ];

    static getAttributeTypeMap() {
        return Error401Unauthorized.attributeTypeMap;
    }
}

export namespace Error401Unauthorized {
    export enum TypeEnum {
        Error = <any> 'error'
    }
    export enum CodeEnum {
        Unauthorized = <any> 'unauthorized'
    }
    export enum StatusEnum {
        NUMBER_401 = <any> 401
    }
    export enum MessageEnum {
        NoValidApiAuthenticationFound = <any> 'No valid API authentication found'
    }
}

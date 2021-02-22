/**
 * Gr4vy API (Beta)
 * Welcome to the Gr4vy API reference documentation. Our API is still very much a work in product and subject to change.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@gr4vy.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* Details for a previously tokenized payment method.
*/
export class TokenRequest {
    /**
    * `token`.
    */
    'method': TokenRequest.MethodEnum;
    /**
    * A Gr4vy token that represents a previously tokenized payment method, in the format of a card number starting with the digit 0. This token can represent any type of payment method.
    */
    'token': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "method",
            "baseName": "method",
            "type": "TokenRequest.MethodEnum"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TokenRequest.attributeTypeMap;
    }
}

export namespace TokenRequest {
    export enum MethodEnum {
        Token = <any> 'token'
    }
}

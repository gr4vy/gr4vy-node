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
* Details for a previously tokenized payment method.
*/
export class TokenizedRequest {
    /**
    * `id`.
    */
    'method': TokenizedRequest.MethodEnum;
    /**
    * A ID that represents a previously tokenized payment method. This token can represent any type of payment method.
    */
    'id': string;
    /**
    * We strongly recommended providing a `redirect_url` for stored cards when 3-D Secure is enabled and `three_d_secure_data` is not provided. This will be appended with both a transaction ID and status (e.g. `https://example.com/callback? gr4vy_transaction_id=123&gr4vy_transaction_status=capture_succeeded`) after 3-D Secure has completed.
    */
    'redirectUrl'?: string;
    /**
    * The 3 or 4 digit security code often found on the card. This often referred to as the CVV or CVD.  The security code can only be set if the stored payment method represents a card.
    */
    'securityCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "method",
            "baseName": "method",
            "type": "TokenizedRequest.MethodEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "redirectUrl",
            "baseName": "redirect_url",
            "type": "string"
        },
        {
            "name": "securityCode",
            "baseName": "security_code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TokenizedRequest.attributeTypeMap;
    }
}

export namespace TokenizedRequest {
    export enum MethodEnum {
        Id = <any> 'id'
    }
}

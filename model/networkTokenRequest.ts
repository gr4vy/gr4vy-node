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
* Request body for provision a network token.
*/
export class NetworkTokenRequest {
    /**
    * The 3 or 4 digit security code often found on the card. This often referred to as the CVV or CVD.  The security code can only be set if the stored payment method represents a card.
    */
    'securityCode'?: string | null;
    /**
    * Defines if the request is merchant initiated or not.
    */
    'merchantInitiated': boolean;
    /**
    * Defines if the request is a subsequent of another request or not.
    */
    'isSubsequentPayment': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "securityCode",
            "baseName": "security_code",
            "type": "string"
        },
        {
            "name": "merchantInitiated",
            "baseName": "merchant_initiated",
            "type": "boolean"
        },
        {
            "name": "isSubsequentPayment",
            "baseName": "is_subsequent_payment",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return NetworkTokenRequest.attributeTypeMap;
    }
}


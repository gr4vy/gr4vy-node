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
* Create a transaction with this gift card.
*/
export class TransactionGiftCardRequest {
    /**
    * The ID of the gift card to check a balance for. Required if `number` is not set.
    */
    'id'?: string;
    /**
    * The 16-19 digit number for this gift card. Required if `id` is not set.
    */
    'number'?: string;
    /**
    * The PIN for this gift card. Required if `number` is set.
    */
    'pin'?: string;
    /**
    * The monetary amount to charge for this gift card, in the smallest currency unit for the given currency, for example `1299` cents to create an authorization for `$12.99`.  All gift card amounts are subtracted from the total transaction amount. The remainder is charged to the provided `payment_method`.
    */
    'amount': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "pin",
            "baseName": "pin",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TransactionGiftCardRequest.attributeTypeMap;
    }
}


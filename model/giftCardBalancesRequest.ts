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
import { GiftCardBalanceRequest } from './giftCardBalanceRequest';

/**
* A request to check the balance for a set of stored and non-stored gift cards.
*/
export class GiftCardBalancesRequest {
    /**
    * One or more gift cards to check balances for, up to a default limit of 10 gift cards. Please contact our team to change this limit.
    */
    'items'?: Array<GiftCardBalanceRequest>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<GiftCardBalanceRequest>"
        }    ];

    static getAttributeTypeMap() {
        return GiftCardBalancesRequest.attributeTypeMap;
    }
}


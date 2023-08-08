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
import { CartItem } from './cartItem';

/**
* A request to update a checkout session.
*/
export class CheckoutSessionUpdateRequest {
    /**
    * An array of cart items that represents the line items of a transaction.
    */
    'cartItems'?: Array<CartItem> | null;
    /**
    * Any additional information about the transaction that you would like to store as key-value pairs. This data is passed to payment service providers that support it.
    */
    'metadata'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cartItems",
            "baseName": "cart_items",
            "type": "Array<CartItem>"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutSessionUpdateRequest.attributeTypeMap;
    }
}


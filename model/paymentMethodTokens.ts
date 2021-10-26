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
import { PaymentMethodToken } from './paymentMethodToken';

/**
* A list of tokens for a payment method.
*/
export class PaymentMethodTokens {
    /**
    * A list of stored tokens for payment methods.
    */
    'items'?: Array<PaymentMethodToken>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<PaymentMethodToken>"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodTokens.attributeTypeMap;
    }
}


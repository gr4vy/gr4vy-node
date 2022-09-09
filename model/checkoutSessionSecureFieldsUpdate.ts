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
import { CardRequest } from './cardRequest';

/**
* A request to update the secure fields of a checkout session.
*/
export class CheckoutSessionSecureFieldsUpdate {
    'paymentMethod'?: CardRequest;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentMethod",
            "baseName": "payment_method",
            "type": "CardRequest"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutSessionSecureFieldsUpdate.attributeTypeMap;
    }
}

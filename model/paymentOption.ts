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
* An available payment option for a locale.
*/
export class PaymentOption {
    /**
    * `payment-option`.
    */
    'type'?: PaymentOption.TypeEnum;
    /**
    * The type of payment method that is available.
    */
    'method'?: PaymentOption.MethodEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentOption.TypeEnum"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "PaymentOption.MethodEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentOption.attributeTypeMap;
    }
}

export namespace PaymentOption {
    export enum TypeEnum {
        PaymentOption = <any> 'payment-option'
    }
    export enum MethodEnum {
        Card = <any> 'card',
        Paypal = <any> 'paypal'
    }
}

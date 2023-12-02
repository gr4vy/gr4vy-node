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
import { CheckoutSessionPaymentMethodDetails } from './checkoutSessionPaymentMethodDetails';

/**
* Details about the payment method for card type only.
*/
export class CheckoutSessionPaymentMethod {
    'type'?: string;
    /**
    * Unique ID for the payment method.
    */
    'id'?: string | null;
    /**
    * Payment method type.
    */
    'method'?: CheckoutSessionPaymentMethod.MethodEnum;
    /**
    * The scheme/brand of the card.
    */
    'scheme'?: CheckoutSessionPaymentMethod.SchemeEnum;
    /**
    * Last four digits of PAN.
    */
    'label'?: string | null;
    'details'?: CheckoutSessionPaymentMethodDetails | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "CheckoutSessionPaymentMethod.MethodEnum"
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "CheckoutSessionPaymentMethod.SchemeEnum"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "CheckoutSessionPaymentMethodDetails"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutSessionPaymentMethod.attributeTypeMap;
    }
}

export namespace CheckoutSessionPaymentMethod {
    export enum MethodEnum {
        Card = <any> 'card'
    }
    export enum SchemeEnum {
        Accel = <any> 'accel',
        Amex = <any> 'amex',
        Bancontact = <any> 'bancontact',
        CarteBancaire = <any> 'carte-bancaire',
        Cirrus = <any> 'cirrus',
        Culiance = <any> 'culiance',
        Dankort = <any> 'dankort',
        DinersClub = <any> 'diners-club',
        Discover = <any> 'discover',
        EftposAustralia = <any> 'eftpos-australia',
        Elo = <any> 'elo',
        Hipercard = <any> 'hipercard',
        Jcb = <any> 'jcb',
        Maestro = <any> 'maestro',
        Mastercard = <any> 'mastercard',
        Nyce = <any> 'nyce',
        Other = <any> 'other',
        Pulse = <any> 'pulse',
        Rupay = <any> 'rupay',
        Star = <any> 'star',
        Unionpay = <any> 'unionpay',
        Visa = <any> 'visa'
    }
}
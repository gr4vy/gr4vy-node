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
* A mini format version of a payment method.
*/
export class PaymentMethodTokenized {
    /**
    * `payment-method`.
    */
    'type'?: PaymentMethodTokenized.TypeEnum;
    /**
    * The unique ID of the payment method.
    */
    'id'?: string;
    'method'?: string;
    /**
    * A label for the payment method. For a `card` payment method this is the last 4 digits on the card. For others it would be the email address.
    */
    'label'?: string;
    /**
    * The type of the card, if the payment method is a card.
    */
    'scheme'?: PaymentMethodTokenized.SchemeEnum;
    /**
    * The expiration date for the payment method.
    */
    'expirationDate'?: string | null;
    /**
    * The optional URL that the buyer needs to be redirected to to further authorize their payment.
    */
    'approvalUrl'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentMethodTokenized.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "PaymentMethodTokenized.SchemeEnum"
        },
        {
            "name": "expirationDate",
            "baseName": "expiration_date",
            "type": "string"
        },
        {
            "name": "approvalUrl",
            "baseName": "approval_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodTokenized.attributeTypeMap;
    }
}

export namespace PaymentMethodTokenized {
    export enum TypeEnum {
        PaymentMethod = <any> 'payment-method'
    }
    export enum SchemeEnum {
        Visa = <any> 'visa',
        Mastercard = <any> 'mastercard',
        AmericanExpress = <any> 'american-express',
        DinersClub = <any> 'diners-club',
        Discover = <any> 'discover',
        Jcb = <any> 'jcb',
        Unionpay = <any> 'unionpay',
        Maestro = <any> 'maestro',
        Elo = <any> 'elo',
        Mir = <any> 'mir',
        Hiper = <any> 'hiper',
        Hipercard = <any> 'hipercard'
    }
}

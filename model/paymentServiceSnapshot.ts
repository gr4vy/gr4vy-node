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
* An active, configured payment service.
*/
export class PaymentServiceSnapshot {
    /**
    * The type of this resource.
    */
    'type'?: PaymentServiceSnapshot.TypeEnum;
    /**
    * The ID of this payment service.
    */
    'id'?: string;
    /**
    * The ID of the payment service definition used to create this service. 
    */
    'paymentServiceDefinitionId'?: string;
    /**
    * The payment method that this services handles.
    */
    'method'?: PaymentServiceSnapshot.MethodEnum;
    /**
    * The custom name set for this service.
    */
    'displayName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentServiceSnapshot.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "paymentServiceDefinitionId",
            "baseName": "payment_service_definition_id",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "PaymentServiceSnapshot.MethodEnum"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentServiceSnapshot.attributeTypeMap;
    }
}

export namespace PaymentServiceSnapshot {
    export enum TypeEnum {
        PaymentService = <any> 'payment-service'
    }
    export enum MethodEnum {
        Afterpay = <any> 'afterpay',
        Alipay = <any> 'alipay',
        Alipayhk = <any> 'alipayhk',
        Applepay = <any> 'applepay',
        Bacs = <any> 'bacs',
        Bancontact = <any> 'bancontact',
        Banked = <any> 'banked',
        Becs = <any> 'becs',
        Bitpay = <any> 'bitpay',
        Boleto = <any> 'boleto',
        Boost = <any> 'boost',
        Card = <any> 'card',
        CheckoutSession = <any> 'checkout-session',
        ClickToPay = <any> 'click-to-pay',
        Clearpay = <any> 'clearpay',
        Dana = <any> 'dana',
        Dcb = <any> 'dcb',
        Eps = <any> 'eps',
        Fortumo = <any> 'fortumo',
        Gcash = <any> 'gcash',
        Giropay = <any> 'giropay',
        Gocardless = <any> 'gocardless',
        Googlepay = <any> 'googlepay',
        Gopay = <any> 'gopay',
        Grabpay = <any> 'grabpay',
        Ideal = <any> 'ideal',
        Id = <any> 'id',
        Kakaopay = <any> 'kakaopay',
        Klarna = <any> 'klarna',
        Laybuy = <any> 'laybuy',
        Linepay = <any> 'linepay',
        Linkaja = <any> 'linkaja',
        Maybankqrpay = <any> 'maybankqrpay',
        Multibanco = <any> 'multibanco',
        Oney3x = <any> 'oney_3x',
        Oney4x = <any> 'oney_4x',
        Oney6x = <any> 'oney_6x',
        Oney10x = <any> 'oney_10x',
        Oney12x = <any> 'oney_12x',
        Ovo = <any> 'ovo',
        Oxxo = <any> 'oxxo',
        Paymaya = <any> 'paymaya',
        Paypal = <any> 'paypal',
        Paypalpaylater = <any> 'paypalpaylater',
        Pix = <any> 'pix',
        Rabbitlinepay = <any> 'rabbitlinepay',
        Razorpay = <any> 'razorpay',
        Scalapay = <any> 'scalapay',
        Sepa = <any> 'sepa',
        Shopeepay = <any> 'shopeepay',
        Singteldash = <any> 'singteldash',
        Sofort = <any> 'sofort',
        Stripedd = <any> 'stripedd',
        Thaiqr = <any> 'thaiqr',
        Touchngo = <any> 'touchngo',
        Truemoney = <any> 'truemoney',
        Trustly = <any> 'trustly',
        Venmo = <any> 'venmo',
        Waave = <any> 'waave',
        Wechat = <any> 'wechat',
        Zippay = <any> 'zippay'
    }
}

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
* The payment service used for this transaction.
*/
export class TransactionPaymentService {
    /**
    * The type of this resource.
    */
    'type'?: TransactionPaymentService.TypeEnum;
    /**
    * The ID of this payment service.
    */
    'id'?: string;
    /**
    * The custom name set for this service.
    */
    'displayName'?: string;
    /**
    * The payment method that this services handles.
    */
    'method'?: TransactionPaymentService.MethodEnum;
    /**
    * The ID of the payment service definition used to create this service. 
    */
    'paymentServiceDefinitionId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TransactionPaymentService.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "TransactionPaymentService.MethodEnum"
        },
        {
            "name": "paymentServiceDefinitionId",
            "baseName": "payment_service_definition_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransactionPaymentService.attributeTypeMap;
    }
}

export namespace TransactionPaymentService {
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
        Cashapp = <any> 'cashapp',
        Chaseorbital = <any> 'chaseorbital',
        CheckoutSession = <any> 'checkout-session',
        Clearpay = <any> 'clearpay',
        ClickToPay = <any> 'click-to-pay',
        Dana = <any> 'dana',
        Dcb = <any> 'dcb',
        Dlocal = <any> 'dlocal',
        Ebanx = <any> 'ebanx',
        Eps = <any> 'eps',
        Everydaypay = <any> 'everydaypay',
        Gcash = <any> 'gcash',
        Giropay = <any> 'giropay',
        Givingblock = <any> 'givingblock',
        Gocardless = <any> 'gocardless',
        Googlepay = <any> 'googlepay',
        Gopay = <any> 'gopay',
        Grabpay = <any> 'grabpay',
        Ideal = <any> 'ideal',
        Kakaopay = <any> 'kakaopay',
        Klarna = <any> 'klarna',
        Laybuy = <any> 'laybuy',
        Linepay = <any> 'linepay',
        Linkaja = <any> 'linkaja',
        Maybankqrpay = <any> 'maybankqrpay',
        Multibanco = <any> 'multibanco',
        Multipago = <any> 'multipago',
        NetworkToken = <any> 'network-token',
        Oney3x = <any> 'oney_3x',
        Oney4x = <any> 'oney_4x',
        Oney6x = <any> 'oney_6x',
        Oney10x = <any> 'oney_10x',
        Oney12x = <any> 'oney_12x',
        Ovo = <any> 'ovo',
        Oxxo = <any> 'oxxo',
        Payid = <any> 'payid',
        Paymaya = <any> 'paymaya',
        Paypal = <any> 'paypal',
        Paypalpaylater = <any> 'paypalpaylater',
        Payto = <any> 'payto',
        Venmo = <any> 'venmo',
        Pix = <any> 'pix',
        Rabbitlinepay = <any> 'rabbitlinepay',
        Razorpay = <any> 'razorpay',
        Scalapay = <any> 'scalapay',
        Sepa = <any> 'sepa',
        Shopeepay = <any> 'shopeepay',
        Singteldash = <any> 'singteldash',
        Smartpay = <any> 'smartpay',
        Sofort = <any> 'sofort',
        Stripedd = <any> 'stripedd',
        Thaiqr = <any> 'thaiqr',
        Touchngo = <any> 'touchngo',
        Truemoney = <any> 'truemoney',
        Trustly = <any> 'trustly',
        Trustlyeurope = <any> 'trustlyeurope',
        Vipps = <any> 'vipps',
        Waave = <any> 'waave',
        Wechat = <any> 'wechat',
        Zippay = <any> 'zippay'
    }
}

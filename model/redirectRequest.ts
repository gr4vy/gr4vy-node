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
* Details to register a new redirect payment method.
*/
export class RedirectRequest {
    /**
    * The method to use, this can be any of the methods that support redirect requests.
    */
    'method': RedirectRequest.MethodEnum;
    /**
    * The redirect URL to redirect a buyer to after they have authorized their transaction.
    */
    'redirectUrl': string;
    /**
    * The ISO-4217 currency code to use this payment method for. This is used to select the payment service to use.
    */
    'currency': string;
    /**
    * The 2-letter ISO code of the country to use this payment method for. This is used to select the payment service to use.
    */
    'country': string;
    /**
    * An external identifier that can be used to match the account against your own records.
    */
    'externalIdentifier'?: string | null;
    /**
    * The ID of the buyer to associate this payment method to. If this field is provided then the `buyer_external_identifier` field needs to be unset.
    */
    'buyerId'?: string;
    /**
    * The `external_identifier` of the buyer to associate this payment method to. If this field is provided then the `buyer_id` field needs to be unset.
    */
    'buyerExternalIdentifier'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "method",
            "baseName": "method",
            "type": "RedirectRequest.MethodEnum"
        },
        {
            "name": "redirectUrl",
            "baseName": "redirect_url",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "externalIdentifier",
            "baseName": "external_identifier",
            "type": "string"
        },
        {
            "name": "buyerId",
            "baseName": "buyer_id",
            "type": "string"
        },
        {
            "name": "buyerExternalIdentifier",
            "baseName": "buyer_external_identifier",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RedirectRequest.attributeTypeMap;
    }
}

export namespace RedirectRequest {
    export enum MethodEnum {
        Afterpay = <any> 'afterpay',
        Alipay = <any> 'alipay',
        Alipayhk = <any> 'alipayhk',
        Bacs = <any> 'bacs',
        Bancontact = <any> 'bancontact',
        Banked = <any> 'banked',
        Becs = <any> 'becs',
        Bitpay = <any> 'bitpay',
        Boleto = <any> 'boleto',
        Boost = <any> 'boost',
        Cashapp = <any> 'cashapp',
        Chaseorbital = <any> 'chaseorbital',
        CheckoutSession = <any> 'checkout-session',
        Clearpay = <any> 'clearpay',
        Dana = <any> 'dana',
        Dcb = <any> 'dcb',
        Dlocal = <any> 'dlocal',
        Ebanx = <any> 'ebanx',
        Efecty = <any> 'efecty',
        Eps = <any> 'eps',
        Everydaypay = <any> 'everydaypay',
        Gcash = <any> 'gcash',
        Gem = <any> 'gem',
        Gemds = <any> 'gemds',
        GiftCard = <any> 'gift-card',
        Giropay = <any> 'giropay',
        Givingblock = <any> 'givingblock',
        Gocardless = <any> 'gocardless',
        Gopay = <any> 'gopay',
        Grabpay = <any> 'grabpay',
        Ideal = <any> 'ideal',
        Kakaopay = <any> 'kakaopay',
        Kcp = <any> 'kcp',
        Klarna = <any> 'klarna',
        Latitude = <any> 'latitude',
        Latitudeds = <any> 'latitudeds',
        Laybuy = <any> 'laybuy',
        Linepay = <any> 'linepay',
        Linkaja = <any> 'linkaja',
        Maybankqrpay = <any> 'maybankqrpay',
        Mercadopago = <any> 'mercadopago',
        Multibanco = <any> 'multibanco',
        Multipago = <any> 'multipago',
        Netbanking = <any> 'netbanking',
        NetworkToken = <any> 'network-token',
        Oney10x = <any> 'oney_10x',
        Oney12x = <any> 'oney_12x',
        Oney3x = <any> 'oney_3x',
        Oney4x = <any> 'oney_4x',
        Oney6x = <any> 'oney_6x',
        Ovo = <any> 'ovo',
        Oxxo = <any> 'oxxo',
        Payid = <any> 'payid',
        Paymaya = <any> 'paymaya',
        Paypal = <any> 'paypal',
        Paypalpaylater = <any> 'paypalpaylater',
        Payto = <any> 'payto',
        Pix = <any> 'pix',
        Pse = <any> 'pse',
        Rabbitlinepay = <any> 'rabbitlinepay',
        Razorpay = <any> 'razorpay',
        Scalapay = <any> 'scalapay',
        Sepa = <any> 'sepa',
        Shopeepay = <any> 'shopeepay',
        Singteldash = <any> 'singteldash',
        Smartpay = <any> 'smartpay',
        Sofort = <any> 'sofort',
        Spei = <any> 'spei',
        Stripedd = <any> 'stripedd',
        Thaiqr = <any> 'thaiqr',
        Touchngo = <any> 'touchngo',
        Truemoney = <any> 'truemoney',
        Trustly = <any> 'trustly',
        Trustlyeurope = <any> 'trustlyeurope',
        Upi = <any> 'upi',
        Venmo = <any> 'venmo',
        Vipps = <any> 'vipps',
        Waave = <any> 'waave',
        Webpay = <any> 'webpay',
        Wechat = <any> 'wechat',
        Zippay = <any> 'zippay'
    }
}

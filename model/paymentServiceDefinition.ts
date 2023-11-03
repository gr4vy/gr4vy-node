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
import { GiftCardServiceDefinitionFields } from './giftCardServiceDefinitionFields';
import { PaymentServiceDefinitionConfiguration } from './paymentServiceDefinitionConfiguration';
import { PaymentServiceDefinitionSupportedFeatures } from './paymentServiceDefinitionSupportedFeatures';

/**
* An available payment service that can be configured.
*/
export class PaymentServiceDefinition {
    /**
    * The ID of the payment service. This is the underlying provider followed by a dash followed by the payment method ID.
    */
    'id'?: string;
    /**
    * `payment-service-definition`.
    */
    'type'?: PaymentServiceDefinition.TypeEnum;
    /**
    * The display name of this service.
    */
    'displayName'?: string;
    /**
    * The ID of the payment method that this services handles.
    */
    'method'?: PaymentServiceDefinition.MethodEnum;
    /**
    * A list of fields that need to be submitted when activating the payment. service.
    */
    'fields'?: Array<GiftCardServiceDefinitionFields>;
    /**
    * A list of three-letter ISO currency codes that this service supports.
    */
    'supportedCurrencies'?: Array<string>;
    /**
    * A list of two-letter ISO country codes that this service supports.
    */
    'supportedCountries'?: Array<string>;
    /**
    * The mode of this payment service.
    */
    'mode'?: PaymentServiceDefinition.ModeEnum;
    'supportedFeatures'?: PaymentServiceDefinitionSupportedFeatures;
    /**
    * An icon to display for the payment service.
    */
    'iconUrl'?: string | null;
    'configuration'?: PaymentServiceDefinitionConfiguration;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentServiceDefinition.TypeEnum"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "PaymentServiceDefinition.MethodEnum"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<GiftCardServiceDefinitionFields>"
        },
        {
            "name": "supportedCurrencies",
            "baseName": "supported_currencies",
            "type": "Array<string>"
        },
        {
            "name": "supportedCountries",
            "baseName": "supported_countries",
            "type": "Array<string>"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "PaymentServiceDefinition.ModeEnum"
        },
        {
            "name": "supportedFeatures",
            "baseName": "supported_features",
            "type": "PaymentServiceDefinitionSupportedFeatures"
        },
        {
            "name": "iconUrl",
            "baseName": "icon_url",
            "type": "string"
        },
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "PaymentServiceDefinitionConfiguration"
        }    ];

    static getAttributeTypeMap() {
        return PaymentServiceDefinition.attributeTypeMap;
    }
}

export namespace PaymentServiceDefinition {
    export enum TypeEnum {
        PaymentServiceDefinition = <any> 'payment-service-definition'
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
    export enum ModeEnum {
        Card = <any> 'card',
        Redirect = <any> 'redirect',
        Applepay = <any> 'applepay',
        Googlepay = <any> 'googlepay'
    }
}

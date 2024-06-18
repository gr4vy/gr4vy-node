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
import { GiftCardServiceFields } from './giftCardServiceFields';
import { MerchantProfileSummary } from './merchantProfileSummary';

/**
* An active, configured payment service.
*/
export class PaymentService {
    /**
    * The type of this resource.
    */
    'type'?: PaymentService.TypeEnum;
    /**
    * The ID of this payment service.
    */
    'id'?: string;
    /**
    * A list of countries for which this service is enabled, in ISO two-letter code format.
    */
    'acceptedCountries'?: Array<string>;
    /**
    * A list of currencies for which this service is enabled, in ISO 4217 three-letter code format.
    */
    'acceptedCurrencies'?: Array<string>;
    /**
    * Defines if this service is currently active or not.
    */
    'active'?: boolean;
    /**
    * The date and time when this service was created.
    */
    'createdAt'?: Date;
    /**
    * The custom name set for this service.
    */
    'displayName'?: string;
    /**
    * A list of fields, each containing a key-value pair for each field configured for this payment service. Fields marked as `secret` (see Payment Service Definition) are not returned.
    */
    'fields'?: Array<GiftCardServiceFields>;
    /**
    * The unique ID for a merchant account.
    */
    'merchantAccountId'?: string;
    /**
    * An object containing a key for each supported card scheme (Amex, Discover, Mastercard and Visa), and for each key an object with the merchant profile for this service and the corresponding scheme.
    */
    'merchantProfile'?: MerchantProfileSummary | null;
    /**
    * The payment method that this service handles.
    */
    'method'?: PaymentService.MethodEnum;
    /**
    * Defines if network tokens are enabled for the service. This feature can only be enabled if the payment service is set as `open_loop` and the PSP is set up to accept network tokens.
    */
    'networkTokensEnabled'?: boolean;
    /**
    * Defines if the service works as an open-loop service. This feature can only be enabled if the PSP is set up to accept previous scheme transaction IDs.
    */
    'openLoop'?: boolean;
    /**
    * Defines if tokenization is enabled for the service. This feature can only be enabled if the payment service is NOT set as `open_loop` and the PSP is set up to tokenize.
    */
    'paymentMethodTokenizationEnabled'?: boolean;
    /**
    * The ID of the payment service definition used to create this service. 
    */
    'paymentServiceDefinitionId'?: string;
    /**
    * The current status of this service. This will start off as pending, move to created, and might eventually move to an error status if and when the credentials are no longer valid. 
    */
    'status'?: PaymentService.StatusEnum;
    /**
    * Defines if 3-D Secure is enabled for the service (can only be enabled if the payment service definition supports the `three_d_secure_hosted` feature). This does not affect pass through 3-D Secure data.
    */
    'threeDSecureEnabled'?: boolean;
    /**
    * The date and time when this service was last updated.
    */
    'updatedAt'?: Date;
    /**
    * The URL that needs to be configured with this payment service as the receiving endpoint for webhooks from the service to Gr4vy. Currently, Gr4vy does not yet automatically register webhooks on setup, and therefore webhooks need to be registered manually by the merchant.
    */
    'webhookUrl'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentService.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "acceptedCountries",
            "baseName": "accepted_countries",
            "type": "Array<string>"
        },
        {
            "name": "acceptedCurrencies",
            "baseName": "accepted_currencies",
            "type": "Array<string>"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<GiftCardServiceFields>"
        },
        {
            "name": "merchantAccountId",
            "baseName": "merchant_account_id",
            "type": "string"
        },
        {
            "name": "merchantProfile",
            "baseName": "merchant_profile",
            "type": "MerchantProfileSummary"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "PaymentService.MethodEnum"
        },
        {
            "name": "networkTokensEnabled",
            "baseName": "network_tokens_enabled",
            "type": "boolean"
        },
        {
            "name": "openLoop",
            "baseName": "open_loop",
            "type": "boolean"
        },
        {
            "name": "paymentMethodTokenizationEnabled",
            "baseName": "payment_method_tokenization_enabled",
            "type": "boolean"
        },
        {
            "name": "paymentServiceDefinitionId",
            "baseName": "payment_service_definition_id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentService.StatusEnum"
        },
        {
            "name": "threeDSecureEnabled",
            "baseName": "three_d_secure_enabled",
            "type": "boolean"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "webhookUrl",
            "baseName": "webhook_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentService.attributeTypeMap;
    }
}

export namespace PaymentService {
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
    export enum StatusEnum {
        Pending = <any> 'pending',
        Created = <any> 'created',
        Failed = <any> 'failed'
    }
}

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
import { GiftCardRedemption } from './giftCardRedemption';
import { TransactionBuyer } from './transactionBuyer';
import { TransactionPaymentMethod } from './transactionPaymentMethod';
import { TransactionPaymentService } from './transactionPaymentService';

/**
* A transaction record.
*/
export class TransactionSummary {
    /**
    * The type of this resource. Is always `transaction`.
    */
    'type'?: TransactionSummary.TypeEnum;
    /**
    * The unique identifier for this transaction.
    */
    'id'?: string;
    /**
    * The authorized amount for this transaction. This can be more than the actual captured amount and part of this amount may be refunded.
    */
    'amount'?: number;
    /**
    * The amount for this transaction that has been authorized for the `payment_method`. This can be less than the `amount` if gift cards were used.
    */
    'authorizedAmount'?: number;
    'buyer'?: TransactionBuyer | null;
    /**
    * The captured amount for this transaction. This can be the full value of the `authorized_amount` or less.
    */
    'capturedAmount'?: number;
    /**
    * The identifier for the checkout session this transaction is associated with.
    */
    'checkoutSessionId'?: string | null;
    /**
    * The 2-letter ISO code of the country of the transaction. This is used to filter the payment services that is used to process the transaction. 
    */
    'country'?: string | null;
    /**
    * The date and time when this transaction was created in our system.
    */
    'createdAt'?: Date;
    /**
    * The currency code for this transaction.
    */
    'currency'?: string;
    /**
    * An external identifier that can be used to match the transaction against your own records.
    */
    'externalIdentifier'?: string | null;
    /**
    * The gift cards redeemed for this transaction.
    */
    'giftCardRedemptions'?: Array<GiftCardRedemption>;
    /**
    * The name of the instrument used to process the transaction. 
    */
    'instrumentType'?: TransactionSummary.InstrumentTypeEnum;
    /**
    * The original `intent` used when the transaction was [created](#operation/authorize-new-transaction).
    */
    'intent'?: TransactionSummary.IntentEnum;
    /**
    * The ID of the merchant account to which this transaction belongs to.
    */
    'merchantAccountId'?: string;
    'method'?: TransactionSummary.MethodEnum;
    'paymentMethod'?: TransactionPaymentMethod | null;
    'paymentService'?: TransactionPaymentService | null;
    /**
    * Whether a manual review is pending.
    */
    'pendingReview'?: boolean;
    /**
    * This is the response code received from the payment service. This can be set to any value and is not standardized across different payment services.
    */
    'rawResponseCode'?: string | null;
    /**
    * This is the response description received from the payment service. This can be set to any value and is not standardized across different payment services.
    */
    'rawResponseDescription'?: string | null;
    /**
    * The base62 encoded transaction ID. This represents a shorter version of this transaction\'s `id` which is sent to payment services, anti-fraud services, and other connectors. You can use this ID to reconcile a payment service\'s transaction against our system.  This ID is sent instead of the transaction ID because not all services support 36 digit identifiers.
    */
    'reconciliationId'?: string;
    /**
    * The refunded amount for this transaction. This can be the full value of the `captured_amount` or less.
    */
    'refundedAmount'?: number;
    /**
    * The status of the transaction. The status may change over time as asynchronous processing events occur.
    */
    'status'?: TransactionSummary.StatusEnum;
    /**
    * Defines when the transaction was last updated.
    */
    'updatedAt'?: Date;
    /**
    * The currency of this transaction\'s settlement in ISO 4217 three-letter code format.
    */
    'settledCurrency'?: string | null;
    /**
    * The net amount settled for this transaction.
    */
    'settledAmount'?: number;
    /**
    * Indicates whether this transaction has been settled.
    */
    'settled'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TransactionSummary.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "authorizedAmount",
            "baseName": "authorized_amount",
            "type": "number"
        },
        {
            "name": "buyer",
            "baseName": "buyer",
            "type": "TransactionBuyer"
        },
        {
            "name": "capturedAmount",
            "baseName": "captured_amount",
            "type": "number"
        },
        {
            "name": "checkoutSessionId",
            "baseName": "checkout_session_id",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "externalIdentifier",
            "baseName": "external_identifier",
            "type": "string"
        },
        {
            "name": "giftCardRedemptions",
            "baseName": "gift_card_redemptions",
            "type": "Array<GiftCardRedemption>"
        },
        {
            "name": "instrumentType",
            "baseName": "instrument_type",
            "type": "TransactionSummary.InstrumentTypeEnum"
        },
        {
            "name": "intent",
            "baseName": "intent",
            "type": "TransactionSummary.IntentEnum"
        },
        {
            "name": "merchantAccountId",
            "baseName": "merchant_account_id",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "TransactionSummary.MethodEnum"
        },
        {
            "name": "paymentMethod",
            "baseName": "payment_method",
            "type": "TransactionPaymentMethod"
        },
        {
            "name": "paymentService",
            "baseName": "payment_service",
            "type": "TransactionPaymentService"
        },
        {
            "name": "pendingReview",
            "baseName": "pending_review",
            "type": "boolean"
        },
        {
            "name": "rawResponseCode",
            "baseName": "raw_response_code",
            "type": "string"
        },
        {
            "name": "rawResponseDescription",
            "baseName": "raw_response_description",
            "type": "string"
        },
        {
            "name": "reconciliationId",
            "baseName": "reconciliation_id",
            "type": "string"
        },
        {
            "name": "refundedAmount",
            "baseName": "refunded_amount",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TransactionSummary.StatusEnum"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "settledCurrency",
            "baseName": "settled_currency",
            "type": "string"
        },
        {
            "name": "settledAmount",
            "baseName": "settled_amount",
            "type": "number"
        },
        {
            "name": "settled",
            "baseName": "settled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return TransactionSummary.attributeTypeMap;
    }
}

export namespace TransactionSummary {
    export enum TypeEnum {
        Transaction = <any> 'transaction'
    }
    export enum InstrumentTypeEnum {
        Applepay = <any> 'applepay',
        CardToken = <any> 'card_token',
        Googlepay = <any> 'googlepay',
        NetworkToken = <any> 'network_token',
        Pan = <any> 'pan',
        Redirect = <any> 'redirect',
        RedirectToken = <any> 'redirect_token'
    }
    export enum IntentEnum {
        Authorize = <any> 'authorize',
        Capture = <any> 'capture'
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
        Googlepay = <any> 'googlepay',
        GooglepayPanOnly = <any> 'googlepay_pan_only',
        Gopay = <any> 'gopay',
        Grabpay = <any> 'grabpay',
        Id = <any> 'id',
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
        Vipps = <any> 'vipps',
        Waave = <any> 'waave',
        Webpay = <any> 'webpay',
        Wechat = <any> 'wechat',
        Zippay = <any> 'zippay'
    }
    export enum StatusEnum {
        Processing = <any> 'processing',
        BuyerApprovalPending = <any> 'buyer_approval_pending',
        AuthorizationSucceeded = <any> 'authorization_succeeded',
        AuthorizationFailed = <any> 'authorization_failed',
        AuthorizationDeclined = <any> 'authorization_declined',
        CapturePending = <any> 'capture_pending',
        CaptureSucceeded = <any> 'capture_succeeded',
        AuthorizationVoidPending = <any> 'authorization_void_pending',
        AuthorizationVoided = <any> 'authorization_voided'
    }
}

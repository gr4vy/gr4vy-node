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
import { BuyerSnapshot } from './buyerSnapshot';
import { CartItem } from './cartItem';
import { GiftCardRedemption } from './giftCardRedemption';
import { GiftCardServiceSnapshot } from './giftCardServiceSnapshot';
import { PaymentMethodSnapshot } from './paymentMethodSnapshot';
import { PaymentServiceSnapshot } from './paymentServiceSnapshot';
import { ShippingDetail } from './shippingDetail';
import { StatementDescriptor } from './statementDescriptor';
import { ThreeDSecureSummary } from './threeDSecureSummary';

/**
* A transaction record.
*/
export class Transaction {
    /**
    * The type of this resource. Is always `transaction`.
    */
    'type'?: Transaction.TypeEnum;
    /**
    * The unique identifier for this transaction.
    */
    'id'?: string;
    /**
    * The total amount for this transaction across all funding sources including gift cards.
    */
    'amount'?: number;
    /**
    * This is the response description received from the processor.
    */
    'authResponseCode'?: string | null;
    /**
    * The amount for this transaction that has been authorized for the `payment_method`. This can be less than the `amount` if gift cards were used.
    */
    'authorizedAmount'?: number;
    /**
    * The date and time when this transaction was authorized in the payment service.  Don\'t use this field to determine whether the transaction was authorized. A `null` value doesn\'t necessarily imply that the transaction wasn\'t authorized, it can mean that the payment service doesn\'t provide this value, that it didn\'t provide it at the time the transaction was authorized or that the transaction was authorized before the introduction of this field.
    */
    'authorizedAt'?: Date | null;
    /**
    * The response code received from the payment service for the Address Verification Check (AVS). This code is mapped to a standardized Gr4vy AVS response code.  - `no_match` - neither address or postal code match - `match` - both address and postal code match - `partial_match_address` - address matches but postal code does not - `partial_match_postcode` - postal code matches but address does not - `unavailable ` - AVS is unavailable for card/country  The value of this field can be `null` if the payment service did not provide a response.
    */
    'avsResponseCode'?: Transaction.AvsResponseCodeEnum;
    /**
    * The buyer used for this transaction.
    */
    'buyer'?: BuyerSnapshot | null;
    /**
    * The captured amount for this transaction. This can be the full value of the `authorized_amount` or less.
    */
    'capturedAmount'?: number;
    /**
    * The date and time when this transaction was captured in the payment service.  Don\'t use this field to determine whether the transaction was captured. A `null` value doesn\'t necessarily imply that the transaction wasn\'t captured, it can mean that the payment service doesn\'t provide this value, that it didn\'t provide it at the time the transaction was captured or that the transaction was captured before the introduction of this field.
    */
    'capturedAt'?: Date | null;
    /**
    * An array of cart items that represents the line items of a transaction.
    */
    'cartItems'?: Array<CartItem>;
    /**
    * The identifier for the checkout session this transaction is associated with.
    */
    'checkoutSessionId'?: string;
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
    * The response code received from the payment service for the Card Verification Value (CVV). This code is mapped to a standardized Gr4vy CVV response code.  - `no_match` - the CVV does not match the expected value - `match` - the CVV matches the expected value - `unavailable ` - CVV check unavailable for card our country - `not_provided ` - CVV not provided  The value of this field can be `null` if the payment service did not provide a response.
    */
    'cvvResponseCode'?: Transaction.CvvResponseCodeEnum;
    /**
    * This is an error code set by Gr4vy.
    */
    'errorCode'?: string | null;
    /**
    * An external identifier that can be used to match the transaction against your own records.
    */
    'externalIdentifier'?: string | null;
    /**
    * The gift card service used for this transaction.
    */
    'giftCardService'?: GiftCardServiceSnapshot;
    /**
    * The gift cards redeemed for this transaction.
    */
    'giftCardRedemptions'?: Array<GiftCardRedemption>;
    /**
    * The original `intent` used when the transaction was [created](#operation/authorize-new-transaction).
    */
    'intent'?: Transaction.IntentEnum;
    /**
    * The outcome of the original intent of a transaction.  This allows you to understand if the intent of the transaction (e.g. `capture` or `authorize`) has been achieved when dealing with multiple payment instruments.  If all payment instruments (`payment_method` and/or `gift_cards`) have succeeded to get an authorization or direct sale **at any point in time** then this will return a `succeeded` value.  If any of the payment instruments fails or declines then this will return a `failed` value.  If any payment instruments is still in a `pending` or `processing` state then the result will be `pending`.  Please note that if any of the payment instruments are voided or refunded after the result reaches a `succeeded` state  then the result will remain unchanged.
    */
    'intentOutcome'?: Transaction.IntentOutcomeEnum;
    /**
    * Indicates whether the transaction represents a subsequent payment coming from a setup recurring payment. Please note there are some restrictions on how this flag may be used.  The flag can only be `false` (or not set) when the transaction meets one of the following criteria:  * It is not `merchant_initiated`. * `payment_source` is set to `card_on_file`.  The flag can only be set to `true` when the transaction meets one of the following criteria:  * It is not `merchant_initiated`. * `payment_source` is set to `recurring` or `installment` and `merchant_initiated` is set to `true`. * `payment_source` is set to `card_on_file`.
    */
    'isSubsequentPayment'?: boolean;
    /**
    * The ID of the merchant account to which this transaction belongs to.
    */
    'merchantAccountId'?: string;
    /**
    * Indicates whether the transaction was initiated by the merchant (true) or customer (false).
    */
    'merchantInitiated'?: boolean;
    /**
    * Additional information about the transaction stored as key-value pairs.
    */
    'metadata'?: { [key: string]: string; };
    'method'?: Transaction.MethodEnum;
    /**
    * Defines if this transaction has been split across multiple payment instruments such as a `payment_method` and one or more `gift_cards`, or multiple `gift_cards` without a `payment_method`.
    */
    'multiTender'?: boolean;
    /**
    * The payment method used for this transaction.
    */
    'paymentMethod'?: PaymentMethodSnapshot;
    /**
    * The payment service used for this transaction.
    */
    'paymentService'?: PaymentServiceSnapshot;
    /**
    * The payment service\'s unique ID for the transaction.
    */
    'paymentServiceTransactionId'?: string;
    /**
    * The source of the transaction. Defaults to `ecommerce`.
    */
    'paymentSource'?: Transaction.PaymentSourceEnum;
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
    * An identifier for the transaction used by the scheme itself, when available.  e.g. the Visa Transaction Identifier, or Mastercard Trace ID.
    */
    'schemeTransactionId'?: string | null;
    /**
    * The shipping details associated with the transaction.
    */
    'shippingDetails'?: ShippingDetail | null;
    'statementDescriptor'?: StatementDescriptor | null;
    /**
    * The status of the transaction for the `payment_method`. The status may change over time as asynchronous processing events occur.  Please note that the possible statuses returned will depend on the operation performed. For example, a captured transaction will never move to a `authorization_voided` status.
    */
    'status'?: Transaction.StatusEnum;
    'threeDSecure'?: ThreeDSecureSummary;
    /**
    * Defines when the transaction was last updated.
    */
    'updatedAt'?: Date;
    /**
    * The date and time when this transaction was voided in the payment service.  Don\'t use this field to determine whether the transaction was voided. A `null` value doesn\'t necessarily imply that the transaction wasn\'t voided, it can mean that the payment service doesn\'t provide this value, that it didn\'t provide it at the time the transaction was voided or that the transaction was voided before the introduction of this field.
    */
    'voidedAt'?: Date | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "Transaction.TypeEnum"
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
            "name": "authResponseCode",
            "baseName": "auth_response_code",
            "type": "string"
        },
        {
            "name": "authorizedAmount",
            "baseName": "authorized_amount",
            "type": "number"
        },
        {
            "name": "authorizedAt",
            "baseName": "authorized_at",
            "type": "Date"
        },
        {
            "name": "avsResponseCode",
            "baseName": "avs_response_code",
            "type": "Transaction.AvsResponseCodeEnum"
        },
        {
            "name": "buyer",
            "baseName": "buyer",
            "type": "BuyerSnapshot"
        },
        {
            "name": "capturedAmount",
            "baseName": "captured_amount",
            "type": "number"
        },
        {
            "name": "capturedAt",
            "baseName": "captured_at",
            "type": "Date"
        },
        {
            "name": "cartItems",
            "baseName": "cart_items",
            "type": "Array<CartItem>"
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
            "name": "cvvResponseCode",
            "baseName": "cvv_response_code",
            "type": "Transaction.CvvResponseCodeEnum"
        },
        {
            "name": "errorCode",
            "baseName": "error_code",
            "type": "string"
        },
        {
            "name": "externalIdentifier",
            "baseName": "external_identifier",
            "type": "string"
        },
        {
            "name": "giftCardService",
            "baseName": "gift_card_service",
            "type": "GiftCardServiceSnapshot"
        },
        {
            "name": "giftCardRedemptions",
            "baseName": "gift_card_redemptions",
            "type": "Array<GiftCardRedemption>"
        },
        {
            "name": "intent",
            "baseName": "intent",
            "type": "Transaction.IntentEnum"
        },
        {
            "name": "intentOutcome",
            "baseName": "intent_outcome",
            "type": "Transaction.IntentOutcomeEnum"
        },
        {
            "name": "isSubsequentPayment",
            "baseName": "is_subsequent_payment",
            "type": "boolean"
        },
        {
            "name": "merchantAccountId",
            "baseName": "merchant_account_id",
            "type": "string"
        },
        {
            "name": "merchantInitiated",
            "baseName": "merchant_initiated",
            "type": "boolean"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "Transaction.MethodEnum"
        },
        {
            "name": "multiTender",
            "baseName": "multi_tender",
            "type": "boolean"
        },
        {
            "name": "paymentMethod",
            "baseName": "payment_method",
            "type": "PaymentMethodSnapshot"
        },
        {
            "name": "paymentService",
            "baseName": "payment_service",
            "type": "PaymentServiceSnapshot"
        },
        {
            "name": "paymentServiceTransactionId",
            "baseName": "payment_service_transaction_id",
            "type": "string"
        },
        {
            "name": "paymentSource",
            "baseName": "payment_source",
            "type": "Transaction.PaymentSourceEnum"
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
            "name": "schemeTransactionId",
            "baseName": "scheme_transaction_id",
            "type": "string"
        },
        {
            "name": "shippingDetails",
            "baseName": "shipping_details",
            "type": "ShippingDetail"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statement_descriptor",
            "type": "StatementDescriptor"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Transaction.StatusEnum"
        },
        {
            "name": "threeDSecure",
            "baseName": "three_d_secure",
            "type": "ThreeDSecureSummary"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "voidedAt",
            "baseName": "voided_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }
}

export namespace Transaction {
    export enum TypeEnum {
        Transaction = <any> 'transaction'
    }
    export enum AvsResponseCodeEnum {
        NoMatch = <any> 'no_match',
        Match = <any> 'match',
        PartialMatchAddress = <any> 'partial_match_address',
        PartialMatchPostcode = <any> 'partial_match_postcode',
        Unavailable = <any> 'unavailable'
    }
    export enum CvvResponseCodeEnum {
        NoMatch = <any> 'no_match',
        Match = <any> 'match',
        Unavailable = <any> 'unavailable',
        NotProvided = <any> 'not_provided'
    }
    export enum IntentEnum {
        Authorize = <any> 'authorize',
        Capture = <any> 'capture'
    }
    export enum IntentOutcomeEnum {
        Pending = <any> 'pending',
        Succeeded = <any> 'succeeded',
        Failed = <any> 'failed'
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
    export enum PaymentSourceEnum {
        Ecommerce = <any> 'ecommerce',
        Moto = <any> 'moto',
        Recurring = <any> 'recurring',
        Installment = <any> 'installment',
        CardOnFile = <any> 'card_on_file'
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

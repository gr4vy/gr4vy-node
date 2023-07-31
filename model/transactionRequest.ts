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
import { BrowserInfo } from './browserInfo';
import { CartItem } from './cartItem';
import { ConnectionOptions } from './connectionOptions';
import { StatementDescriptor } from './statementDescriptor';
import { ThreeDSecureDataV1V2 } from './threeDSecureDataV1V2';
import { TransactionPaymentMethodRequest } from './transactionPaymentMethodRequest';

/**
* A request to create a transaction.
*/
export class TransactionRequest {
    /**
    * The monetary amount to create an authorization for, in the smallest currency unit for the given currency, for example `1299` cents to create an authorization for `$12.99`.  If the `intent` is set to `capture`, an amount greater than zero must be supplied.
    */
    'amount': number;
    /**
    * A supported ISO-4217 currency code.  For redirect requests, this value must match the one specified for `currency` in `payment_method`. 
    */
    'currency': string;
    /**
    * The 2-letter ISO code of the country of the transaction. This is used to filter the payment services that is used to process the transaction.  If this value is provided for redirect requests and it\'s not `null`, it must match the one specified for `country` in `payment_method`. Otherwise, the value specified for `country` in `payment_method` will be assumed implicitly. 
    */
    'country'?: string | null;
    'paymentMethod': TransactionPaymentMethodRequest;
    /**
    * Whether or not to also try and store the payment method with us so that it can be used again for future use. This is only supported for payment methods that support this feature. There are also a few restrictions on how the flag may be set:  * The flag has to be set to `true` when the `payment_source` is set to `recurring` or `installment`, and `merchant_initiated` is set to `false`.  * The flag has to be set to `false` (or not set) when using a previously vaulted payment method.
    */
    'store'?: boolean;
    /**
    * Defines the intent of this API call. This determines the desired initial state of the transaction.  * `authorize` - (Default) Optionally approves and then authorizes a transaction but does not capture the funds. * `capture` - Optionally approves and then authorizes and captures the funds of the transaction.
    */
    'intent'?: TransactionRequest.IntentEnum;
    /**
    * An external identifier that can be used to match the transaction against your own records.
    */
    'externalIdentifier'?: string | null;
    'threeDSecureData'?: ThreeDSecureDataV1V2;
    /**
    * Indicates whether the transaction was initiated by the merchant (true) or customer (false).
    */
    'merchantInitiated'?: boolean;
    /**
    * The source of the transaction. Defaults to `ecommerce`.
    */
    'paymentSource'?: TransactionRequest.PaymentSourceEnum;
    /**
    * Indicates whether the transaction represents a subsequent payment coming from a setup recurring payment. Please note there are some restrictions on how this flag may be used.  The flag can only be `false` (or not set) when the transaction meets one of the following criteria:  * It is not `merchant_initiated`. * `payment_source` is set to `card_on_file`.  The flag can only be set to `true` when the transaction meets one of the following criteria:  * It is not `merchant_initiated`. * `payment_source` is set to `recurring` or `installment` and `merchant_initiated` is set to `true`. * `payment_source` is set to `card_on_file`.
    */
    'isSubsequentPayment'?: boolean;
    /**
    * Any additional information about the transaction that you would like to store as key-value pairs. This data is passed to payment service providers that support it.
    */
    'metadata'?: { [key: string]: string; };
    'statementDescriptor'?: StatementDescriptor | null;
    /**
    * An array of cart items that represents the line items of a transaction.
    */
    'cartItems'?: Array<CartItem>;
    /**
    * A scheme\'s transaction identifier to use in connecting a merchant initiated transaction to a previous customer initiated transaction.  If not provided, and a qualifying customer initiated transaction has been previously made, then Gr4vy will populate this value with the identifier returned for that transaction.  e.g. the Visa Transaction Identifier, or Mastercard Trace ID.
    */
    'previousSchemeTransactionId'?: string | null;
    /**
    * Information about the browser used by the buyer.
    */
    'browserInfo'?: BrowserInfo | null;
    /**
    * The unique identifier of a set of shipping details stored for the buyer.  If provided, the created transaction will include a copy of the details at the point of transaction creation; i.e. it will not be affected by later changes to the detail in the database.
    */
    'shippingDetailsId'?: string | null;
    /**
    * Allows for passing optional configuration per connection to take advantage of connection specific features. When provided, the data is only passed to the target connection type to prevent sharing configuration across connections.  Please note that each of the keys this object are in kebab-case, for example `cybersource-anti-fraud` as they represent the ID of the connector. All the other keys will be snake-case, for example `merchant_defined_data`.
    */
    'connectionOptions'?: ConnectionOptions | null;
    /**
    * Whether to capture the transaction asynchronously.  - When `async_capture` is `false` (default), the transaction is captured   in the same request. - When `async_capture` is `true`, the transaction is automatically   captured at a later time.  Redirect transactions are not affected by this flag.  This flag can only be set to `true` when `intent` is set to `capture`.
    */
    'asyncCapture'?: boolean;
    /**
    * This field represents the fingerprint data to be passed to the active anti-fraud service.
    */
    'antiFraudFingerprint'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
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
            "name": "paymentMethod",
            "baseName": "payment_method",
            "type": "TransactionPaymentMethodRequest"
        },
        {
            "name": "store",
            "baseName": "store",
            "type": "boolean"
        },
        {
            "name": "intent",
            "baseName": "intent",
            "type": "TransactionRequest.IntentEnum"
        },
        {
            "name": "externalIdentifier",
            "baseName": "external_identifier",
            "type": "string"
        },
        {
            "name": "threeDSecureData",
            "baseName": "three_d_secure_data",
            "type": "ThreeDSecureDataV1V2"
        },
        {
            "name": "merchantInitiated",
            "baseName": "merchant_initiated",
            "type": "boolean"
        },
        {
            "name": "paymentSource",
            "baseName": "payment_source",
            "type": "TransactionRequest.PaymentSourceEnum"
        },
        {
            "name": "isSubsequentPayment",
            "baseName": "is_subsequent_payment",
            "type": "boolean"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statement_descriptor",
            "type": "StatementDescriptor"
        },
        {
            "name": "cartItems",
            "baseName": "cart_items",
            "type": "Array<CartItem>"
        },
        {
            "name": "previousSchemeTransactionId",
            "baseName": "previous_scheme_transaction_id",
            "type": "string"
        },
        {
            "name": "browserInfo",
            "baseName": "browser_info",
            "type": "BrowserInfo"
        },
        {
            "name": "shippingDetailsId",
            "baseName": "shipping_details_id",
            "type": "string"
        },
        {
            "name": "connectionOptions",
            "baseName": "connection_options",
            "type": "ConnectionOptions"
        },
        {
            "name": "asyncCapture",
            "baseName": "async_capture",
            "type": "boolean"
        },
        {
            "name": "antiFraudFingerprint",
            "baseName": "anti_fraud_fingerprint",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransactionRequest.attributeTypeMap;
    }
}

export namespace TransactionRequest {
    export enum IntentEnum {
        Authorize = <any> 'authorize',
        Capture = <any> 'capture'
    }
    export enum PaymentSourceEnum {
        Ecommerce = <any> 'ecommerce',
        Moto = <any> 'moto',
        Recurring = <any> 'recurring',
        Installment = <any> 'installment',
        CardOnFile = <any> 'card_on_file'
    }
}

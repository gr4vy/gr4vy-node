/**
 * Gr4vy API (Beta)
 * Welcome to the Gr4vy API reference documentation. Our API is still very much a work in product and subject to change.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: code@gr4vy.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { TransactionPaymentMethodRequest } from './transactionPaymentMethodRequest';

/**
* A request to create a transaction.
*/
export class TransactionRequest {
    /**
    * The monetary amount to create an authorization for, in the smallest currency unit for the given currency, for example `1299` cents to create an authorization for `$12.99`.  For BitCoin, this value will be a decimal point number, for example `0.0039`.
    */
    'amount': number;
    /**
    * A supported ISO-4217 currency code.
    */
    'currency': string;
    'paymentMethod': TransactionPaymentMethodRequest;
    /**
    * Whether or not to also try and store the payment method with us so that it can be used again for future use. This is only supported for payment methods that support this feature.
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
    /**
    * Defines the environment to create this transaction in. Setting this to anything other than `production` will force Gr4vy to use the payment a service configured for that environment.
    */
    'environment'?: TransactionRequest.EnvironmentEnum;

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
            "name": "environment",
            "baseName": "environment",
            "type": "TransactionRequest.EnvironmentEnum"
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
    export enum EnvironmentEnum {
        Development = <any> 'development',
        Staging = <any> 'staging',
        Production = <any> 'production'
    }
}

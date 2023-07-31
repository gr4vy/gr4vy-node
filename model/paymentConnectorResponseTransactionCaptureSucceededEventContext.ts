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
* Additional context for this event.
*/
export class PaymentConnectorResponseTransactionCaptureSucceededEventContext {
    /**
    * The unique ID of the payment service used.
    */
    'paymentServiceId'?: string;
    /**
    * The display name of the payment service used.
    */
    'paymentServiceDisplayName'?: string;
    /**
    * The payment service definition used.
    */
    'paymentServiceDefinitionId'?: string;
    /**
    * The external ID of the transaction as set by the payment service.
    */
    'paymentServiceTransactionId'?: string | null;
    /**
    * The new status code for the transaction. This is always set to `capture_succeeded`.
    */
    'status'?: PaymentConnectorResponseTransactionCaptureSucceededEventContext.StatusEnum;
    /**
    * The type of instrument used for this transaction.
    */
    'instrumentType'?: PaymentConnectorResponseTransactionCaptureSucceededEventContext.InstrumentTypeEnum;
    /**
    * This will always be `null` because the transaction succeeded.
    */
    'retryRule'?: string | null;
    /**
    * This is the response code received from the payment service. This can be set to any value and is not standardized across different payment services.
    */
    'rawResponseCode'?: string | null;
    /**
    * This is the response description received from the payment service. This can be set to any value and is not standardized across different payment services.
    */
    'rawResponseDescription'?: string | null;
    /**
    * The response code received from the payment service for the Address Verification Check (AVS). This code is mapped to a standardized Gr4vy AVS response code.  - `no_match` - neither address or postal code match - `match` - both address and postal code match - `partial_match_address` - address matches but postal code does not - `partial_match_postcode` - postal code matches but address does not - `unavailable ` - AVS is unavailable for card/country  The value of this field can be `null` if the payment service did not provide a response.
    */
    'avsResponseCode'?: PaymentConnectorResponseTransactionCaptureSucceededEventContext.AvsResponseCodeEnum;
    /**
    * The response code received from the payment service for the Card Verification Value (CVV). This code is mapped to a standardized Gr4vy CVV response code.  - `no_match` - the CVV does not match the expected value - `match` - the CVV matches the expected value - `unavailable ` - CVV check unavailable for card our country - `not_provided ` - CVV not provided  The value of this field can be `null` if the payment service did not provide a response.
    */
    'cvvResponseCode'?: PaymentConnectorResponseTransactionCaptureSucceededEventContext.CvvResponseCodeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentServiceId",
            "baseName": "payment_service_id",
            "type": "string"
        },
        {
            "name": "paymentServiceDisplayName",
            "baseName": "payment_service_display_name",
            "type": "string"
        },
        {
            "name": "paymentServiceDefinitionId",
            "baseName": "payment_service_definition_id",
            "type": "string"
        },
        {
            "name": "paymentServiceTransactionId",
            "baseName": "payment_service_transaction_id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentConnectorResponseTransactionCaptureSucceededEventContext.StatusEnum"
        },
        {
            "name": "instrumentType",
            "baseName": "instrument_type",
            "type": "PaymentConnectorResponseTransactionCaptureSucceededEventContext.InstrumentTypeEnum"
        },
        {
            "name": "retryRule",
            "baseName": "retry_rule",
            "type": "string"
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
            "name": "avsResponseCode",
            "baseName": "avs_response_code",
            "type": "PaymentConnectorResponseTransactionCaptureSucceededEventContext.AvsResponseCodeEnum"
        },
        {
            "name": "cvvResponseCode",
            "baseName": "cvv_response_code",
            "type": "PaymentConnectorResponseTransactionCaptureSucceededEventContext.CvvResponseCodeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentConnectorResponseTransactionCaptureSucceededEventContext.attributeTypeMap;
    }
}

export namespace PaymentConnectorResponseTransactionCaptureSucceededEventContext {
    export enum StatusEnum {
        CaptureSucceeded = <any> 'capture_succeeded'
    }
    export enum InstrumentTypeEnum {
        Pan = <any> 'pan',
        CardToken = <any> 'card_token',
        Redirect = <any> 'redirect',
        RedirectToken = <any> 'redirect_token',
        Googlepay = <any> 'googlepay',
        Applepay = <any> 'applepay',
        NetworkToken = <any> 'network_token'
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
        Unavailable = <any> 'unavailable'
    }
}

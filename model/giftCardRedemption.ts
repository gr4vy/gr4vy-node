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
import { GiftCardSnapshot } from './giftCardSnapshot';

/**
* A redemption of a gift card used in a transaction.
*/
export class GiftCardRedemption {
    /**
    * The type of this resource.
    */
    'type'?: GiftCardRedemption.TypeEnum;
    /**
    * The ID of this gift card redemption. This may be `null` if the no redemption happened.
    */
    'id'?: string | null;
    /**
    * The status of the gift card redemption for the `payment_method`.
    */
    'status'?: GiftCardRedemption.StatusEnum;
    /**
    * The amount redeemed for this gift card.
    */
    'amount'?: number;
    /**
    * The amount refunded for this gift card. This can not be larger than `amount`.
    */
    'refundedAmount'?: number;
    /**
    * The gift card service\'s unique ID for the redemption.
    */
    'giftCardServiceRedemptionId'?: string;
    /**
    * If this gift card redemption resulted in an error, this will contain the internal code for the error.
    */
    'errorCode'?: GiftCardRedemption.ErrorCodeEnum;
    /**
    * If this gift card redemption resulted in an error, this will contain the raw error code received from the gift card provider.
    */
    'rawErrorCode'?: string | null;
    /**
    * If this gift card redemption resulted in an error, this will contain the raw error message received from the gift card provider.
    */
    'rawErrorMessage'?: string | null;
    'giftCard'?: GiftCardSnapshot;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GiftCardRedemption.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "GiftCardRedemption.StatusEnum"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "refundedAmount",
            "baseName": "refunded_amount",
            "type": "number"
        },
        {
            "name": "giftCardServiceRedemptionId",
            "baseName": "gift_card_service_redemption_id",
            "type": "string"
        },
        {
            "name": "errorCode",
            "baseName": "error_code",
            "type": "GiftCardRedemption.ErrorCodeEnum"
        },
        {
            "name": "rawErrorCode",
            "baseName": "raw_error_code",
            "type": "string"
        },
        {
            "name": "rawErrorMessage",
            "baseName": "raw_error_message",
            "type": "string"
        },
        {
            "name": "giftCard",
            "baseName": "gift_card",
            "type": "GiftCardSnapshot"
        }    ];

    static getAttributeTypeMap() {
        return GiftCardRedemption.attributeTypeMap;
    }
}

export namespace GiftCardRedemption {
    export enum TypeEnum {
        GiftCardRedemption = <any> 'gift-card-redemption'
    }
    export enum StatusEnum {
        Succeeded = <any> 'succeeded',
        Failed = <any> 'failed',
        Skipped = <any> 'skipped'
    }
    export enum ErrorCodeEnum {
        ExpiredCard = <any> 'expired_card',
        InactiveCard = <any> 'inactive_card',
        IncorrectCurrency = <any> 'incorrect_currency',
        InsufficientFunds = <any> 'insufficient_funds',
        InvalidAmount = <any> 'invalid_amount',
        InvalidGiftCard = <any> 'invalid_gift_card',
        InvalidServiceConfiguration = <any> 'invalid_service_configuration',
        InvalidServiceCredentials = <any> 'invalid_service_credentials',
        OperationCanceled = <any> 'operation_canceled',
        ServiceError = <any> 'service_error',
        ServiceNetworkError = <any> 'service_network_error',
        UnknownError = <any> 'unknown_error'
    }
}

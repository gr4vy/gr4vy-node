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
import { GiftCardRedemptionFailedContext } from './giftCardRedemptionFailedContext';

/**
* This event logs the request and response details of HTTP calls made to redeem gift cards, in case the call failed.
*/
export class GiftCardRedemptionFailed {
    /**
    * The type of this resource. Is always `transaction-event`.
    */
    'type'?: GiftCardRedemptionFailed.TypeEnum;
    /**
    * The unique identifier for this event.
    */
    'id'?: string;
    /**
    * The name of this resource. Is always `gift-card-redemption-failed`.
    */
    'name'?: GiftCardRedemptionFailed.NameEnum;
    /**
    * The date and time when this event was created in our system.
    */
    'createdAt'?: Date;
    'context'?: GiftCardRedemptionFailedContext;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GiftCardRedemptionFailed.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "GiftCardRedemptionFailed.NameEnum"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "GiftCardRedemptionFailedContext"
        }    ];

    static getAttributeTypeMap() {
        return GiftCardRedemptionFailed.attributeTypeMap;
    }
}

export namespace GiftCardRedemptionFailed {
    export enum TypeEnum {
        TransactionEvent = <any> 'transaction-event'
    }
    export enum NameEnum {
        GiftCardRedemptionFailed = <any> 'gift-card-redemption-failed'
    }
}

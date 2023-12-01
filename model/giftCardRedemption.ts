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
}

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
import { GiftCardBuyer } from './giftCardBuyer';
import { GiftCardService } from './giftCardService';

/**
* A gift card stored for a buyer, or used in a transaction.
*/
export class GiftCard {
    /**
    * The type of this resource.
    */
    'type'?: GiftCard.TypeEnum;
    /**
    * The ID of this gift card.
    */
    'id'?: string;
    /**
    * The unique ID for a merchant account.
    */
    'merchantAccountId'?: string;
    'service'?: GiftCardService;
    /**
    * The first 6 digits of the full gift card number.
    */
    'bin'?: string;
    /**
    * The 3 digits after the `bin` of the full gift card number.
    */
    'subBin'?: string;
    /**
    * The last 4 digits for the gift card.
    */
    'last4'?: string;
    /**
    * The date and time when this gift card expires. This is a full date/time and may be more accurate than the actual expiry date received by the gift card service.
    */
    'expirationDate'?: Date | null;
    'buyer'?: GiftCardBuyer | null;
    /**
    * The date and time when this gift card was created in our system.
    */
    'createdAt'?: Date;
    /**
    * The date and time when this gift card was last updated in our system.
    */
    'updatedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GiftCard.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "merchantAccountId",
            "baseName": "merchant_account_id",
            "type": "string"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "GiftCardService"
        },
        {
            "name": "bin",
            "baseName": "bin",
            "type": "string"
        },
        {
            "name": "subBin",
            "baseName": "sub_bin",
            "type": "string"
        },
        {
            "name": "last4",
            "baseName": "last4",
            "type": "string"
        },
        {
            "name": "expirationDate",
            "baseName": "expiration_date",
            "type": "Date"
        },
        {
            "name": "buyer",
            "baseName": "buyer",
            "type": "GiftCardBuyer"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return GiftCard.attributeTypeMap;
    }
}

export namespace GiftCard {
    export enum TypeEnum {
        GiftCard = <any> 'gift-card'
    }
}

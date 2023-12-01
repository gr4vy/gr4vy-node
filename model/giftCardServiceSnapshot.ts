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
* A snapshot of a gift card service used in a transaction.
*/
export class GiftCardServiceSnapshot {
    /**
    * The type of this resource.
    */
    'type'?: GiftCardServiceSnapshot.TypeEnum;
    /**
    * The ID of this gift card service.
    */
    'id'?: string;
    /**
    * The ID of the gift card service definition used to create this service. 
    */
    'giftCardServiceDefinitionId'?: string;
    /**
    * The custom name set for this service.
    */
    'displayName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GiftCardServiceSnapshot.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "giftCardServiceDefinitionId",
            "baseName": "gift_card_service_definition_id",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GiftCardServiceSnapshot.attributeTypeMap;
    }
}

export namespace GiftCardServiceSnapshot {
    export enum TypeEnum {
        GiftCardService = <any> 'gift-card-service'
    }
}

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
import { GiftCardServiceCreateRequestFieldsInner } from './giftCardServiceCreateRequestFieldsInner';

/**
* Request body for activating a gift card service.
*/
export class GiftCardServiceCreateRequest {
    /**
    * The ID of the gift card service to use.
    */
    'giftCardServiceDefinitionId': string;
    /**
    * A custom name for the service. This will be shown in the Admin UI.
    */
    'displayName': string;
    /**
    * A list of fields, each containing a key-value pair for each field defined by the definition for this gift card service.
    */
    'fields': Array<GiftCardServiceCreateRequestFieldsInner>;
    /**
    * Defines if this service is currently active or not.
    */
    'active'?: boolean = true;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "giftCardServiceDefinitionId",
            "baseName": "gift_card_service_definition_id",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<GiftCardServiceCreateRequestFieldsInner>"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return GiftCardServiceCreateRequest.attributeTypeMap;
    }
}


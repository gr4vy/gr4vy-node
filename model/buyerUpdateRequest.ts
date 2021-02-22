/**
 * Gr4vy API (Beta)
 * Welcome to the Gr4vy API reference documentation. Our API is still very much a work in product and subject to change.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@gr4vy.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { BuyerCreateRequest } from './buyerCreateRequest';

/**
* A request to update a buyer.
*/
export class BuyerUpdateRequest {
    /**
    * An external identifier that can be used to match the buyer against your own records. This value needs to be unique for all buyers.
    */
    'external_identifier'?: string | null;
    /**
    * A unique name for this buyer which is used in the Gr4vy admin panel to give a buyer a human readable name.
    */
    'display_name'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "external_identifier",
            "baseName": "external_identifier",
            "type": "string"
        },
        {
            "name": "display_name",
            "baseName": "display_name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BuyerUpdateRequest.attributeTypeMap;
    }
}


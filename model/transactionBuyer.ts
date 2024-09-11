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
import { BuyerSnapshotBillingDetails } from './buyerSnapshotBillingDetails';

/**
* The buyer used for this transaction.
*/
export class TransactionBuyer {
    /**
    * The type of this resource. Is always `buyer`.
    */
    'type'?: TransactionBuyer.TypeEnum;
    /**
    * The unique Gr4vy ID for this buyer.
    */
    'id'?: string | null;
    'billingDetails'?: BuyerSnapshotBillingDetails | null;
    /**
    * A unique name for this buyer which is used in the Gr4vy admin panel to give a buyer a human readable name.
    */
    'displayName'?: string | null;
    /**
    * An external identifier that can be used to match the buyer against your own records.
    */
    'externalIdentifier'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TransactionBuyer.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "billingDetails",
            "baseName": "billing_details",
            "type": "BuyerSnapshotBillingDetails"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "externalIdentifier",
            "baseName": "external_identifier",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransactionBuyer.attributeTypeMap;
    }
}

export namespace TransactionBuyer {
    export enum TypeEnum {
        Buyer = <any> 'buyer'
    }
}

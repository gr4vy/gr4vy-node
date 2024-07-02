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
import { BillingDetailsAddress } from './billingDetailsAddress';
import { BillingDetailsTaxId } from './billingDetailsTaxId';

/**
* Billing details associated to a buyer.
*/
export class BillingDetails {
    /**
    * The type of this resource. Is always `billing-details`.
    */
    'type'?: BillingDetails.TypeEnum;
    /**
    * The first name(s) or given name of the buyer.
    */
    'firstName'?: string | null;
    /**
    * The last name, or family name, of the buyer.
    */
    'lastName'?: string | null;
    /**
    * The email address of the buyer.
    */
    'emailAddress'?: string | null;
    /**
    * The phone number of the buyer. This number is formatted according to the [E164 number standard](https://www.twilio.com/docs/glossary/what-e164).
    */
    'phoneNumber'?: string | null;
    'address'?: BillingDetailsAddress | null;
    'taxId'?: BillingDetailsTaxId | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BillingDetails.TypeEnum"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "emailAddress",
            "baseName": "email_address",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "BillingDetailsAddress"
        },
        {
            "name": "taxId",
            "baseName": "tax_id",
            "type": "BillingDetailsTaxId"
        }    ];

    static getAttributeTypeMap() {
        return BillingDetails.attributeTypeMap;
    }
}

export namespace BillingDetails {
    export enum TypeEnum {
        BillingDetails = <any> 'billing-details'
    }
}

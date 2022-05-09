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
import { Address } from './address';
import { TaxId } from './taxId';

/**
* Billing details to use associated to a buyer.
*/
export class BillingDetailsRequest {
    /**
    * The first name(s) or given name for the buyer.
    */
    'firstName'?: string | null;
    /**
    * The last name, or family name, of the buyer.
    */
    'lastName'?: string | null;
    /**
    * The email address for the buyer.
    */
    'emailAddress'?: string | null;
    /**
    * The phone number for the buyer which should be formatted according to the [E164 number standard](https://www.twilio.com/docs/glossary/what-e164).
    */
    'phoneNumber'?: string | null;
    /**
    * The billing address for the buyer.
    */
    'address'?: Address | null;
    'taxId'?: TaxId;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "type": "Address"
        },
        {
            "name": "taxId",
            "baseName": "tax_id",
            "type": "TaxId"
        }    ];

    static getAttributeTypeMap() {
        return BillingDetailsRequest.attributeTypeMap;
    }
}


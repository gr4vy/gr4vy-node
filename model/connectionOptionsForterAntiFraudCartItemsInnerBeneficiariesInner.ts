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
import { ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerAddress } from './connectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerAddress';
import { ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerComments } from './connectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerComments';
import { ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPersonalDetails } from './connectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPersonalDetails';
import { ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPhoneInner } from './connectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPhoneInner';

export class ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInner {
    'personalDetails': ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPersonalDetails;
    'address'?: ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerAddress | null;
    /**
    * List of all phone numbers for the beneficiary.
    */
    'phone'?: Array<ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPhoneInner>;
    'comments'?: ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerComments | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "personalDetails",
            "baseName": "personal_details",
            "type": "ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPersonalDetails"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerAddress"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "Array<ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPhoneInner>"
        },
        {
            "name": "comments",
            "baseName": "comments",
            "type": "ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerComments"
        }    ];

    static getAttributeTypeMap() {
        return ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInner.attributeTypeMap;
    }
}

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
* Request body to update a registered digital wallet\'s details.
*/
export class DigitalWalletUpdate {
    /**
    * The name of the merchant. This is used to update the value initially used to register with a digital wallet provider and this name is not displayed to the buyer.
    */
    'merchantName'?: string;
    /**
    * The list of domain names that a digital wallet can be used on. To use a digital wallet on a website, the domain of the site is required to be in this list.
    */
    'domainNames'?: Array<string>;
    /**
    * The consumer facing name of the merchant.
    */
    'merchantDisplayName'?: string | null;
    /**
    * The country code where the merchant is registered.
    */
    'merchantCountryCode'?: string | null;
    /**
    * The main URL of the merchant.
    */
    'merchantUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "merchantName",
            "baseName": "merchant_name",
            "type": "string"
        },
        {
            "name": "domainNames",
            "baseName": "domain_names",
            "type": "Array<string>"
        },
        {
            "name": "merchantDisplayName",
            "baseName": "merchant_display_name",
            "type": "string"
        },
        {
            "name": "merchantCountryCode",
            "baseName": "merchant_country_code",
            "type": "string"
        },
        {
            "name": "merchantUrl",
            "baseName": "merchant_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DigitalWalletUpdate.attributeTypeMap;
    }
}


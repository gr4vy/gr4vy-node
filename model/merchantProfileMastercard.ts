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
* Merchant profile for Mastercard.
*/
export class MerchantProfileMastercard {
    /**
    * Acquirer bin to use when calling 3DS through this scheme.
    */
    'merchantAcquirerBin'?: string;
    /**
    * URL to send when calling 3DS through this scheme.
    */
    'merchantUrl'?: string;
    /**
    * Merchant ID to use when calling 3DS through this scheme.
    */
    'merchantAcquirerId'?: string;
    /**
    * Merchant name to use when calling 3DS through this scheme.
    */
    'merchantName'?: string;
    /**
    * Merchant country code to use when calling 3DS through this scheme.
    */
    'merchantCountryCode'?: string;
    /**
    * Merchant category code to use when calling 3DS through this scheme.
    */
    'merchantCategoryCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "merchantAcquirerBin",
            "baseName": "merchant_acquirer_bin",
            "type": "string"
        },
        {
            "name": "merchantUrl",
            "baseName": "merchant_url",
            "type": "string"
        },
        {
            "name": "merchantAcquirerId",
            "baseName": "merchant_acquirer_id",
            "type": "string"
        },
        {
            "name": "merchantName",
            "baseName": "merchant_name",
            "type": "string"
        },
        {
            "name": "merchantCountryCode",
            "baseName": "merchant_country_code",
            "type": "string"
        },
        {
            "name": "merchantCategoryCode",
            "baseName": "merchant_category_code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MerchantProfileMastercard.attributeTypeMap;
    }
}

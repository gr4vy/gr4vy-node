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
import { PaymentServiceUpdateFields } from './paymentServiceUpdateFields';

/**
* Request body for updating an active payment service.
*/
export class PaymentServiceUpdate {
    /**
    * A custom name for the payment service. This will be shown in the Admin UI.
    */
    'displayName'?: string;
    /**
    * A list of fields, each containing a key-value pair for each field defined by the definition for this payment service e.g. for stripe-card `secret_key` is required and so must be sent with in this field.
    */
    'fields'?: Array<PaymentServiceUpdateFields>;
    /**
    * A list of countries that this payment service needs to support in ISO two-letter code format.
    */
    'acceptedCountries'?: Array<string>;
    /**
    * A list of currencies that this payment service needs to support in ISO 4217 three-letter code format.
    */
    'acceptedCurrencies'?: Array<string>;
    /**
    * Defines if 3-D Secure is enabled for the service (can only be enabled if the payment service definition supports the `three_d_secure_hosted` feature). This does not affect pass through 3-D Secure data.
    */
    'threeDSecureEnabled'?: boolean;
    /**
    * Acquiring institution identification code for VISA.
    */
    'acquirerBinVisa'?: string | null;
    /**
    * Acquiring institution identification code for Mastercard.
    */
    'acquirerBinMastercard'?: string | null;
    /**
    * Acquiring institution identification code for Amex.
    */
    'acquirerBinAmex'?: string | null;
    /**
    * Acquiring institution identification code for Discover.
    */
    'acquirerBinDiscover'?: string | null;
    /**
    * Merchant identifier used in authorisation requests (assigned by the acquirer).
    */
    'acquirerMerchantId'?: string | null;
    /**
    * Merchant name (assigned by the acquirer).
    */
    'merchantName'?: string | null;
    /**
    * ISO 3166-1 numeric three-digit country code.
    */
    'merchantCountryCode'?: string | null;
    /**
    * Merchant category code that describes the business.
    */
    'merchantCategoryCode'?: string | null;
    /**
    * Fully qualified URL of 3-D Secure requestor website or customer care site.
    */
    'merchantUrl'?: string | null;
    /**
    * Defines if this service is currently active or not.
    */
    'active'?: boolean;
    /**
    * The numeric rank of a payment service. Payment services with a lower position value are processed first. When a payment services is inserted at a position, any payment services with the the same value or higher are shifted down a position accordingly. When left out, the payment service is inserted at the end of the list.
    */
    'position'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<PaymentServiceUpdateFields>"
        },
        {
            "name": "acceptedCountries",
            "baseName": "accepted_countries",
            "type": "Array<string>"
        },
        {
            "name": "acceptedCurrencies",
            "baseName": "accepted_currencies",
            "type": "Array<string>"
        },
        {
            "name": "threeDSecureEnabled",
            "baseName": "three_d_secure_enabled",
            "type": "boolean"
        },
        {
            "name": "acquirerBinVisa",
            "baseName": "acquirer_bin_visa",
            "type": "string"
        },
        {
            "name": "acquirerBinMastercard",
            "baseName": "acquirer_bin_mastercard",
            "type": "string"
        },
        {
            "name": "acquirerBinAmex",
            "baseName": "acquirer_bin_amex",
            "type": "string"
        },
        {
            "name": "acquirerBinDiscover",
            "baseName": "acquirer_bin_discover",
            "type": "string"
        },
        {
            "name": "acquirerMerchantId",
            "baseName": "acquirer_merchant_id",
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
        },
        {
            "name": "merchantUrl",
            "baseName": "merchant_url",
            "type": "string"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PaymentServiceUpdate.attributeTypeMap;
    }
}


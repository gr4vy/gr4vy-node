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
* An active, configured payment service.
*/
export class PaymentService {
    /**
    * The ID of this payment service.
    */
    'id'?: string;
    /**
    * The type of this resource.
    */
    'type'?: PaymentService.TypeEnum;
    /**
    * The ID of the payment service definition used to create this service. 
    */
    'paymentServiceDefinitionId'?: string;
    /**
    * Defines the ID of the payment method that this service handles.
    */
    'method'?: PaymentService.MethodEnum;
    /**
    * The custom name set for this service.
    */
    'displayName'?: string;
    /**
    * The current status of this service. This will start off as pending, move to created, and might eventually move to an error status if and when the credentials are no longer valid. 
    */
    'status'?: PaymentService.StatusEnum;
    /**
    * A list of currencies for which this service is enabled, in ISO 4217 three-letter code format.
    */
    'acceptedCurrencies'?: Array<string>;
    /**
    * A list of countries for which this service is enabled, in ISO two-letter code format.
    */
    'acceptedCountries'?: Array<string>;
    /**
    * Defines if 3-D Secure is enabled for the service (can only be enabled if the payment service definition supports the `three_d_secure_hosted` feature). This does not affect pass through 3-D Secure data.
    */
    'threeDSecureEnabled'?: boolean = false;
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
    * Defines if the credentials are intended for the service\'s live API or sandbox/test API.
    */
    'credentialsMode'?: PaymentService.CredentialsModeEnum;
    /**
    * Defines if this service is currently active or not.
    */
    'active'?: boolean = true;
    /**
    * Determines the Gr4vy environments in which this service should be available. This can be used in combination with the `environment` parameters in the payment method and transaction APIs to route transactions through this service.
    */
    'environments'?: Array<PaymentService.EnvironmentsEnum>;
    /**
    * The numeric rank of a payment service. Payment services with a lower position value are processed first.
    */
    'position'?: number;
    /**
    * The date and time when this service was created.
    */
    'createdAt'?: Date;
    /**
    * The date and time when this service was last updated.
    */
    'updatedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentService.TypeEnum"
        },
        {
            "name": "paymentServiceDefinitionId",
            "baseName": "payment_service_definition_id",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "PaymentService.MethodEnum"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentService.StatusEnum"
        },
        {
            "name": "acceptedCurrencies",
            "baseName": "accepted_currencies",
            "type": "Array<string>"
        },
        {
            "name": "acceptedCountries",
            "baseName": "accepted_countries",
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
            "name": "credentialsMode",
            "baseName": "credentials_mode",
            "type": "PaymentService.CredentialsModeEnum"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "environments",
            "baseName": "environments",
            "type": "Array<PaymentService.EnvironmentsEnum>"
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return PaymentService.attributeTypeMap;
    }
}

export namespace PaymentService {
    export enum TypeEnum {
        PaymentService = <any> 'payment-service'
    }
    export enum MethodEnum {
        Card = <any> 'card',
        Paypal = <any> 'paypal',
        Banked = <any> 'banked',
        Gocardless = <any> 'gocardless'
    }
    export enum StatusEnum {
        Pending = <any> 'pending',
        Created = <any> 'created',
        Failed = <any> 'failed'
    }
    export enum CredentialsModeEnum {
        Sandbox = <any> 'sandbox',
        Live = <any> 'live'
    }
    export enum EnvironmentsEnum {
        Development = <any> 'development',
        Staging = <any> 'staging',
        Production = <any> 'production'
    }
}

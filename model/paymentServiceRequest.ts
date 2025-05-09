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
import { PaymentServiceRequestFieldsInner } from './paymentServiceRequestFieldsInner';
import { PaymentServiceRequestMerchantProfile } from './paymentServiceRequestMerchantProfile';
import { PaymentServiceRequestReportingFieldsInner } from './paymentServiceRequestReportingFieldsInner';

/**
* Request body for activating a payment service.
*/
export class PaymentServiceRequest {
    /**
    * The ID of the payment service to use.
    */
    'paymentServiceDefinitionId': string;
    /**
    * A custom name for the payment service. This will be shown in the Admin UI.
    */
    'displayName': string;
    /**
    * A list of fields, each containing a key-value pair for each field defined by the definition for this payment service e.g. for stripe-card `secret_key` is required and so must be sent within this field.
    */
    'fields': Array<PaymentServiceRequestFieldsInner>;
    /**
    * The `reporting_fields` field should contain a list of key-value pairs. Each key-value pair represents a reporting field defined by the payment service. For example, when enabling settlement reporting for `nuvei-card`, the `ssh_username` field is required and must be included in `reporting_fields`.
    */
    'reportingFields'?: Array<PaymentServiceRequestReportingFieldsInner>;
    /**
    * A list of countries that this payment service needs to support in ISO two-letter code format.
    */
    'acceptedCountries': Array<string>;
    /**
    * A list of currencies that this payment service needs to support in ISO 4217 three-letter code format.
    */
    'acceptedCurrencies': Array<string>;
    /**
    * Defines if 3-D Secure is enabled for the service. This feature can only be enabled if the payment service definition supports the `three_d_secure_hosted` feature. This does not affect pass through 3-D Secure data.
    */
    'threeDSecureEnabled'?: boolean = false;
    'merchantProfile'?: PaymentServiceRequestMerchantProfile | null;
    /**
    * Defines if this service is currently active or not.
    */
    'active'?: boolean = true;
    /**
    * Defines if the service works as an open-loop service. This feature can only be enabled if the PSP is set up to accept previous scheme transaction IDs.  If this value is not provided or is set to `null`, it will be set to the value of `open_loop` in the payment service definition.  If `open_loop_toggle` is `false` in the payment service definition, `open_loop` should either not be provided or set to `null`, or it will fail with a validation error.
    */
    'openLoop'?: boolean | null;
    /**
    * Defines if tokenization is enabled for the service. This feature can only be enabled if the payment service is NOT set as `open_loop` and the PSP is set up to tokenize.
    */
    'paymentMethodTokenizationEnabled'?: boolean | null;
    /**
    * Defines if network tokens are enabled for the service. This feature can only be enabled if the payment service is set as `open_loop` and the PSP is set up to accept network tokens.  If this value is not provided or is set to `null`, it will be set to the value of `network_tokens_default` in the payment service definition.  If `network_tokens_toggle` is `false` in the payment service definition, `network_tokens_enabled` should either not be provided or set to `null`, or it will fail with a validation error.
    */
    'networkTokensEnabled'?: boolean | null;
    /**
    * Defines if settlement reporting is enabled for the service. This feature can only be enabled if the payment service definition supports the `settlement_reporting` feature.
    */
    'settlementReportingEnabled'?: boolean = false;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentServiceDefinitionId",
            "baseName": "payment_service_definition_id",
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
            "type": "Array<PaymentServiceRequestFieldsInner>"
        },
        {
            "name": "reportingFields",
            "baseName": "reporting_fields",
            "type": "Array<PaymentServiceRequestReportingFieldsInner>"
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
            "name": "merchantProfile",
            "baseName": "merchant_profile",
            "type": "PaymentServiceRequestMerchantProfile"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "openLoop",
            "baseName": "open_loop",
            "type": "boolean"
        },
        {
            "name": "paymentMethodTokenizationEnabled",
            "baseName": "payment_method_tokenization_enabled",
            "type": "boolean"
        },
        {
            "name": "networkTokensEnabled",
            "baseName": "network_tokens_enabled",
            "type": "boolean"
        },
        {
            "name": "settlementReportingEnabled",
            "baseName": "settlement_reporting_enabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PaymentServiceRequest.attributeTypeMap;
    }
}


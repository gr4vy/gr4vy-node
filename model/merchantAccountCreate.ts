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
* A request to create a merchant account.
*/
export class MerchantAccountCreate {
    /**
    * The unique ID for the merchant account.
    */
    'id'?: string;
    /**
    * The human-readable name of the merchant account.
    */
    'displayName'?: string;
    /**
    * The optional URL where webhooks will be received.
    */
    'outboundWebhookUrl'?: string | null;
    /**
    * The optional username to use when `outbound_webhook_url` is configured and requires basic authentication.
    */
    'outboundWebhookUsername'?: string | null;
    /**
    * The optional password to use when `outbound_webhook_url` is configured and requires basic authentication.
    */
    'outboundWebhookPassword'?: string | null;
    /**
    * Requestor ID provided for Visa after onboarding to use Network Tokens. The requestor ID must be unique across all schemes and merchant accounts.
    */
    'visaNetworkTokensRequestorId'?: string | null;
    /**
    * Application ID provided for Visa after onboarding to use Network Tokens. The application ID must be unique across all schemes and merchant accounts.
    */
    'visaNetworkTokensAppId'?: string | null;
    /**
    * Requestor ID provided for Amex after onboarding to use Network Tokens. The requestor ID must be unique across all schemes and merchant accounts.
    */
    'amexNetworkTokensRequestorId'?: string | null;
    /**
    * Application ID provided for Amex after onboarding to use Network Tokens. The application ID must be unique across all schemes and merchant accounts.
    */
    'amexNetworkTokensAppId'?: string | null;
    /**
    * Requestor ID provided for Mastercard after onboarding to use Network Tokens. The requestor ID must be unique across all schemes and merchant accounts.
    */
    'mastercardNetworkTokensRequestorId'?: string | null;
    /**
    * Application ID provided for Mastercard after onboarding to use Network Tokens. The application ID must be unique across all schemes and merchant accounts.
    */
    'mastercardNetworkTokensAppId'?: string | null;
    /**
    * Client key provided by Pagos to authenticate to the Loon API. Loon is the Account Updater service used by Gr4vy.  * If the field is not set or if it\'s set to `null`, the key doesn\'t get configured. * If the field is set to `null`, the value for `loon_secret_key` must be `null` as well. * If the field is set to a non-empty string, the value for `loon_secret_key` must be a non-empty string as well.
    */
    'loonClientKey'?: string | null;
    /**
    * Secret key provided by Pagos to authenticate to the Loon API. Loon is the Account Updater service used by Gr4vy.  * If the field is not set or if it\'s set to `null`, the key doesn\'t get configured. * If the field is set to `null`, the value for `loon_client_key` must be `null` as well. * If the field is set to a non-empty string, the value for `loon_client_key` must be a non-empty string as well.
    */
    'loonSecretKey'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "outboundWebhookUrl",
            "baseName": "outbound_webhook_url",
            "type": "string"
        },
        {
            "name": "outboundWebhookUsername",
            "baseName": "outbound_webhook_username",
            "type": "string"
        },
        {
            "name": "outboundWebhookPassword",
            "baseName": "outbound_webhook_password",
            "type": "string"
        },
        {
            "name": "visaNetworkTokensRequestorId",
            "baseName": "visa_network_tokens_requestor_id",
            "type": "string"
        },
        {
            "name": "visaNetworkTokensAppId",
            "baseName": "visa_network_tokens_app_id",
            "type": "string"
        },
        {
            "name": "amexNetworkTokensRequestorId",
            "baseName": "amex_network_tokens_requestor_id",
            "type": "string"
        },
        {
            "name": "amexNetworkTokensAppId",
            "baseName": "amex_network_tokens_app_id",
            "type": "string"
        },
        {
            "name": "mastercardNetworkTokensRequestorId",
            "baseName": "mastercard_network_tokens_requestor_id",
            "type": "string"
        },
        {
            "name": "mastercardNetworkTokensAppId",
            "baseName": "mastercard_network_tokens_app_id",
            "type": "string"
        },
        {
            "name": "loonClientKey",
            "baseName": "loon_client_key",
            "type": "string"
        },
        {
            "name": "loonSecretKey",
            "baseName": "loon_secret_key",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MerchantAccountCreate.attributeTypeMap;
    }
}


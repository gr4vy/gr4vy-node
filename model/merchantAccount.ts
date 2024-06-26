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

export class MerchantAccount {
    /**
    * `merchant-account`.
    */
    'type'?: MerchantAccount.TypeEnum;
    /**
    * The ID for this merchant account.
    */
    'id'?: string;
    /**
    * The display name of this merchant account.
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
    * The optional password to use when `outbound_webhook_url` is configured and requires basic authentication.  If the field is not `null`, the value is masked to avoid exposing sensitive information.
    */
    'outboundWebhookPassword'?: string | null;
    /**
    * Requestor ID provided for Visa after onboarding to use Network Tokens.
    */
    'visaNetworkTokensRequestorId'?: string | null;
    /**
    * Application ID provided for Visa after onboarding to use Network Tokens.
    */
    'visaNetworkTokensAppId'?: string | null;
    /**
    * Requestor ID provided for Amex after onboarding to use Network Tokens.
    */
    'amexNetworkTokensRequestorId'?: string | null;
    /**
    * Application ID provided for Amex after onboarding to use Network Tokens.
    */
    'amexNetworkTokensAppId'?: string | null;
    /**
    * Requestor ID provided for Mastercard after onboarding to use Network Tokens.
    */
    'mastercardNetworkTokensRequestorId'?: string | null;
    /**
    * Application ID provided for Mastercard after onboarding to use Network Tokens.
    */
    'mastercardNetworkTokensAppId'?: string | null;
    /**
    * Client key provided by Pagos to authenticate to the Loon API. Loon is the Account Updater service used by Gr4vy.
    */
    'loonClientKey'?: string | null;
    /**
    * Secret key provided by Pagos to authenticate to the Loon API. Loon is the Account Updater service used by Gr4vy.  If the field is not `null`, the value is masked to avoid exposing sensitive information.
    */
    'loonSecretKey'?: string | null;
    /**
    * Card schemes accepted when creating jobs using this set of Loon API keys. Loon is the Account Updater service used by Gr4vy.
    */
    'loonAcceptedSchemes'?: Array<MerchantAccount.LoonAcceptedSchemesEnum>;
    /**
    * The date and time when this merchant account was created.
    */
    'createdAt'?: Date;
    /**
    * The date and time when this merchant account was updated.
    */
    'updatedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "MerchantAccount.TypeEnum"
        },
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
        },
        {
            "name": "loonAcceptedSchemes",
            "baseName": "loon_accepted_schemes",
            "type": "Array<MerchantAccount.LoonAcceptedSchemesEnum>"
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
        return MerchantAccount.attributeTypeMap;
    }
}

export namespace MerchantAccount {
    export enum TypeEnum {
        MerchantAccount = <any> 'merchant-account'
    }
    export enum LoonAcceptedSchemesEnum {
        Accel = <any> 'accel',
        Amex = <any> 'amex',
        Bancontact = <any> 'bancontact',
        CarteBancaire = <any> 'carte-bancaire',
        Cirrus = <any> 'cirrus',
        Culiance = <any> 'culiance',
        Dankort = <any> 'dankort',
        DinersClub = <any> 'diners-club',
        Discover = <any> 'discover',
        EftposAustralia = <any> 'eftpos-australia',
        Elo = <any> 'elo',
        Hipercard = <any> 'hipercard',
        Jcb = <any> 'jcb',
        Maestro = <any> 'maestro',
        Mastercard = <any> 'mastercard',
        Mir = <any> 'mir',
        Nyce = <any> 'nyce',
        Other = <any> 'other',
        Pulse = <any> 'pulse',
        Rupay = <any> 'rupay',
        Star = <any> 'star',
        Uatp = <any> 'uatp',
        Unionpay = <any> 'unionpay',
        Visa = <any> 'visa',
        Null = <any> 'null'
    }
}

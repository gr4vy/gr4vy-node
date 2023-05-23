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
* A digital wallet (e.g. Apple Pay) that has been registered.
*/
export class DigitalWallet {
    /**
    * `digital-wallet`.
    */
    'type'?: DigitalWallet.TypeEnum;
    /**
    * The ID of the registered digital wallet.
    */
    'id'?: string;
    /**
    * The unique ID for a merchant account.
    */
    'merchantAccountId'?: string;
    /**
    * The name of the digital wallet provider.
    */
    'provider'?: DigitalWallet.ProviderEnum;
    /**
    * The name of the merchant the digital wallet is registered to.
    */
    'merchantName'?: string;
    /**
    * The main URL of the merchant.
    */
    'merchantUrl'?: string | null;
    /**
    * The list of domain names that a digital wallet can be used on. To use a digital wallet on a website, the domain of the site is required to be in this list.
    */
    'domainNames'?: Array<string>;
    /**
    * The date and time when this digital wallet was registered.
    */
    'createdAt'?: Date;
    /**
    * The date and time when this digital wallet was last updated.
    */
    'updatedAt'?: Date;
    /**
    * The number of active custom certificates registered for this digital wallet (Apple Pay only).
    */
    'activeCertificateCount'?: number;
    /**
    * The number of pending custom certificates registered for this digital wallet (Apple Pay only).
    */
    'pendingCertificateCount'?: number;
    /**
    * The number of expired custom certificates registered for this digital wallet (Apple Pay only).
    */
    'expiredCertificateCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "DigitalWallet.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "merchantAccountId",
            "baseName": "merchant_account_id",
            "type": "string"
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "DigitalWallet.ProviderEnum"
        },
        {
            "name": "merchantName",
            "baseName": "merchant_name",
            "type": "string"
        },
        {
            "name": "merchantUrl",
            "baseName": "merchant_url",
            "type": "string"
        },
        {
            "name": "domainNames",
            "baseName": "domain_names",
            "type": "Array<string>"
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
        },
        {
            "name": "activeCertificateCount",
            "baseName": "active_certificate_count",
            "type": "number"
        },
        {
            "name": "pendingCertificateCount",
            "baseName": "pending_certificate_count",
            "type": "number"
        },
        {
            "name": "expiredCertificateCount",
            "baseName": "expired_certificate_count",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DigitalWallet.attributeTypeMap;
    }
}

export namespace DigitalWallet {
    export enum TypeEnum {
        DigitalWallet = <any> 'digital-wallet'
    }
    export enum ProviderEnum {
        Apple = <any> 'apple',
        Google = <any> 'google'
    }
}

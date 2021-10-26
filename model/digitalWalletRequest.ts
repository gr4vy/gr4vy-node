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
* Merchant details used to register with a digital wallet provider.
*/
export class DigitalWalletRequest {
    /**
    * The name of the digital wallet provider.
    */
    'provider': DigitalWalletRequest.ProviderEnum;
    /**
    * The name of the merchant. This is used to register the merchant with a digital wallet provider and this name is not displayed to the buyer.
    */
    'merchantName': string;
    /**
    * The main URL of the merchant. This is used to register the merchant with a digital wallet provider and this URL is not displayed to the buyer.
    */
    'merchantUrl'?: string;
    /**
    * The list of fully qualified domain names that a digital wallet provider should process payments for.
    */
    'domainNames': Array<string>;
    /**
    * The explicit acceptance of the digital wallet provider\'s terms and conditions by the merchant. Needs to be `true` to register a new digital wallet.
    */
    'acceptTermsAndConditions': boolean;
    /**
    * Determines the Gr4vy environments in which this digital wallet should be available.
    */
    'environments'?: Array<DigitalWalletRequest.EnvironmentsEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "DigitalWalletRequest.ProviderEnum"
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
            "name": "acceptTermsAndConditions",
            "baseName": "accept_terms_and_conditions",
            "type": "boolean"
        },
        {
            "name": "environments",
            "baseName": "environments",
            "type": "Array<DigitalWalletRequest.EnvironmentsEnum>"
        }    ];

    static getAttributeTypeMap() {
        return DigitalWalletRequest.attributeTypeMap;
    }
}

export namespace DigitalWalletRequest {
    export enum ProviderEnum {
        Apple = <any> 'apple'
    }
    export enum EnvironmentsEnum {
        Development = <any> 'development',
        Staging = <any> 'staging',
        Production = <any> 'production'
    }
}

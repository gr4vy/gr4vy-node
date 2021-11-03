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
* Request to use a redirect payment method in a transaction.
*/
export class RedirectRequest {
    /**
    * The method to use, this can be any of the methods that support redirect requests.  When storing a new payment method, only `gocardless` and `stripedd` is currently supported.
    */
    'method': RedirectRequest.MethodEnum;
    /**
    * The redirect URL to redirect a buyer to after they have authorized their transaction.
    */
    'redirectUrl': string;
    /**
    * The ISO-4217 currency code to use this payment method for. This is used to select the payment service to use.
    */
    'currency': string;
    /**
    * The 2-letter ISO code of the country to use this payment method for. This is used to select the payment service to use.
    */
    'country': string;
    /**
    * An external identifier that can be used to match the account against your own records.
    */
    'externalIdentifier'?: string | null;
    /**
    * The ID of the buyer to associate this payment method to. If this field is provided then the `buyer_external_identifier` field needs to be unset.
    */
    'buyerId'?: string;
    /**
    * The `external_identifier` of the buyer to associate this payment method to. If this field is provided then the `buyer_id` field needs to be unset.
    */
    'buyerExternalIdentifier'?: string;
    /**
    * Defines the environment to store this payment method in. Setting this to anything other than `production` will force Gr4vy to use a payment a service configured for that environment.
    */
    'environment'?: RedirectRequest.EnvironmentEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "method",
            "baseName": "method",
            "type": "RedirectRequest.MethodEnum"
        },
        {
            "name": "redirectUrl",
            "baseName": "redirect_url",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "externalIdentifier",
            "baseName": "external_identifier",
            "type": "string"
        },
        {
            "name": "buyerId",
            "baseName": "buyer_id",
            "type": "string"
        },
        {
            "name": "buyerExternalIdentifier",
            "baseName": "buyer_external_identifier",
            "type": "string"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "RedirectRequest.EnvironmentEnum"
        }    ];

    static getAttributeTypeMap() {
        return RedirectRequest.attributeTypeMap;
    }
}

export namespace RedirectRequest {
    export enum MethodEnum {
        Gocardless = <any> 'gocardless',
        Stripedd = <any> 'stripedd',
        Paypal = <any> 'paypal',
        Banked = <any> 'banked'
    }
    export enum EnvironmentEnum {
        Development = <any> 'development',
        Staging = <any> 'staging',
        Production = <any> 'production'
    }
}

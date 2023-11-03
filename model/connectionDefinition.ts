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
* A connection that can be configured.
*/
export class ConnectionDefinition {
    /**
    * The ID of the connection.
    */
    'id'?: string;
    /**
    * `connection-definition`.
    */
    'type'?: string;
    /**
    * The name of this connection.
    */
    'name'?: string;
    /**
    * The number of configured connections.
    */
    'count'?: number;
    'group'?: ConnectionDefinition.GroupEnum;
    'category'?: ConnectionDefinition.CategoryEnum;
    /**
    * An icon to display for the connection.
    */
    'iconUrl'?: string | null;
    /**
    * The provider for this connection.
    */
    'provider'?: string | null;

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
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "ConnectionDefinition.GroupEnum"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "ConnectionDefinition.CategoryEnum"
        },
        {
            "name": "iconUrl",
            "baseName": "icon_url",
            "type": "string"
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ConnectionDefinition.attributeTypeMap;
    }
}

export namespace ConnectionDefinition {
    export enum GroupEnum {
        AntiFraudService = <any> 'anti-fraud-service',
        DigitalWallet = <any> 'digital-wallet',
        GiftCardService = <any> 'gift-card-service',
        PaymentService = <any> 'payment-service'
    }
    export enum CategoryEnum {
        AntiFraud = <any> 'anti-fraud',
        Bank = <any> 'bank',
        Bnpl = <any> 'bnpl',
        Card = <any> 'card',
        Cash = <any> 'cash',
        StoredCredit = <any> 'stored-credit',
        Wallet = <any> 'wallet'
    }
}

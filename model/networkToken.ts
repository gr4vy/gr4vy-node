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
* A network token generated by an open-loop PSP.
*/
export class NetworkToken {
    /**
    * The type of this resource.
    */
    'type'?: NetworkToken.TypeEnum;
    /**
    * The unique ID of the token.
    */
    'id'?: string;
    /**
    * The unique ID of the payment method.
    */
    'paymentMethodId'?: string;
    /**
    * The state of the network token.  - `active` - The network token is active and ready to be used. - `inactive` - The network token is being deactivated. - `suspended` - The network token is suspended. - `deleted` - The network token is deleted.
    */
    'status'?: NetworkToken.StatusEnum;
    /**
    * The value of the network token.
    */
    'token'?: string;
    /**
    * The expiration date for the network token.
    */
    'expirationDate'?: string | null;
    /**
    * The date and time when this network token was first created in our system.
    */
    'createdAt'?: Date;
    /**
    * The date and time when this network token was last updated in our system.
    */
    'updatedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "NetworkToken.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "paymentMethodId",
            "baseName": "payment_method_id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "NetworkToken.StatusEnum"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        },
        {
            "name": "expirationDate",
            "baseName": "expiration_date",
            "type": "string"
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
        return NetworkToken.attributeTypeMap;
    }
}

export namespace NetworkToken {
    export enum TypeEnum {
        NetworkToken = <any> 'network-token'
    }
    export enum StatusEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Suspended = <any> 'suspended',
        Deleted = <any> 'deleted'
    }
}

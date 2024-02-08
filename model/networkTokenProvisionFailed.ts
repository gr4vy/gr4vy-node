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
import { NetworkTokenProvisionFailedContext } from './networkTokenProvisionFailedContext';

/**
* This event logs the request and response details of HTTP calls made to provision a network token, in case the call failed.
*/
export class NetworkTokenProvisionFailed {
    /**
    * The type of this resource. Is always `transaction-event`.
    */
    'type'?: NetworkTokenProvisionFailed.TypeEnum;
    /**
    * The unique identifier for this event.
    */
    'id'?: string;
    /**
    * The name of this resource. Is always `network-token-provision-failed`.
    */
    'name'?: NetworkTokenProvisionFailed.NameEnum;
    /**
    * The date and time when this event was created in our system.
    */
    'createdAt'?: Date;
    'context'?: NetworkTokenProvisionFailedContext;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "NetworkTokenProvisionFailed.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "NetworkTokenProvisionFailed.NameEnum"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "NetworkTokenProvisionFailedContext"
        }    ];

    static getAttributeTypeMap() {
        return NetworkTokenProvisionFailed.attributeTypeMap;
    }
}

export namespace NetworkTokenProvisionFailed {
    export enum TypeEnum {
        TransactionEvent = <any> 'transaction-event'
    }
    export enum NameEnum {
        NetworkTokenProvisionFailed = <any> 'network-token-provision-failed'
    }
}
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
import { AntiFraudTransactionStatusUpdateEventContext } from './antiFraudTransactionStatusUpdateEventContext';

/**
* This event logs the request and response details of HTTP calls made to an anti-fraud provider to update a transaction.
*/
export class AntiFraudTransactionStatusUpdateEvent {
    /**
    * The type of this resource. Is always `transaction-event`.
    */
    'type'?: AntiFraudTransactionStatusUpdateEvent.TypeEnum;
    /**
    * The unique identifier for this event.
    */
    'id'?: string;
    /**
    * The name of this resource. Is always `anti-fraud-transaction-status-update`.
    */
    'name'?: AntiFraudTransactionStatusUpdateEvent.NameEnum;
    /**
    * The date and time when this transaction event was created in our system.
    */
    'createdAt'?: Date;
    'context'?: AntiFraudTransactionStatusUpdateEventContext;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AntiFraudTransactionStatusUpdateEvent.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "AntiFraudTransactionStatusUpdateEvent.NameEnum"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "AntiFraudTransactionStatusUpdateEventContext"
        }    ];

    static getAttributeTypeMap() {
        return AntiFraudTransactionStatusUpdateEvent.attributeTypeMap;
    }
}

export namespace AntiFraudTransactionStatusUpdateEvent {
    export enum TypeEnum {
        TransactionEvent = <any> 'transaction-event'
    }
    export enum NameEnum {
        AntiFraudTransactionStatusUpdate = <any> 'anti-fraud-transaction-status-update'
    }
}

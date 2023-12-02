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
import { AntiFraudTransactionStatusUpdateErrorEventContext } from './antiFraudTransactionStatusUpdateErrorEventContext';

/**
* This event logs the reason why we were unable to update an anti-fraud decision.
*/
export class AntiFraudTransactionStatusUpdateErrorEvent {
    /**
    * The type of this resource. Is always `transaction-event`.
    */
    'type'?: AntiFraudTransactionStatusUpdateErrorEvent.TypeEnum;
    /**
    * The unique identifier for this event.
    */
    'id'?: string;
    /**
    * The name of this resource. Is always `anti-fraud-transaction-status-update-error`.
    */
    'name'?: AntiFraudTransactionStatusUpdateErrorEvent.NameEnum;
    /**
    * The date and time when this transaction event was created in our system.
    */
    'createdAt'?: Date;
    'context'?: AntiFraudTransactionStatusUpdateErrorEventContext;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AntiFraudTransactionStatusUpdateErrorEvent.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "AntiFraudTransactionStatusUpdateErrorEvent.NameEnum"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "AntiFraudTransactionStatusUpdateErrorEventContext"
        }    ];

    static getAttributeTypeMap() {
        return AntiFraudTransactionStatusUpdateErrorEvent.attributeTypeMap;
    }
}

export namespace AntiFraudTransactionStatusUpdateErrorEvent {
    export enum TypeEnum {
        TransactionEvent = <any> 'transaction-event'
    }
    export enum NameEnum {
        AntiFraudTransactionStatusUpdateError = <any> 'anti-fraud-transaction-status-update-error'
    }
}
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
import { AntiFraudDecisionSkippedEventContext } from './antiFraudDecisionSkippedEventContext';

/**
* This event logs the reason why we skipped getting an anti-fraud decision.
*/
export class AntiFraudDecisionSkippedEvent {
    /**
    * The type of this resource. Is always `transaction-event`.
    */
    'type'?: AntiFraudDecisionSkippedEvent.TypeEnum;
    /**
    * The unique identifier for this event.
    */
    'id'?: string;
    /**
    * The name of this resource. Is always `anti-fraud-decision-skipped`.
    */
    'name'?: AntiFraudDecisionSkippedEvent.NameEnum;
    /**
    * The date and time when this transaction was created in our system.
    */
    'createdAt'?: Date;
    'context'?: AntiFraudDecisionSkippedEventContext;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AntiFraudDecisionSkippedEvent.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "AntiFraudDecisionSkippedEvent.NameEnum"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "AntiFraudDecisionSkippedEventContext"
        }    ];

    static getAttributeTypeMap() {
        return AntiFraudDecisionSkippedEvent.attributeTypeMap;
    }
}

export namespace AntiFraudDecisionSkippedEvent {
    export enum TypeEnum {
        TransactionEvent = <any> 'transaction-event'
    }
    export enum NameEnum {
        AntiFraudDecisionSkipped = <any> 'anti-fraud-decision-skipped'
    }
}

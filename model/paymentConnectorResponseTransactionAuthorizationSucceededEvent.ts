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
import { PaymentConnectorResponseTransactionAuthorizationSucceededEventContext } from './paymentConnectorResponseTransactionAuthorizationSucceededEventContext';

/**
* This event logs the exact details parsed details for a succeeded authorization as reported by our connector.
*/
export class PaymentConnectorResponseTransactionAuthorizationSucceededEvent {
    /**
    * The type of this resource. Is always `transaction-event`.
    */
    'type'?: PaymentConnectorResponseTransactionAuthorizationSucceededEvent.TypeEnum;
    /**
    * The unique identifier for this event.
    */
    'id'?: string;
    /**
    * The name of this resource. Is always `payment-connector-response-transaction-authorization-succeeded`.
    */
    'name'?: PaymentConnectorResponseTransactionAuthorizationSucceededEvent.NameEnum;
    /**
    * The date and time when this transaction was created in our system.
    */
    'createdAt'?: Date;
    'context'?: PaymentConnectorResponseTransactionAuthorizationSucceededEventContext;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentConnectorResponseTransactionAuthorizationSucceededEvent.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "PaymentConnectorResponseTransactionAuthorizationSucceededEvent.NameEnum"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "PaymentConnectorResponseTransactionAuthorizationSucceededEventContext"
        }    ];

    static getAttributeTypeMap() {
        return PaymentConnectorResponseTransactionAuthorizationSucceededEvent.attributeTypeMap;
    }
}

export namespace PaymentConnectorResponseTransactionAuthorizationSucceededEvent {
    export enum TypeEnum {
        TransactionEvent = <any> 'transaction-event'
    }
    export enum NameEnum {
        PaymentConnectorResponseTransactionAuthorizationSucceeded = <any> 'payment-connector-response-transaction-authorization-succeeded'
    }
}
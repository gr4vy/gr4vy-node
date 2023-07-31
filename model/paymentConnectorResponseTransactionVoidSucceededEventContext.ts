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
* Additional context for this event.
*/
export class PaymentConnectorResponseTransactionVoidSucceededEventContext {
    /**
    * The unique ID of the payment service used.
    */
    'paymentServiceId'?: string;
    /**
    * The display name of the payment service used.
    */
    'paymentServiceDisplayName'?: string;
    /**
    * The payment service definition used.
    */
    'paymentServiceDefinitionId'?: string;
    /**
    * The external ID of the transaction as set by the payment service.
    */
    'paymentServiceTransactionId'?: string | null;
    /**
    * The date and time when this transaction was voided.
    */
    'voidedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentServiceId",
            "baseName": "payment_service_id",
            "type": "string"
        },
        {
            "name": "paymentServiceDisplayName",
            "baseName": "payment_service_display_name",
            "type": "string"
        },
        {
            "name": "paymentServiceDefinitionId",
            "baseName": "payment_service_definition_id",
            "type": "string"
        },
        {
            "name": "paymentServiceTransactionId",
            "baseName": "payment_service_transaction_id",
            "type": "string"
        },
        {
            "name": "voidedAt",
            "baseName": "voided_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return PaymentConnectorResponseTransactionVoidSucceededEventContext.attributeTypeMap;
    }
}


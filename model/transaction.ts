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
import { BuyerSnapshot } from './buyerSnapshot';
import { PaymentMethodSnapshot } from './paymentMethodSnapshot';
import { PaymentServiceSnapshot } from './paymentServiceSnapshot';

/**
* A transaction record.
*/
export class Transaction {
    /**
    * The type of this resource. Is always `transaction`.
    */
    'type'?: Transaction.TypeEnum;
    /**
    * The unique identifier for this transaction.
    */
    'id'?: string;
    /**
    * The status of the transaction. The status may change over time as asynchronous  processing events occur.
    */
    'status'?: Transaction.StatusEnum;
    /**
    * The authorized amount for this transaction. This can be different than the actual captured amount and part of this amount may be refunded.
    */
    'amount'?: number;
    /**
    * The captured amount for this transaction. This can be a part and in some cases even more than the authorized amount.
    */
    'capturedAmount'?: number;
    /**
    * The refunded amount for this transaction. This can be a part or all of the captured amount.
    */
    'refundedAmount'?: number;
    /**
    * The currency code for this transaction.
    */
    'currency'?: string;
    /**
    * The payment method used for this transaction.
    */
    'paymentMethod'?: PaymentMethodSnapshot;
    /**
    * The buyer used for this transaction.
    */
    'buyer'?: BuyerSnapshot | null;
    /**
    * The date and time when this transaction was created in our system.
    */
    'createdAt'?: Date;
    /**
    * An external identifier that can be used to match the transaction against your own records.
    */
    'externalIdentifier'?: string | null;
    /**
    * Defines when the transaction was last updated.
    */
    'updatedAt'?: Date;
    /**
    * The payment service used for this transaction.
    */
    'paymentService'?: PaymentServiceSnapshot;
    /**
    * The environment this transaction has been created in.
    */
    'environment'?: Transaction.EnvironmentEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "Transaction.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Transaction.StatusEnum"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "capturedAmount",
            "baseName": "captured_amount",
            "type": "number"
        },
        {
            "name": "refundedAmount",
            "baseName": "refunded_amount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "paymentMethod",
            "baseName": "payment_method",
            "type": "PaymentMethodSnapshot"
        },
        {
            "name": "buyer",
            "baseName": "buyer",
            "type": "BuyerSnapshot"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "externalIdentifier",
            "baseName": "external_identifier",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "paymentService",
            "baseName": "payment_service",
            "type": "PaymentServiceSnapshot"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "Transaction.EnvironmentEnum"
        }    ];

    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }
}

export namespace Transaction {
    export enum TypeEnum {
        Transaction = <any> 'transaction'
    }
    export enum StatusEnum {
        Processing = <any> 'processing',
        ProcessingFailed = <any> 'processing_failed',
        CaptureSucceeded = <any> 'capture_succeeded',
        CapturePending = <any> 'capture_pending',
        CaptureDeclined = <any> 'capture_declined',
        CaptureFailed = <any> 'capture_failed',
        AuthorizationSucceeded = <any> 'authorization_succeeded',
        AuthorizationPending = <any> 'authorization_pending',
        AuthorizationDeclined = <any> 'authorization_declined',
        AuthorizationFailed = <any> 'authorization_failed',
        AuthorizationExpired = <any> 'authorization_expired',
        AuthorizationVoided = <any> 'authorization_voided',
        RefundSucceeded = <any> 'refund_succeeded',
        RefundPending = <any> 'refund_pending',
        RefundDeclined = <any> 'refund_declined',
        RefundFailed = <any> 'refund_failed',
        BuyerApprovalSucceeded = <any> 'buyer_approval_succeeded',
        BuyerApprovalPending = <any> 'buyer_approval_pending',
        BuyerApprovalDeclined = <any> 'buyer_approval_declined',
        BuyerApprovalFailed = <any> 'buyer_approval_failed',
        BuyerApprovalTimedout = <any> 'buyer_approval_timedout'
    }
    export enum EnvironmentEnum {
        Development = <any> 'development',
        Staging = <any> 'staging',
        Production = <any> 'production'
    }
}

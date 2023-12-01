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
* A request to refund a transaction.
*/
export class TransactionRefundRequest {
    /**
    * The amount requested to refund.  If omitted, a full refund will be requested for the main payment method.  When set, the amount must be lower than or equal to the remaining balance in the associated transaction. Negative and zero-amount refunds are not supported.
    */
    'amount'?: number;
    /**
    * The target type to refund for. This can be used to target a gift card to refund to instead of the main payment method.
    */
    'targetType'?: TransactionRefundRequest.TargetTypeEnum;
    /**
    * The optional ID of the instrument to refund for. This is only required when the `target_type` is set to `gift-card-redemption`.
    */
    'targetId'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "targetType",
            "baseName": "target_type",
            "type": "TransactionRefundRequest.TargetTypeEnum"
        },
        {
            "name": "targetId",
            "baseName": "target_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransactionRefundRequest.attributeTypeMap;
    }
}

export namespace TransactionRefundRequest {
    export enum TargetTypeEnum {
        PaymentMethod = <any> 'payment-method',
        GiftCardRedemption = <any> 'gift-card-redemption'
    }
}

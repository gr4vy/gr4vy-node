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
* Fiserv installment options.
*/
export class ConnectionOptionsFiservCardInstallmentOptions {
    /**
    * Number of installments for a sale transaction if the customer pays the total amount in multiple transactions.
    */
    'numberOfInstallments'?: number | null;
    /**
    * Indicates whether the installment interest amount has been applied.
    */
    'installmentsInterest'?: boolean | null;
    /**
    * The number of months the first installment payment will be delayed.
    */
    'installmentDelayMonths'?: number | null;
    /**
    * Indicates if the merchant supports merchant advice code (MAC) in order to receive table 55 code for a declined recurring transaction.
    */
    'merchantAdviceCodeSupported'?: boolean | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "numberOfInstallments",
            "baseName": "numberOfInstallments",
            "type": "number"
        },
        {
            "name": "installmentsInterest",
            "baseName": "installmentsInterest",
            "type": "boolean"
        },
        {
            "name": "installmentDelayMonths",
            "baseName": "installmentDelayMonths",
            "type": "number"
        },
        {
            "name": "merchantAdviceCodeSupported",
            "baseName": "merchantAdviceCodeSupported",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ConnectionOptionsFiservCardInstallmentOptions.attributeTypeMap;
    }
}


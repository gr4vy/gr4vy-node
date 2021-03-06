/**
 * Gr4vy API (Beta)
 * Welcome to the Gr4vy API reference documentation. Our API is still very much a work in product and subject to change.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@gr4vy.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* A request to capture a transaction.
*/
export class TransactionCaptureRequest {
    /**
    * The (partial) amount to capture.  When left blank, this will capture the entire amount.
    */
    'amount': number;
    /**
    * A supported ISO-4217 currency code. 
    */
    'currency': string;
    /**
    * An external identifier that can be used to match the transaction against your own records.
    */
    'externalIdentifier'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "externalIdentifier",
            "baseName": "external_identifier",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransactionCaptureRequest.attributeTypeMap;
    }
}


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
import { TransactionRetriesReportSpecParamsFilters } from './transactionRetriesReportSpecParamsFilters';

/**
* Parameters used to configure the report.
*/
export class TransactionRetriesReportSpecParams {
    'filters'?: TransactionRetriesReportSpecParamsFilters;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filters",
            "baseName": "filters",
            "type": "TransactionRetriesReportSpecParamsFilters"
        }    ];

    static getAttributeTypeMap() {
        return TransactionRetriesReportSpecParams.attributeTypeMap;
    }
}


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
import { DetailedSettlementReportSpecParamsFilters } from './detailedSettlementReportSpecParamsFilters';

/**
* Parameters used to configure the report.
*/
export class DetailedSettlementReportSpecParams {
    'filters'?: DetailedSettlementReportSpecParamsFilters;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filters",
            "baseName": "filters",
            "type": "DetailedSettlementReportSpecParamsFilters"
        }    ];

    static getAttributeTypeMap() {
        return DetailedSettlementReportSpecParams.attributeTypeMap;
    }
}


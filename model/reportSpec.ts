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
import { ReportSpecParams } from './reportSpecParams';

/**
* The specification of a report.
*/
export class ReportSpec {
    /**
    * The model (dataset) that the data used for the report is retrieved from.
    */
    'model': ReportSpec.ModelEnum;
    'params': ReportSpecParams;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "model",
            "baseName": "model",
            "type": "ReportSpec.ModelEnum"
        },
        {
            "name": "params",
            "baseName": "params",
            "type": "ReportSpecParams"
        }    ];

    static getAttributeTypeMap() {
        return ReportSpec.attributeTypeMap;
    }
}

export namespace ReportSpec {
    export enum ModelEnum {
        Transactions = <any> 'transactions'
    }
}

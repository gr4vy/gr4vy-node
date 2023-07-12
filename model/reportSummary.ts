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
* A report record summary.
*/
export class ReportSummary {
    /**
    * The type of this resource. Is always `report`.
    */
    'type'?: ReportSummary.TypeEnum;
    /**
    * The unique identifier for this report.
    */
    'id'?: string;
    /**
    * The unique ID for a merchant account.
    */
    'merchantAccountId'?: string;
    /**
    * The name of this report.
    */
    'name'?: string;
    /**
    * The unique identifier for the creator of this report.
    */
    'creatorId'?: string | null;
    /**
    * The name of the creator of this report.
    */
    'creatorDisplayName'?: string | null;
    /**
    * The type of the creator of this report.
    */
    'creatorType'?: ReportSummary.CreatorTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ReportSummary.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "merchantAccountId",
            "baseName": "merchant_account_id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "creatorId",
            "baseName": "creator_id",
            "type": "string"
        },
        {
            "name": "creatorDisplayName",
            "baseName": "creator_display_name",
            "type": "string"
        },
        {
            "name": "creatorType",
            "baseName": "creator_type",
            "type": "ReportSummary.CreatorTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return ReportSummary.attributeTypeMap;
    }
}

export namespace ReportSummary {
    export enum TypeEnum {
        Report = <any> 'report'
    }
    export enum CreatorTypeEnum {
        User = <any> 'user',
        PrivateKey = <any> 'private_key'
    }
}

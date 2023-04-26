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
import { AntiFraudServiceUpdate } from './antiFraudServiceUpdate';
import { AntiFraudServiceUpdateFields } from './antiFraudServiceUpdateFields';

/**
* A request to create an anti-fraud service.
*/
export class AntiFraudServiceCreate {
    /**
    * The name of the Anti-Fraud service provider. During update request, this value is used for validation only but the underlying service can not be changed for an existing service.
    */
    'antiFraudServiceDefinitionId': AntiFraudServiceCreate.AntiFraudServiceDefinitionIdEnum;
    /**
    * A unique name for this anti-fraud service which is used in the Gr4vy admin panel to give a anti-fraud Service a human readable name.
    */
    'displayName': string;
    /**
    * Defines if this service is currently active or not. There can only be one active service at any time. When updating a service to active, the current active service will be deactivated.
    */
    'active'?: boolean;
    /**
    * A list of fields, each containing a key-value pair for each field defined by the definition for this anti-fraud service e.g. for Sift `api_key` must be sent within this field when creating the service.  For updates, only the fields sent here will be updated, existing ones will not be affected if not present.
    */
    'fields': Array<AntiFraudServiceUpdateFields>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "antiFraudServiceDefinitionId",
            "baseName": "anti_fraud_service_definition_id",
            "type": "AntiFraudServiceCreate.AntiFraudServiceDefinitionIdEnum"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<AntiFraudServiceUpdateFields>"
        }    ];

    static getAttributeTypeMap() {
        return AntiFraudServiceCreate.attributeTypeMap;
    }
}

export namespace AntiFraudServiceCreate {
    export enum AntiFraudServiceDefinitionIdEnum {
        SiftAntiFraud = <any> 'sift-anti-fraud',
        CybersourceAntiFraud = <any> 'cybersource-anti-fraud'
    }
}

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
export class AntiFraudDecisionErrorEventContext {
    /**
    * The unique ID of the anti-fraud service used.
    */
    'antiFraudServiceId'?: string;
    /**
    * The name of the anti-fraud service used.
    */
    'antiFraudServiceName'?: string;
    /**
    * The anti-fraud service definition used.
    */
    'antiFraudServiceDefinitionId'?: string;
    /**
    * The HTTP response status code from the anti-fraud provider, if we received any.
    */
    'statusCode'?: number;
    /**
    * The reason we could not get the anti-fraud decision.
    */
    'reason'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "antiFraudServiceId",
            "baseName": "anti_fraud_service_id",
            "type": "string"
        },
        {
            "name": "antiFraudServiceName",
            "baseName": "anti_fraud_service_name",
            "type": "string"
        },
        {
            "name": "antiFraudServiceDefinitionId",
            "baseName": "anti_fraud_service_definition_id",
            "type": "string"
        },
        {
            "name": "statusCode",
            "baseName": "status_code",
            "type": "number"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AntiFraudDecisionErrorEventContext.attributeTypeMap;
    }
}


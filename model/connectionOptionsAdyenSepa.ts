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
* Additional options to be passed through to Adyen when processing SEPA transactions.
*/
export class ConnectionOptionsAdyenSepa {
    /**
    * Enabled Adyen\'s auto-rescue feature.
    */
    'autoRescue'?: boolean = false;
    /**
    * Defines the number of days to auto-retry a payment for if `autoRescue` is enabled.
    */
    'maxDaysToRescue'?: number | null;
    /**
    * Defines the Adyen auto-rescue test scenario to invoke.
    */
    'autoRescueSepaScenario'?: string | null;
    /**
    * Defines the type of chargeback that you want to simulate.
    */
    'ownerName'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "autoRescue",
            "baseName": "autoRescue",
            "type": "boolean"
        },
        {
            "name": "maxDaysToRescue",
            "baseName": "maxDaysToRescue",
            "type": "number"
        },
        {
            "name": "autoRescueSepaScenario",
            "baseName": "autoRescueSepaScenario",
            "type": "string"
        },
        {
            "name": "ownerName",
            "baseName": "ownerName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ConnectionOptionsAdyenSepa.attributeTypeMap;
    }
}


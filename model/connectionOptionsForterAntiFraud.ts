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
* Additional options for Forter (anti-fraud).
*/
export class ConnectionOptionsForterAntiFraud {
    /**
    * Value to populate the `deliveryType` field in `primaryDeliveryDetails`.  Represents the type of delivery: PHYSICAL for any type of shipped goods. DIGITAL for non-shipped goods (services, gift cards etc.). Possible values are: \"DIGITAL\", \"PHYSICAL\", \"HYBRID\".
    */
    'deliveryType'?: string | null;
    /**
    * Value to populate the `deliveryMethod` field in `primaryDeliveryDetails`.  Represents the delivery method chosen by customer such as postal service, email, in game transfer, etc.
    */
    'deliveryMethod'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deliveryType",
            "baseName": "delivery_type",
            "type": "string"
        },
        {
            "name": "deliveryMethod",
            "baseName": "delivery_method",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ConnectionOptionsForterAntiFraud.attributeTypeMap;
    }
}

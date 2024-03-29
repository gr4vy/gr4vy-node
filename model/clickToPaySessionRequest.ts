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
* Return digital payment application details for Click to Pay.
*/
export class ClickToPaySessionRequest {
    /**
    * The identifier for the current checkout session.
    */
    'checkoutSessionId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutSessionId",
            "baseName": "checkout_session_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ClickToPaySessionRequest.attributeTypeMap;
    }
}


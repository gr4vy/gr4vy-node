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
import { ConnectionDefinition } from './connectionDefinition';

/**
* A configured connection.
*/
export class Connection {
    /**
    * The ID of the connection.
    */
    'id'?: string;
    /**
    * `connection`.
    */
    'type'?: string;
    /**
    * The name of this connection.
    */
    'name'?: string;
    /**
    * Whether this connection is currently in use. Connections can be deactivated to allow for them to be kept around and re-activated at a later date.
    */
    'active'?: boolean;
    'definition'?: ConnectionDefinition;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "definition",
            "baseName": "definition",
            "type": "ConnectionDefinition"
        }    ];

    static getAttributeTypeMap() {
        return Connection.attributeTypeMap;
    }
}

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
import { ThreeDSecureData } from './threeDSecureData';
import { ThreeDSecureDataV2AllOf } from './threeDSecureDataV2AllOf';

export class ThreeDSecureDataV2 {
    /**
    * The cardholder authentication value or AAV.
    */
    'cavv': string;
    /**
    * The electronic commerce indicator for the 3DS transaction.
    */
    'eci': string;
    /**
    * The version of 3-D Secure that was used.
    */
    'version': string;
    /**
    * The transaction status received as part of the authentication request.
    */
    'directoryResponse': ThreeDSecureDataV2.DirectoryResponseEnum;
    /**
    * The transaction status after a the 3DS challenge. This will be null in case of a frictionless 3DS flow.
    */
    'authenticationResponse'?: ThreeDSecureDataV2.AuthenticationResponseEnum;
    /**
    * The transaction identifier.
    */
    'directoryTransactionId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cavv",
            "baseName": "cavv",
            "type": "string"
        },
        {
            "name": "eci",
            "baseName": "eci",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        },
        {
            "name": "directoryResponse",
            "baseName": "directory_response",
            "type": "ThreeDSecureDataV2.DirectoryResponseEnum"
        },
        {
            "name": "authenticationResponse",
            "baseName": "authentication_response",
            "type": "ThreeDSecureDataV2.AuthenticationResponseEnum"
        },
        {
            "name": "directoryTransactionId",
            "baseName": "directory_transaction_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ThreeDSecureDataV2.attributeTypeMap;
    }
}

export namespace ThreeDSecureDataV2 {
    export enum DirectoryResponseEnum {
        C = <any> 'C',
        Y = <any> 'Y',
        A = <any> 'A',
        N = <any> 'N',
        R = <any> 'R',
        U = <any> 'U'
    }
    export enum AuthenticationResponseEnum {
        Y = <any> 'Y',
        A = <any> 'A',
        N = <any> 'N',
        R = <any> 'R',
        U = <any> 'U'
    }
}

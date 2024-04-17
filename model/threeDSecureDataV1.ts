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
import { ThreeDSecureDataV1AllOf } from './threeDSecureDataV1AllOf';

export class ThreeDSecureDataV1 {
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
    * For 3-D Secure version 1, the enrolment response. For 3-D Secure version , the transaction status from the `ARes`.
    */
    'directoryResponse': string;
    /**
    * The scheme/brand of the card that is used for 3-D Secure.
    */
    'scheme'?: ThreeDSecureDataV1.SchemeEnum;
    /**
    * The response for the 3DS authentication call.
    */
    'authenticationResponse': string;
    /**
    * The CAVV algorithm used.
    */
    'cavvAlgorithm': string;
    /**
    * The transaction identifier.
    */
    'xid': string;

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
            "type": "string"
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "ThreeDSecureDataV1.SchemeEnum"
        },
        {
            "name": "authenticationResponse",
            "baseName": "authentication_response",
            "type": "string"
        },
        {
            "name": "cavvAlgorithm",
            "baseName": "cavv_algorithm",
            "type": "string"
        },
        {
            "name": "xid",
            "baseName": "xid",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ThreeDSecureDataV1.attributeTypeMap;
    }
}

export namespace ThreeDSecureDataV1 {
    export enum SchemeEnum {
        Accel = <any> 'accel',
        Amex = <any> 'amex',
        Bancontact = <any> 'bancontact',
        CarteBancaire = <any> 'carte-bancaire',
        Cirrus = <any> 'cirrus',
        Culiance = <any> 'culiance',
        Dankort = <any> 'dankort',
        DinersClub = <any> 'diners-club',
        Discover = <any> 'discover',
        EftposAustralia = <any> 'eftpos-australia',
        Elo = <any> 'elo',
        Hipercard = <any> 'hipercard',
        Jcb = <any> 'jcb',
        Maestro = <any> 'maestro',
        Mastercard = <any> 'mastercard',
        Mir = <any> 'mir',
        Nyce = <any> 'nyce',
        Other = <any> 'other',
        Pulse = <any> 'pulse',
        Rupay = <any> 'rupay',
        Star = <any> 'star',
        Uatp = <any> 'uatp',
        Unionpay = <any> 'unionpay',
        Visa = <any> 'visa',
        Null = <any> 'null'
    }
}

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
* Details to register a new Checkout Session payment method.
*/
export class CheckoutSessionRequest {
    /**
    * `checkout-session`.
    */
    'method': CheckoutSessionRequest.MethodEnum;
    /**
    * The ID of the Checkout Session.
    */
    'id': string;
    /**
    * The redirect URL to redirect a buyer to after they have authorized their transaction or payment method. This only applies to payment methods that require buyer approval.
    */
    'redirectUrl'?: string | null;
    /**
    * An external identifier that can be used to match the card against your own records.
    */
    'externalIdentifier'?: string | null;
    /**
    * The ID of the buyer to associate this payment method to. If this field is provided then the `buyer_external_identifier` field needs to be unset.
    */
    'buyerId'?: string;
    /**
    * The `external_identifier` of the buyer to associate this payment method to. If this field is provided then the `buyer_id` field needs to be unset.
    */
    'buyerExternalIdentifier'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "method",
            "baseName": "method",
            "type": "CheckoutSessionRequest.MethodEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "redirectUrl",
            "baseName": "redirect_url",
            "type": "string"
        },
        {
            "name": "externalIdentifier",
            "baseName": "external_identifier",
            "type": "string"
        },
        {
            "name": "buyerId",
            "baseName": "buyer_id",
            "type": "string"
        },
        {
            "name": "buyerExternalIdentifier",
            "baseName": "buyer_external_identifier",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutSessionRequest.attributeTypeMap;
    }
}

export namespace CheckoutSessionRequest {
    export enum MethodEnum {
        CheckoutSession = <any> 'checkout-session'
    }
}

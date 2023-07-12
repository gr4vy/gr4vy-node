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
* Card scheme conditions with a name, operator, and value.
*/
export class FlowCardSchemeCondition {
    /**
    * The type of match made for this rule.
    */
    'name': FlowCardSchemeCondition.NameEnum;
    /**
    * The comparison to make on the `value`.
    */
    'operator': FlowCardSchemeCondition.OperatorEnum;
    /**
    * Card scheme(s) to compare the transaction to.
    */
    'value': Array<FlowCardSchemeCondition.ValueEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "FlowCardSchemeCondition.NameEnum"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "FlowCardSchemeCondition.OperatorEnum"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "Array<FlowCardSchemeCondition.ValueEnum>"
        }    ];

    static getAttributeTypeMap() {
        return FlowCardSchemeCondition.attributeTypeMap;
    }
}

export namespace FlowCardSchemeCondition {
    export enum NameEnum {
        CardScheme = <any> 'card_scheme'
    }
    export enum OperatorEnum {
        OneOf = <any> 'is_one_of',
        NotOneOf = <any> 'is_not_one_of'
    }
    export enum ValueEnum {
        Amex = <any> 'amex',
        Dankort = <any> 'dankort',
        DinersClub = <any> 'diners-club',
        Discover = <any> 'discover',
        EftposAustralia = <any> 'eftpos-australia',
        Elo = <any> 'elo',
        Jcb = <any> 'jcb',
        Maestro = <any> 'maestro',
        Mastercard = <any> 'mastercard',
        Rupay = <any> 'rupay',
        Unionpay = <any> 'unionpay',
        Visa = <any> 'visa',
        Other = <any> 'other'
    }
}

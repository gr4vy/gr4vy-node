/**
 * Gr4vy API (Beta)
 * Welcome to the Gr4vy API reference documentation. Our API is still very much a work in product and subject to change.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@gr4vy.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* Part of a rule that matches text fields. It defines the condition under which this rule applies.
*/
export class CardRuleTextCondition {
    /**
    * `text`.
    */
    'match': CardRuleTextCondition.MatchEnum;
    /**
    * The transaction field to filter by.
    */
    'key': CardRuleTextCondition.KeyEnum;
    /**
    * The comparison to make to `value` property.
    */
    'operator': CardRuleTextCondition.OperatorEnum;
    /**
    * The values to compare the `key` to.
    */
    'values': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "match",
            "baseName": "match",
            "type": "CardRuleTextCondition.MatchEnum"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "CardRuleTextCondition.KeyEnum"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "CardRuleTextCondition.OperatorEnum"
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return CardRuleTextCondition.attributeTypeMap;
    }
}

export namespace CardRuleTextCondition {
    export enum MatchEnum {
        Text = <any> 'text'
    }
    export enum KeyEnum {
        Currency = <any> 'currency',
        CardType = <any> 'card_type'
    }
    export enum OperatorEnum {
        In = <any> 'IN',
        NotIn = <any> 'NOT IN'
    }
}
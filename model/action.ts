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
import { FlowRuleBooleanOutcome } from './flowRuleBooleanOutcome';
import { FlowRuleMethodOutcome } from './flowRuleMethodOutcome';
import { FlowRuleServiceOutcome } from './flowRuleServiceOutcome';

/**
* An action taken for a transaction.
*/
export class Action {
    /**
    * The type of this resource. Is always `action`.
    */
    'type'?: Action.TypeEnum;
    /**
    * The identifier for the action.
    */
    'id'?: Action.IdEnum;
    /**
    * The name of the Flow.
    */
    'flow'?: Action.FlowEnum;
    /**
    * The unique ID of the rule triggered.
    */
    'ruleId'?: string;
    /**
    * The date and time when this action was created.
    */
    'createdAt'?: Date;
    /**
    * The outcome of the action.
    */
    'outcome'?: FlowRuleBooleanOutcome | FlowRuleMethodOutcome | FlowRuleServiceOutcome | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "Action.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "Action.IdEnum"
        },
        {
            "name": "flow",
            "baseName": "flow",
            "type": "Action.FlowEnum"
        },
        {
            "name": "ruleId",
            "baseName": "rule_id",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "outcome",
            "baseName": "outcome",
            "type": "FlowRuleBooleanOutcome | FlowRuleMethodOutcome | FlowRuleServiceOutcome"
        }    ];

    static getAttributeTypeMap() {
        return Action.attributeTypeMap;
    }
}

export namespace Action {
    export enum TypeEnum {
        Action = <any> 'action'
    }
    export enum IdEnum {
        DeclineEarly = <any> 'decline-early',
        RouteTransaction = <any> 'route-transaction',
        Skip3ds = <any> 'skip-3ds'
    }
    export enum FlowEnum {
        Checkout = <any> 'checkout',
        CardTransaction = <any> 'card-transaction',
        RedirectTransaction = <any> 'redirect-transaction'
    }
}

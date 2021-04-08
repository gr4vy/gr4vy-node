import localVarRequest from 'request';

export * from './buyer';
export * from './buyerRequest';
export * from './buyerUpdate';
export * from './buyers';
export * from './card';
export * from './cardDetails';
export * from './cardRequest';
export * from './cardRule';
export * from './cardRuleNumberCondition';
export * from './cardRuleRequest';
export * from './cardRuleTextCondition';
export * from './cardRuleUpdate';
export * from './cardRules';
export * from './cardTokenized';
export * from './error400BadRequest';
export * from './error400IncorrectJson';
export * from './error401Unauthorized';
export * from './error404NotFound';
export * from './error404PendingCreation';
export * from './error409DuplicateRecord';
export * from './errorDetail';
export * from './errorGeneric';
export * from './payPal';
export * from './payPalDetails';
export * from './payPalRequest';
export * from './paymentMethod';
export * from './paymentMethodDetails';
export * from './paymentMethods';
export * from './paymentMethodsTokenized';
export * from './paymentOption';
export * from './paymentOptions';
export * from './paymentService';
export * from './paymentServiceDefinition';
export * from './paymentServiceDefinitionFields';
export * from './paymentServiceDefinitions';
export * from './paymentServiceRequest';
export * from './paymentServiceUpdate';
export * from './paymentServiceUpdateFields';
export * from './paymentServices';
export * from './status';
export * from './statuses';
export * from './tokenizedRequest';
export * from './transaction';
export * from './transactionCaptureRequest';
export * from './transactionPaymentMethodRequest';
export * from './transactionRequest';
export * from './transactions';
export * from './transactionsBatchCaptureRequest';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Buyer } from './buyer';
import { BuyerRequest } from './buyerRequest';
import { BuyerUpdate } from './buyerUpdate';
import { Buyers } from './buyers';
import { Card } from './card';
import { CardDetails } from './cardDetails';
import { CardRequest } from './cardRequest';
import { CardRule } from './cardRule';
import { CardRuleNumberCondition } from './cardRuleNumberCondition';
import { CardRuleRequest } from './cardRuleRequest';
import { CardRuleTextCondition } from './cardRuleTextCondition';
import { CardRuleUpdate } from './cardRuleUpdate';
import { CardRules } from './cardRules';
import { CardTokenized } from './cardTokenized';
import { Error400BadRequest } from './error400BadRequest';
import { Error400IncorrectJson } from './error400IncorrectJson';
import { Error401Unauthorized } from './error401Unauthorized';
import { Error404NotFound } from './error404NotFound';
import { Error404PendingCreation } from './error404PendingCreation';
import { Error409DuplicateRecord } from './error409DuplicateRecord';
import { ErrorDetail } from './errorDetail';
import { ErrorGeneric } from './errorGeneric';
import { PayPal } from './payPal';
import { PayPalDetails } from './payPalDetails';
import { PayPalRequest } from './payPalRequest';
import { PaymentMethod } from './paymentMethod';
import { PaymentMethodDetails } from './paymentMethodDetails';
import { PaymentMethods } from './paymentMethods';
import { PaymentMethodsTokenized } from './paymentMethodsTokenized';
import { PaymentOption } from './paymentOption';
import { PaymentOptions } from './paymentOptions';
import { PaymentService } from './paymentService';
import { PaymentServiceDefinition } from './paymentServiceDefinition';
import { PaymentServiceDefinitionFields } from './paymentServiceDefinitionFields';
import { PaymentServiceDefinitions } from './paymentServiceDefinitions';
import { PaymentServiceRequest } from './paymentServiceRequest';
import { PaymentServiceUpdate } from './paymentServiceUpdate';
import { PaymentServiceUpdateFields } from './paymentServiceUpdateFields';
import { PaymentServices } from './paymentServices';
import { Status } from './status';
import { Statuses } from './statuses';
import { TokenizedRequest } from './tokenizedRequest';
import { Transaction } from './transaction';
import { TransactionCaptureRequest } from './transactionCaptureRequest';
import { TransactionPaymentMethodRequest } from './transactionPaymentMethodRequest';
import { TransactionRequest } from './transactionRequest';
import { Transactions } from './transactions';
import { TransactionsBatchCaptureRequest } from './transactionsBatchCaptureRequest';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "Buyer.TypeEnum": Buyer.TypeEnum,
        "Card.TypeEnum": Card.TypeEnum,
        "Card.StatusEnum": Card.StatusEnum,
        "Card.MethodEnum": Card.MethodEnum,
        "Card.EnvironmentEnum": Card.EnvironmentEnum,
        "CardDetails.SchemeEnum": CardDetails.SchemeEnum,
        "CardRequest.MethodEnum": CardRequest.MethodEnum,
        "CardRequest.EnvironmentEnum": CardRequest.EnvironmentEnum,
        "CardRule.TypeEnum": CardRule.TypeEnum,
        "CardRule.EnvironmentEnum": CardRule.EnvironmentEnum,
        "CardRule.UnprocessableFallbackStrategyEnum": CardRule.UnprocessableFallbackStrategyEnum,
        "CardRule.InvalidRuleFallbackStrategyEnum": CardRule.InvalidRuleFallbackStrategyEnum,
        "CardRuleNumberCondition.MatchEnum": CardRuleNumberCondition.MatchEnum,
        "CardRuleNumberCondition.KeyEnum": CardRuleNumberCondition.KeyEnum,
        "CardRuleNumberCondition.OperatorEnum": CardRuleNumberCondition.OperatorEnum,
        "CardRuleRequest.EnvironmentEnum": CardRuleRequest.EnvironmentEnum,
        "CardRuleRequest.UnprocessableFallbackStrategyEnum": CardRuleRequest.UnprocessableFallbackStrategyEnum,
        "CardRuleRequest.InvalidRuleFallbackStrategyEnum": CardRuleRequest.InvalidRuleFallbackStrategyEnum,
        "CardRuleTextCondition.MatchEnum": CardRuleTextCondition.MatchEnum,
        "CardRuleTextCondition.KeyEnum": CardRuleTextCondition.KeyEnum,
        "CardRuleTextCondition.OperatorEnum": CardRuleTextCondition.OperatorEnum,
        "CardRuleUpdate.EnvironmentEnum": CardRuleUpdate.EnvironmentEnum,
        "CardRuleUpdate.UnprocessableFallbackStrategyEnum": CardRuleUpdate.UnprocessableFallbackStrategyEnum,
        "CardRuleUpdate.InvalidRuleFallbackStrategyEnum": CardRuleUpdate.InvalidRuleFallbackStrategyEnum,
        "CardTokenized.TypeEnum": CardTokenized.TypeEnum,
        "CardTokenized.MethodEnum": CardTokenized.MethodEnum,
        "Error400BadRequest.TypeEnum": Error400BadRequest.TypeEnum,
        "Error400BadRequest.CodeEnum": Error400BadRequest.CodeEnum,
        "Error400BadRequest.StatusEnum": Error400BadRequest.StatusEnum,
        "Error400IncorrectJson.TypeEnum": Error400IncorrectJson.TypeEnum,
        "Error400IncorrectJson.CodeEnum": Error400IncorrectJson.CodeEnum,
        "Error400IncorrectJson.StatusEnum": Error400IncorrectJson.StatusEnum,
        "Error401Unauthorized.TypeEnum": Error401Unauthorized.TypeEnum,
        "Error401Unauthorized.CodeEnum": Error401Unauthorized.CodeEnum,
        "Error401Unauthorized.StatusEnum": Error401Unauthorized.StatusEnum,
        "Error401Unauthorized.MessageEnum": Error401Unauthorized.MessageEnum,
        "Error404NotFound.TypeEnum": Error404NotFound.TypeEnum,
        "Error404NotFound.CodeEnum": Error404NotFound.CodeEnum,
        "Error404NotFound.StatusEnum": Error404NotFound.StatusEnum,
        "Error404NotFound.MessageEnum": Error404NotFound.MessageEnum,
        "Error404PendingCreation.TypeEnum": Error404PendingCreation.TypeEnum,
        "Error404PendingCreation.CodeEnum": Error404PendingCreation.CodeEnum,
        "Error404PendingCreation.StatusEnum": Error404PendingCreation.StatusEnum,
        "Error404PendingCreation.MessageEnum": Error404PendingCreation.MessageEnum,
        "Error409DuplicateRecord.TypeEnum": Error409DuplicateRecord.TypeEnum,
        "Error409DuplicateRecord.CodeEnum": Error409DuplicateRecord.CodeEnum,
        "Error409DuplicateRecord.StatusEnum": Error409DuplicateRecord.StatusEnum,
        "ErrorDetail.LocationEnum": ErrorDetail.LocationEnum,
        "ErrorGeneric.TypeEnum": ErrorGeneric.TypeEnum,
        "PayPal.TypeEnum": PayPal.TypeEnum,
        "PayPal.StatusEnum": PayPal.StatusEnum,
        "PayPal.MethodEnum": PayPal.MethodEnum,
        "PayPal.EnvironmentEnum": PayPal.EnvironmentEnum,
        "PayPalRequest.MethodEnum": PayPalRequest.MethodEnum,
        "PaymentMethod.TypeEnum": PaymentMethod.TypeEnum,
        "PaymentMethod.StatusEnum": PaymentMethod.StatusEnum,
        "PaymentMethod.MethodEnum": PaymentMethod.MethodEnum,
        "PaymentMethodDetails.SchemeEnum": PaymentMethodDetails.SchemeEnum,
        "PaymentOption.TypeEnum": PaymentOption.TypeEnum,
        "PaymentOption.MethodEnum": PaymentOption.MethodEnum,
        "PaymentService.TypeEnum": PaymentService.TypeEnum,
        "PaymentService.MethodEnum": PaymentService.MethodEnum,
        "PaymentService.StatusEnum": PaymentService.StatusEnum,
        "PaymentService.CredentialsModeEnum": PaymentService.CredentialsModeEnum,
        "PaymentService.EnvironmentsEnum": PaymentService.EnvironmentsEnum,
        "PaymentServiceDefinition.MethodEnum": PaymentServiceDefinition.MethodEnum,
        "PaymentServiceDefinitionFields.FormatEnum": PaymentServiceDefinitionFields.FormatEnum,
        "PaymentServiceRequest.CredentialsModeEnum": PaymentServiceRequest.CredentialsModeEnum,
        "PaymentServiceRequest.EnvironmentsEnum": PaymentServiceRequest.EnvironmentsEnum,
        "PaymentServiceUpdate.CredentialsModeEnum": PaymentServiceUpdate.CredentialsModeEnum,
        "PaymentServiceUpdate.EnvironmentsEnum": PaymentServiceUpdate.EnvironmentsEnum,
        "Status.TypeEnum": Status.TypeEnum,
        "Status.StatusEnum": Status.StatusEnum,
        "Status.ResourceTypeEnum": Status.ResourceTypeEnum,
        "TokenizedRequest.MethodEnum": TokenizedRequest.MethodEnum,
        "Transaction.TypeEnum": Transaction.TypeEnum,
        "Transaction.StatusEnum": Transaction.StatusEnum,
        "Transaction.EnvironmentEnum": Transaction.EnvironmentEnum,
        "TransactionPaymentMethodRequest.MethodEnum": TransactionPaymentMethodRequest.MethodEnum,
        "TransactionRequest.IntentEnum": TransactionRequest.IntentEnum,
        "TransactionRequest.EnvironmentEnum": TransactionRequest.EnvironmentEnum,
}

let typeMap: {[index: string]: any} = {
    "Buyer": Buyer,
    "BuyerRequest": BuyerRequest,
    "BuyerUpdate": BuyerUpdate,
    "Buyers": Buyers,
    "Card": Card,
    "CardDetails": CardDetails,
    "CardRequest": CardRequest,
    "CardRule": CardRule,
    "CardRuleNumberCondition": CardRuleNumberCondition,
    "CardRuleRequest": CardRuleRequest,
    "CardRuleTextCondition": CardRuleTextCondition,
    "CardRuleUpdate": CardRuleUpdate,
    "CardRules": CardRules,
    "CardTokenized": CardTokenized,
    "Error400BadRequest": Error400BadRequest,
    "Error400IncorrectJson": Error400IncorrectJson,
    "Error401Unauthorized": Error401Unauthorized,
    "Error404NotFound": Error404NotFound,
    "Error404PendingCreation": Error404PendingCreation,
    "Error409DuplicateRecord": Error409DuplicateRecord,
    "ErrorDetail": ErrorDetail,
    "ErrorGeneric": ErrorGeneric,
    "PayPal": PayPal,
    "PayPalDetails": PayPalDetails,
    "PayPalRequest": PayPalRequest,
    "PaymentMethod": PaymentMethod,
    "PaymentMethodDetails": PaymentMethodDetails,
    "PaymentMethods": PaymentMethods,
    "PaymentMethodsTokenized": PaymentMethodsTokenized,
    "PaymentOption": PaymentOption,
    "PaymentOptions": PaymentOptions,
    "PaymentService": PaymentService,
    "PaymentServiceDefinition": PaymentServiceDefinition,
    "PaymentServiceDefinitionFields": PaymentServiceDefinitionFields,
    "PaymentServiceDefinitions": PaymentServiceDefinitions,
    "PaymentServiceRequest": PaymentServiceRequest,
    "PaymentServiceUpdate": PaymentServiceUpdate,
    "PaymentServiceUpdateFields": PaymentServiceUpdateFields,
    "PaymentServices": PaymentServices,
    "Status": Status,
    "Statuses": Statuses,
    "TokenizedRequest": TokenizedRequest,
    "Transaction": Transaction,
    "TransactionCaptureRequest": TransactionCaptureRequest,
    "TransactionPaymentMethodRequest": TransactionPaymentMethodRequest,
    "TransactionRequest": TransactionRequest,
    "Transactions": Transactions,
    "TransactionsBatchCaptureRequest": TransactionsBatchCaptureRequest,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);

import localVarRequest from 'request';

export * from './address';
export * from './antiFraudServiceCreate';
export * from './antiFraudServiceUpdate';
export * from './antiFraudServiceUpdateFields';
export * from './apiLog';
export * from './apiLogResponseBody';
export * from './apiLogResponseBodyDetails';
export * from './apiLogs';
export * from './applePayRequest';
export * from './applePaySessionRequest';
export * from './auditLog';
export * from './auditLogResource';
export * from './auditLogUser';
export * from './auditLogs';
export * from './billingDetails';
export * from './billingDetailsRequest';
export * from './billingDetailsUpdateRequest';
export * from './browserInfo';
export * from './buyer';
export * from './buyerRequest';
export * from './buyerSnapshot';
export * from './buyerUpdate';
export * from './buyers';
export * from './cardDetails';
export * from './cardRequest';
export * from './cardSchemeDefinition';
export * from './cardSchemeDefinitions';
export * from './cartItem';
export * from './checkoutSession';
export * from './checkoutSessionRequest';
export * from './checkoutSessionSecureFieldsUpdate';
export * from './connection';
export * from './connectionDefinition';
export * from './connectionDefinitions';
export * from './connectionOptions';
export * from './connectionOptionsCybersourceAntiFraud';
export * from './connections';
export * from './digitalWallet';
export * from './digitalWalletRequest';
export * from './digitalWalletUpdate';
export * from './digitalWallets';
export * from './error400BadRequest';
export * from './error400IncorrectJson';
export * from './error400InvalidCredentials';
export * from './error401Unauthorized';
export * from './error403Forbidden';
export * from './error404NotFound';
export * from './error404PendingCreation';
export * from './error409DuplicateRecord';
export * from './errorDetail';
export * from './errorGeneric';
export * from './googlePayRequest';
export * from './googlePayRequestAssuranceDetails';
export * from './googlePaySessionRequest';
export * from './paymentMethod';
export * from './paymentMethodDefinition';
export * from './paymentMethodDefinitions';
export * from './paymentMethodDetailsCard';
export * from './paymentMethodRequest';
export * from './paymentMethodSnapshot';
export * from './paymentMethodToken';
export * from './paymentMethodTokenized';
export * from './paymentMethodTokens';
export * from './paymentMethods';
export * from './paymentMethodsTokenized';
export * from './paymentOption';
export * from './paymentOptionApprovalUI';
export * from './paymentOptionContext';
export * from './paymentOptions';
export * from './paymentService';
export * from './paymentServiceDefinition';
export * from './paymentServiceDefinitionConfiguration';
export * from './paymentServiceDefinitionFields';
export * from './paymentServiceDefinitionSupportedFeatures';
export * from './paymentServiceDefinitions';
export * from './paymentServiceFields';
export * from './paymentServiceRequest';
export * from './paymentServiceRequestAllOf';
export * from './paymentServiceSnapshot';
export * from './paymentServiceUpdate';
export * from './paymentServiceUpdateFields';
export * from './paymentServices';
export * from './redirectRequest';
export * from './refund';
export * from './refunds';
export * from './report';
export * from './reportCreate';
export * from './reportExecution';
export * from './reportExecutionSummary';
export * from './reportExecutionSummaryContext';
export * from './reportExecutionUrl';
export * from './reportExecutions';
export * from './reportSpec';
export * from './reportSummary';
export * from './reportUpdate';
export * from './reports';
export * from './requiredFields';
export * from './requiredFieldsAddress';
export * from './resetPasswordRequest';
export * from './role';
export * from './roleAssignment';
export * from './roleAssignmentAssignee';
export * from './roleAssignmentRequest';
export * from './roleAssignmentRequestAssignee';
export * from './roleAssignmentRequestRole';
export * from './roleAssignments';
export * from './rolePermissions';
export * from './roles';
export * from './setPasswordRequest';
export * from './shippingDetail';
export * from './shippingDetailRequest';
export * from './shippingDetailUpdateRequest';
export * from './shippingDetails';
export * from './statementDescriptor';
export * from './taxId';
export * from './threeDSecureData';
export * from './threeDSecureDataV1';
export * from './threeDSecureDataV1AllOf';
export * from './threeDSecureDataV1V2';
export * from './threeDSecureDataV2';
export * from './threeDSecureDataV2AllOf';
export * from './threeDSecureSummary';
export * from './tokenizedRequest';
export * from './transaction';
export * from './transactionCaptureRequest';
export * from './transactionPaymentMethodRequest';
export * from './transactionRefundRequest';
export * from './transactionRequest';
export * from './transactionStatusSummary';
export * from './transactionSummary';
export * from './transactions';
export * from './transactionsBatchCaptureRequest';
export * from './userRequest';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Address } from './address';
import { AntiFraudServiceCreate } from './antiFraudServiceCreate';
import { AntiFraudServiceUpdate } from './antiFraudServiceUpdate';
import { AntiFraudServiceUpdateFields } from './antiFraudServiceUpdateFields';
import { ApiLog } from './apiLog';
import { ApiLogResponseBody } from './apiLogResponseBody';
import { ApiLogResponseBodyDetails } from './apiLogResponseBodyDetails';
import { ApiLogs } from './apiLogs';
import { ApplePayRequest } from './applePayRequest';
import { ApplePaySessionRequest } from './applePaySessionRequest';
import { AuditLog } from './auditLog';
import { AuditLogResource } from './auditLogResource';
import { AuditLogUser } from './auditLogUser';
import { AuditLogs } from './auditLogs';
import { BillingDetails } from './billingDetails';
import { BillingDetailsRequest } from './billingDetailsRequest';
import { BillingDetailsUpdateRequest } from './billingDetailsUpdateRequest';
import { BrowserInfo } from './browserInfo';
import { Buyer } from './buyer';
import { BuyerRequest } from './buyerRequest';
import { BuyerSnapshot } from './buyerSnapshot';
import { BuyerUpdate } from './buyerUpdate';
import { Buyers } from './buyers';
import { CardDetails } from './cardDetails';
import { CardRequest } from './cardRequest';
import { CardSchemeDefinition } from './cardSchemeDefinition';
import { CardSchemeDefinitions } from './cardSchemeDefinitions';
import { CartItem } from './cartItem';
import { CheckoutSession } from './checkoutSession';
import { CheckoutSessionRequest } from './checkoutSessionRequest';
import { CheckoutSessionSecureFieldsUpdate } from './checkoutSessionSecureFieldsUpdate';
import { Connection } from './connection';
import { ConnectionDefinition } from './connectionDefinition';
import { ConnectionDefinitions } from './connectionDefinitions';
import { ConnectionOptions } from './connectionOptions';
import { ConnectionOptionsCybersourceAntiFraud } from './connectionOptionsCybersourceAntiFraud';
import { Connections } from './connections';
import { DigitalWallet } from './digitalWallet';
import { DigitalWalletRequest } from './digitalWalletRequest';
import { DigitalWalletUpdate } from './digitalWalletUpdate';
import { DigitalWallets } from './digitalWallets';
import { Error400BadRequest } from './error400BadRequest';
import { Error400IncorrectJson } from './error400IncorrectJson';
import { Error400InvalidCredentials } from './error400InvalidCredentials';
import { Error401Unauthorized } from './error401Unauthorized';
import { Error403Forbidden } from './error403Forbidden';
import { Error404NotFound } from './error404NotFound';
import { Error404PendingCreation } from './error404PendingCreation';
import { Error409DuplicateRecord } from './error409DuplicateRecord';
import { ErrorDetail } from './errorDetail';
import { ErrorGeneric } from './errorGeneric';
import { GooglePayRequest } from './googlePayRequest';
import { GooglePayRequestAssuranceDetails } from './googlePayRequestAssuranceDetails';
import { GooglePaySessionRequest } from './googlePaySessionRequest';
import { PaymentMethod } from './paymentMethod';
import { PaymentMethodDefinition } from './paymentMethodDefinition';
import { PaymentMethodDefinitions } from './paymentMethodDefinitions';
import { PaymentMethodDetailsCard } from './paymentMethodDetailsCard';
import { PaymentMethodRequest } from './paymentMethodRequest';
import { PaymentMethodSnapshot } from './paymentMethodSnapshot';
import { PaymentMethodToken } from './paymentMethodToken';
import { PaymentMethodTokenized } from './paymentMethodTokenized';
import { PaymentMethodTokens } from './paymentMethodTokens';
import { PaymentMethods } from './paymentMethods';
import { PaymentMethodsTokenized } from './paymentMethodsTokenized';
import { PaymentOption } from './paymentOption';
import { PaymentOptionApprovalUI } from './paymentOptionApprovalUI';
import { PaymentOptionContext } from './paymentOptionContext';
import { PaymentOptions } from './paymentOptions';
import { PaymentService } from './paymentService';
import { PaymentServiceDefinition } from './paymentServiceDefinition';
import { PaymentServiceDefinitionConfiguration } from './paymentServiceDefinitionConfiguration';
import { PaymentServiceDefinitionFields } from './paymentServiceDefinitionFields';
import { PaymentServiceDefinitionSupportedFeatures } from './paymentServiceDefinitionSupportedFeatures';
import { PaymentServiceDefinitions } from './paymentServiceDefinitions';
import { PaymentServiceFields } from './paymentServiceFields';
import { PaymentServiceRequest } from './paymentServiceRequest';
import { PaymentServiceRequestAllOf } from './paymentServiceRequestAllOf';
import { PaymentServiceSnapshot } from './paymentServiceSnapshot';
import { PaymentServiceUpdate } from './paymentServiceUpdate';
import { PaymentServiceUpdateFields } from './paymentServiceUpdateFields';
import { PaymentServices } from './paymentServices';
import { RedirectRequest } from './redirectRequest';
import { Refund } from './refund';
import { Refunds } from './refunds';
import { Report } from './report';
import { ReportCreate } from './reportCreate';
import { ReportExecution } from './reportExecution';
import { ReportExecutionSummary } from './reportExecutionSummary';
import { ReportExecutionSummaryContext } from './reportExecutionSummaryContext';
import { ReportExecutionUrl } from './reportExecutionUrl';
import { ReportExecutions } from './reportExecutions';
import { ReportSpec } from './reportSpec';
import { ReportSummary } from './reportSummary';
import { ReportUpdate } from './reportUpdate';
import { Reports } from './reports';
import { RequiredFields } from './requiredFields';
import { RequiredFieldsAddress } from './requiredFieldsAddress';
import { ResetPasswordRequest } from './resetPasswordRequest';
import { Role } from './role';
import { RoleAssignment } from './roleAssignment';
import { RoleAssignmentAssignee } from './roleAssignmentAssignee';
import { RoleAssignmentRequest } from './roleAssignmentRequest';
import { RoleAssignmentRequestAssignee } from './roleAssignmentRequestAssignee';
import { RoleAssignmentRequestRole } from './roleAssignmentRequestRole';
import { RoleAssignments } from './roleAssignments';
import { RolePermissions } from './rolePermissions';
import { Roles } from './roles';
import { SetPasswordRequest } from './setPasswordRequest';
import { ShippingDetail } from './shippingDetail';
import { ShippingDetailRequest } from './shippingDetailRequest';
import { ShippingDetailUpdateRequest } from './shippingDetailUpdateRequest';
import { ShippingDetails } from './shippingDetails';
import { StatementDescriptor } from './statementDescriptor';
import { TaxId } from './taxId';
import { ThreeDSecureData } from './threeDSecureData';
import { ThreeDSecureDataV1 } from './threeDSecureDataV1';
import { ThreeDSecureDataV1AllOf } from './threeDSecureDataV1AllOf';
import { ThreeDSecureDataV1V2 } from './threeDSecureDataV1V2';
import { ThreeDSecureDataV2 } from './threeDSecureDataV2';
import { ThreeDSecureDataV2AllOf } from './threeDSecureDataV2AllOf';
import { ThreeDSecureSummary } from './threeDSecureSummary';
import { TokenizedRequest } from './tokenizedRequest';
import { Transaction } from './transaction';
import { TransactionCaptureRequest } from './transactionCaptureRequest';
import { TransactionPaymentMethodRequest } from './transactionPaymentMethodRequest';
import { TransactionRefundRequest } from './transactionRefundRequest';
import { TransactionRequest } from './transactionRequest';
import { TransactionStatusSummary } from './transactionStatusSummary';
import { TransactionSummary } from './transactionSummary';
import { Transactions } from './transactions';
import { TransactionsBatchCaptureRequest } from './transactionsBatchCaptureRequest';
import { UserRequest } from './userRequest';

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
        "AntiFraudServiceCreate.AntiFraudServiceDefinitionIdEnum": AntiFraudServiceCreate.AntiFraudServiceDefinitionIdEnum,
        "AntiFraudServiceUpdate.AntiFraudServiceDefinitionIdEnum": AntiFraudServiceUpdate.AntiFraudServiceDefinitionIdEnum,
        "ApiLog.TypeEnum": ApiLog.TypeEnum,
        "ApplePayRequest.MethodEnum": ApplePayRequest.MethodEnum,
        "AuditLog.TypeEnum": AuditLog.TypeEnum,
        "AuditLog.ActionEnum": AuditLog.ActionEnum,
        "BillingDetails.TypeEnum": BillingDetails.TypeEnum,
        "BrowserInfo.UserDeviceEnum": BrowserInfo.UserDeviceEnum,
        "Buyer.TypeEnum": Buyer.TypeEnum,
        "BuyerSnapshot.TypeEnum": BuyerSnapshot.TypeEnum,
        "CardDetails.TypeEnum": CardDetails.TypeEnum,
        "CardDetails.CardTypeEnum": CardDetails.CardTypeEnum,
        "CardRequest.MethodEnum": CardRequest.MethodEnum,
        "CardSchemeDefinition.TypeEnum": CardSchemeDefinition.TypeEnum,
        "CartItem.ProductTypeEnum": CartItem.ProductTypeEnum,
        "CheckoutSession.TypeEnum": CheckoutSession.TypeEnum,
        "CheckoutSessionRequest.MethodEnum": CheckoutSessionRequest.MethodEnum,
        "ConnectionDefinition.GroupEnum": ConnectionDefinition.GroupEnum,
        "ConnectionDefinition.CategoryEnum": ConnectionDefinition.CategoryEnum,
        "DigitalWallet.TypeEnum": DigitalWallet.TypeEnum,
        "DigitalWallet.ProviderEnum": DigitalWallet.ProviderEnum,
        "DigitalWalletRequest.ProviderEnum": DigitalWalletRequest.ProviderEnum,
        "Error400BadRequest.TypeEnum": Error400BadRequest.TypeEnum,
        "Error400BadRequest.CodeEnum": Error400BadRequest.CodeEnum,
        "Error400BadRequest.StatusEnum": Error400BadRequest.StatusEnum,
        "Error400IncorrectJson.TypeEnum": Error400IncorrectJson.TypeEnum,
        "Error400IncorrectJson.CodeEnum": Error400IncorrectJson.CodeEnum,
        "Error400IncorrectJson.StatusEnum": Error400IncorrectJson.StatusEnum,
        "Error400InvalidCredentials.TypeEnum": Error400InvalidCredentials.TypeEnum,
        "Error400InvalidCredentials.CodeEnum": Error400InvalidCredentials.CodeEnum,
        "Error400InvalidCredentials.StatusEnum": Error400InvalidCredentials.StatusEnum,
        "Error401Unauthorized.TypeEnum": Error401Unauthorized.TypeEnum,
        "Error401Unauthorized.CodeEnum": Error401Unauthorized.CodeEnum,
        "Error401Unauthorized.StatusEnum": Error401Unauthorized.StatusEnum,
        "Error401Unauthorized.MessageEnum": Error401Unauthorized.MessageEnum,
        "Error403Forbidden.TypeEnum": Error403Forbidden.TypeEnum,
        "Error403Forbidden.CodeEnum": Error403Forbidden.CodeEnum,
        "Error403Forbidden.StatusEnum": Error403Forbidden.StatusEnum,
        "Error403Forbidden.MessageEnum": Error403Forbidden.MessageEnum,
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
        "GooglePayRequest.MethodEnum": GooglePayRequest.MethodEnum,
        "PaymentMethod.TypeEnum": PaymentMethod.TypeEnum,
        "PaymentMethod.StatusEnum": PaymentMethod.StatusEnum,
        "PaymentMethod.ApprovalTargetEnum": PaymentMethod.ApprovalTargetEnum,
        "PaymentMethodDetailsCard.CardTypeEnum": PaymentMethodDetailsCard.CardTypeEnum,
        "PaymentMethodSnapshot.TypeEnum": PaymentMethodSnapshot.TypeEnum,
        "PaymentMethodSnapshot.ApprovalTargetEnum": PaymentMethodSnapshot.ApprovalTargetEnum,
        "PaymentMethodToken.TypeEnum": PaymentMethodToken.TypeEnum,
        "PaymentMethodToken.StatusEnum": PaymentMethodToken.StatusEnum,
        "PaymentMethodTokenized.TypeEnum": PaymentMethodTokenized.TypeEnum,
        "PaymentMethodTokenized.SchemeEnum": PaymentMethodTokenized.SchemeEnum,
        "PaymentMethodTokenized.ApprovalTargetEnum": PaymentMethodTokenized.ApprovalTargetEnum,
        "PaymentOption.TypeEnum": PaymentOption.TypeEnum,
        "PaymentService.TypeEnum": PaymentService.TypeEnum,
        "PaymentService.StatusEnum": PaymentService.StatusEnum,
        "PaymentServiceDefinitionConfiguration.ApprovalUiTargetEnum": PaymentServiceDefinitionConfiguration.ApprovalUiTargetEnum,
        "PaymentServiceDefinitionFields.FormatEnum": PaymentServiceDefinitionFields.FormatEnum,
        "PaymentServiceSnapshot.TypeEnum": PaymentServiceSnapshot.TypeEnum,
        "Refund.TypeEnum": Refund.TypeEnum,
        "Refund.StatusEnum": Refund.StatusEnum,
        "Report.ScheduleEnum": Report.ScheduleEnum,
        "Report.TypeEnum": Report.TypeEnum,
        "ReportCreate.ScheduleEnum": ReportCreate.ScheduleEnum,
        "ReportExecution.TypeEnum": ReportExecution.TypeEnum,
        "ReportExecution.StatusEnum": ReportExecution.StatusEnum,
        "ReportExecutionSummary.TypeEnum": ReportExecutionSummary.TypeEnum,
        "ReportExecutionSummary.StatusEnum": ReportExecutionSummary.StatusEnum,
        "ReportSpec.ModelEnum": ReportSpec.ModelEnum,
        "ReportSummary.TypeEnum": ReportSummary.TypeEnum,
        "Role.TypeEnum": Role.TypeEnum,
        "RoleAssignment.TypeEnum": RoleAssignment.TypeEnum,
        "RoleAssignmentAssignee.TypeEnum": RoleAssignmentAssignee.TypeEnum,
        "RoleAssignmentRequestAssignee.TypeEnum": RoleAssignmentRequestAssignee.TypeEnum,
        "ShippingDetail.TypeEnum": ShippingDetail.TypeEnum,
        "TaxId.KindEnum": TaxId.KindEnum,
        "ThreeDSecureSummary.StatusEnum": ThreeDSecureSummary.StatusEnum,
        "ThreeDSecureSummary.MethodEnum": ThreeDSecureSummary.MethodEnum,
        "TokenizedRequest.MethodEnum": TokenizedRequest.MethodEnum,
        "Transaction.TypeEnum": Transaction.TypeEnum,
        "Transaction.StatusEnum": Transaction.StatusEnum,
        "Transaction.IntentEnum": Transaction.IntentEnum,
        "Transaction.PaymentSourceEnum": Transaction.PaymentSourceEnum,
        "Transaction.AvsResponseCodeEnum": Transaction.AvsResponseCodeEnum,
        "Transaction.CvvResponseCodeEnum": Transaction.CvvResponseCodeEnum,
        "Transaction.MethodEnum": Transaction.MethodEnum,
        "TransactionRequest.IntentEnum": TransactionRequest.IntentEnum,
        "TransactionRequest.PaymentSourceEnum": TransactionRequest.PaymentSourceEnum,
        "TransactionStatusSummary.TypeEnum": TransactionStatusSummary.TypeEnum,
        "TransactionStatusSummary.StatusEnum": TransactionStatusSummary.StatusEnum,
        "TransactionSummary.TypeEnum": TransactionSummary.TypeEnum,
        "TransactionSummary.StatusEnum": TransactionSummary.StatusEnum,
        "TransactionSummary.IntentEnum": TransactionSummary.IntentEnum,
        "TransactionSummary.MethodEnum": TransactionSummary.MethodEnum,
}

let typeMap: {[index: string]: any} = {
    "Address": Address,
    "AntiFraudServiceCreate": AntiFraudServiceCreate,
    "AntiFraudServiceUpdate": AntiFraudServiceUpdate,
    "AntiFraudServiceUpdateFields": AntiFraudServiceUpdateFields,
    "ApiLog": ApiLog,
    "ApiLogResponseBody": ApiLogResponseBody,
    "ApiLogResponseBodyDetails": ApiLogResponseBodyDetails,
    "ApiLogs": ApiLogs,
    "ApplePayRequest": ApplePayRequest,
    "ApplePaySessionRequest": ApplePaySessionRequest,
    "AuditLog": AuditLog,
    "AuditLogResource": AuditLogResource,
    "AuditLogUser": AuditLogUser,
    "AuditLogs": AuditLogs,
    "BillingDetails": BillingDetails,
    "BillingDetailsRequest": BillingDetailsRequest,
    "BillingDetailsUpdateRequest": BillingDetailsUpdateRequest,
    "BrowserInfo": BrowserInfo,
    "Buyer": Buyer,
    "BuyerRequest": BuyerRequest,
    "BuyerSnapshot": BuyerSnapshot,
    "BuyerUpdate": BuyerUpdate,
    "Buyers": Buyers,
    "CardDetails": CardDetails,
    "CardRequest": CardRequest,
    "CardSchemeDefinition": CardSchemeDefinition,
    "CardSchemeDefinitions": CardSchemeDefinitions,
    "CartItem": CartItem,
    "CheckoutSession": CheckoutSession,
    "CheckoutSessionRequest": CheckoutSessionRequest,
    "CheckoutSessionSecureFieldsUpdate": CheckoutSessionSecureFieldsUpdate,
    "Connection": Connection,
    "ConnectionDefinition": ConnectionDefinition,
    "ConnectionDefinitions": ConnectionDefinitions,
    "ConnectionOptions": ConnectionOptions,
    "ConnectionOptionsCybersourceAntiFraud": ConnectionOptionsCybersourceAntiFraud,
    "Connections": Connections,
    "DigitalWallet": DigitalWallet,
    "DigitalWalletRequest": DigitalWalletRequest,
    "DigitalWalletUpdate": DigitalWalletUpdate,
    "DigitalWallets": DigitalWallets,
    "Error400BadRequest": Error400BadRequest,
    "Error400IncorrectJson": Error400IncorrectJson,
    "Error400InvalidCredentials": Error400InvalidCredentials,
    "Error401Unauthorized": Error401Unauthorized,
    "Error403Forbidden": Error403Forbidden,
    "Error404NotFound": Error404NotFound,
    "Error404PendingCreation": Error404PendingCreation,
    "Error409DuplicateRecord": Error409DuplicateRecord,
    "ErrorDetail": ErrorDetail,
    "ErrorGeneric": ErrorGeneric,
    "GooglePayRequest": GooglePayRequest,
    "GooglePayRequestAssuranceDetails": GooglePayRequestAssuranceDetails,
    "GooglePaySessionRequest": GooglePaySessionRequest,
    "PaymentMethod": PaymentMethod,
    "PaymentMethodDefinition": PaymentMethodDefinition,
    "PaymentMethodDefinitions": PaymentMethodDefinitions,
    "PaymentMethodDetailsCard": PaymentMethodDetailsCard,
    "PaymentMethodRequest": PaymentMethodRequest,
    "PaymentMethodSnapshot": PaymentMethodSnapshot,
    "PaymentMethodToken": PaymentMethodToken,
    "PaymentMethodTokenized": PaymentMethodTokenized,
    "PaymentMethodTokens": PaymentMethodTokens,
    "PaymentMethods": PaymentMethods,
    "PaymentMethodsTokenized": PaymentMethodsTokenized,
    "PaymentOption": PaymentOption,
    "PaymentOptionApprovalUI": PaymentOptionApprovalUI,
    "PaymentOptionContext": PaymentOptionContext,
    "PaymentOptions": PaymentOptions,
    "PaymentService": PaymentService,
    "PaymentServiceDefinition": PaymentServiceDefinition,
    "PaymentServiceDefinitionConfiguration": PaymentServiceDefinitionConfiguration,
    "PaymentServiceDefinitionFields": PaymentServiceDefinitionFields,
    "PaymentServiceDefinitionSupportedFeatures": PaymentServiceDefinitionSupportedFeatures,
    "PaymentServiceDefinitions": PaymentServiceDefinitions,
    "PaymentServiceFields": PaymentServiceFields,
    "PaymentServiceRequest": PaymentServiceRequest,
    "PaymentServiceRequestAllOf": PaymentServiceRequestAllOf,
    "PaymentServiceSnapshot": PaymentServiceSnapshot,
    "PaymentServiceUpdate": PaymentServiceUpdate,
    "PaymentServiceUpdateFields": PaymentServiceUpdateFields,
    "PaymentServices": PaymentServices,
    "RedirectRequest": RedirectRequest,
    "Refund": Refund,
    "Refunds": Refunds,
    "Report": Report,
    "ReportCreate": ReportCreate,
    "ReportExecution": ReportExecution,
    "ReportExecutionSummary": ReportExecutionSummary,
    "ReportExecutionSummaryContext": ReportExecutionSummaryContext,
    "ReportExecutionUrl": ReportExecutionUrl,
    "ReportExecutions": ReportExecutions,
    "ReportSpec": ReportSpec,
    "ReportSummary": ReportSummary,
    "ReportUpdate": ReportUpdate,
    "Reports": Reports,
    "RequiredFields": RequiredFields,
    "RequiredFieldsAddress": RequiredFieldsAddress,
    "ResetPasswordRequest": ResetPasswordRequest,
    "Role": Role,
    "RoleAssignment": RoleAssignment,
    "RoleAssignmentAssignee": RoleAssignmentAssignee,
    "RoleAssignmentRequest": RoleAssignmentRequest,
    "RoleAssignmentRequestAssignee": RoleAssignmentRequestAssignee,
    "RoleAssignmentRequestRole": RoleAssignmentRequestRole,
    "RoleAssignments": RoleAssignments,
    "RolePermissions": RolePermissions,
    "Roles": Roles,
    "SetPasswordRequest": SetPasswordRequest,
    "ShippingDetail": ShippingDetail,
    "ShippingDetailRequest": ShippingDetailRequest,
    "ShippingDetailUpdateRequest": ShippingDetailUpdateRequest,
    "ShippingDetails": ShippingDetails,
    "StatementDescriptor": StatementDescriptor,
    "TaxId": TaxId,
    "ThreeDSecureData": ThreeDSecureData,
    "ThreeDSecureDataV1": ThreeDSecureDataV1,
    "ThreeDSecureDataV1AllOf": ThreeDSecureDataV1AllOf,
    "ThreeDSecureDataV1V2": ThreeDSecureDataV1V2,
    "ThreeDSecureDataV2": ThreeDSecureDataV2,
    "ThreeDSecureDataV2AllOf": ThreeDSecureDataV2AllOf,
    "ThreeDSecureSummary": ThreeDSecureSummary,
    "TokenizedRequest": TokenizedRequest,
    "Transaction": Transaction,
    "TransactionCaptureRequest": TransactionCaptureRequest,
    "TransactionPaymentMethodRequest": TransactionPaymentMethodRequest,
    "TransactionRefundRequest": TransactionRefundRequest,
    "TransactionRequest": TransactionRequest,
    "TransactionStatusSummary": TransactionStatusSummary,
    "TransactionSummary": TransactionSummary,
    "Transactions": Transactions,
    "TransactionsBatchCaptureRequest": TransactionsBatchCaptureRequest,
    "UserRequest": UserRequest,
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

import localVarRequest from 'request'

export * from './aPIKeyPairCreate'
export * from './aPIKeyPairUpdate'
export * from './accountUpdaterInquirySummary'
export * from './accountUpdaterJob'
export * from './accountUpdaterJobCreate'
export * from './address'
export * from './airline'
export * from './airlineLeg'
export * from './airlinePassenger'
export * from './antiFraudDecisionErrorEvent'
export * from './antiFraudDecisionErrorEventContext'
export * from './antiFraudDecisionEvent'
export * from './antiFraudDecisionEventContext'
export * from './antiFraudDecisionSkippedEvent'
export * from './antiFraudDecisionSkippedEventContext'
export * from './antiFraudDecisionUpdateErrorEvent'
export * from './antiFraudDecisionUpdateErrorEventContext'
export * from './antiFraudDecisionUpdateEvent'
export * from './antiFraudDecisionUpdateEventContext'
export * from './antiFraudServiceCreate'
export * from './antiFraudServiceDefinition'
export * from './antiFraudServiceDefinitionFieldsInner'
export * from './antiFraudServiceUpdate'
export * from './antiFraudServiceUpdateFieldsInner'
export * from './antiFraudTransactionStatusUpdateErrorEvent'
export * from './antiFraudTransactionStatusUpdateErrorEventContext'
export * from './antiFraudTransactionStatusUpdateEvent'
export * from './antiFraudTransactionStatusUpdateEventContext'
export * from './antiFraudWebhookEvent'
export * from './antiFraudWebhookEventContext'
export * from './apiLog'
export * from './apiLogResponseBody'
export * from './apiLogResponseBodyDetails'
export * from './apiLogs'
export * from './applePayRequest'
export * from './applePaySessionRequest'
export * from './auditLog'
export * from './auditLogResource'
export * from './auditLogUser'
export * from './auditLogs'
export * from './bINLookupRequest'
export * from './bINLookupRequestContext'
export * from './billingDetails'
export * from './billingDetailsAddress'
export * from './billingDetailsRequest'
export * from './billingDetailsRequestAddress'
export * from './billingDetailsRequestTaxId'
export * from './billingDetailsTaxId'
export * from './billingDetailsUpdateRequest'
export * from './billingDetailsUpdateRequestAddress'
export * from './browserInfo'
export * from './buyer'
export * from './buyerBillingDetails'
export * from './buyerRequest'
export * from './buyerRequestBillingDetails'
export * from './buyerSnapshot'
export * from './buyerSnapshotBillingDetails'
export * from './buyerUpdate'
export * from './buyerUpdateBillingDetails'
export * from './buyers'
export * from './cardDetails'
export * from './cardRequest'
export * from './cardSchemeDefinition'
export * from './cardSchemeDefinitions'
export * from './cartItem'
export * from './checkoutSession'
export * from './checkoutSessionAirline'
export * from './checkoutSessionCreateRequest'
export * from './checkoutSessionCreateRequestAirline'
export * from './checkoutSessionPaymentMethod'
export * from './checkoutSessionPaymentMethodDetails'
export * from './checkoutSessionRequest'
export * from './checkoutSessionUpdateRequest'
export * from './clickToPaySessionRequest'
export * from './connection'
export * from './connectionDefinition'
export * from './connectionDefinitions'
export * from './connectionOptions'
export * from './connectionOptionsAdyenCard'
export * from './connectionOptionsAdyenSepa'
export * from './connectionOptionsCybersourceAntiFraud'
export * from './connectionOptionsCybersourceCard'
export * from './connectionOptionsCybersourceIdeal'
export * from './connectionOptionsCybersourceKcp'
export * from './connectionOptionsFiservCard'
export * from './connectionOptionsFiservCardInstallmentOptions'
export * from './connectionOptionsForterAntiFraud'
export * from './connectionOptionsForterAntiFraudCartItemsInner'
export * from './connectionOptionsForterAntiFraudCartItemsInnerBasicItemData'
export * from './connectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInner'
export * from './connectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerAddress'
export * from './connectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerComments'
export * from './connectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPersonalDetails'
export * from './connectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPhoneInner'
export * from './connectionOptionsForterAntiFraudCartItemsInnerDeliveryDetails'
export * from './connectionOptionsForterAntiFraudTotalDiscount'
export * from './connectionOptionsForterAntiFraudTotalDiscountCouponDiscountAmount'
export * from './connectionOptionsGivingblockGivingblock'
export * from './connectionOptionsLatitudeLatitude'
export * from './connectionOptionsPaypalPaypal'
export * from './connectionOptionsPaypalPaypalAdditionalDataInner'
export * from './connectionOptionsPowertranzCard'
export * from './connectionOptionsStripeCard'
export * from './connectionOptionsStripeCardStripeConnect'
export * from './connections'
export * from './cryptogram'
export * from './detailedSettlementReportSpec'
export * from './detailedSettlementReportSpecParams'
export * from './detailedSettlementReportSpecParamsFilters'
export * from './detailedSettlementReportSpecParamsFiltersIngestedAt'
export * from './digitalWallet'
export * from './digitalWalletApplePayTokenDecrypted'
export * from './digitalWalletApplePayTokenDecryptedContext'
export * from './digitalWalletClickToPayFields'
export * from './digitalWalletClickToPayTokenDecrypted'
export * from './digitalWalletClickToPayTokenDecryptedContext'
export * from './digitalWalletDomain'
export * from './digitalWalletGooglePayTokenDecrypted'
export * from './digitalWalletGooglePayTokenDecryptedContext'
export * from './digitalWalletRequest'
export * from './digitalWalletUpdate'
export * from './digitalWallets'
export * from './error400BadRequest'
export * from './error401Unauthorized'
export * from './error403Forbidden'
export * from './error404NotFound'
export * from './error409DuplicateRecord'
export * from './error429TooManyRequests'
export * from './errorDetail'
export * from './giftCard'
export * from './giftCardBalanceNewRequest'
export * from './giftCardBalanceRequest'
export * from './giftCardBalanceStoredRequest'
export * from './giftCardBalancesRequest'
export * from './giftCardBuyer'
export * from './giftCardRedemption'
export * from './giftCardRedemptionFailed'
export * from './giftCardRedemptionFailedContext'
export * from './giftCardRedemptionSucceeded'
export * from './giftCardRedemptionSucceededContext'
export * from './giftCardRefundFailed'
export * from './giftCardRefundFailedContext'
export * from './giftCardRefundSucceeded'
export * from './giftCardService'
export * from './giftCardServiceCreateRequest'
export * from './giftCardServiceCreateRequestFieldsInner'
export * from './giftCardServiceDefinition'
export * from './giftCardServiceFieldsInner'
export * from './giftCardServiceSnapshot'
export * from './giftCardServiceUpdateRequest'
export * from './giftCardServiceUpdateRequestFieldsInner'
export * from './giftCardServiceVerifyRequest'
export * from './giftCardServiceVerifyRequestFieldsInner'
export * from './giftCardSnapshot'
export * from './giftCardStoreRequest'
export * from './giftCardSummary'
export * from './giftCards'
export * from './giftCardsSummary'
export * from './googlePayRequest'
export * from './googlePayRequestAssuranceDetails'
export * from './googlePaySessionRequest'
export * from './issueCryptogramRequest'
export * from './merchant'
export * from './merchantAccount'
export * from './merchantAccountCreate'
export * from './merchantAccountUpdate'
export * from './merchantAccounts'
export * from './merchantAddress'
export * from './merchantProfile'
export * from './merchantProfileAmex'
export * from './merchantProfileDankort'
export * from './merchantProfileDiscover'
export * from './merchantProfileJcb'
export * from './merchantProfileMastercard'
export * from './merchantProfileScheme'
export * from './merchantProfileSchemeSummary'
export * from './merchantProfileSummary'
export * from './merchantProfileSummaryAmex'
export * from './merchantProfileSummaryDankort'
export * from './merchantProfileSummaryDiscover'
export * from './merchantProfileSummaryJcb'
export * from './merchantProfileSummaryMastercard'
export * from './merchantProfileSummaryUnionpay'
export * from './merchantProfileSummaryVisa'
export * from './merchantProfileUnionpay'
export * from './merchantProfileVisa'
export * from './merchantRequest'
export * from './networkToken'
export * from './networkTokenCryptogramProvisionFailed'
export * from './networkTokenCryptogramProvisionFailedContext'
export * from './networkTokenCryptogramProvisionSucceeded'
export * from './networkTokenCryptogramProvisionSucceededContext'
export * from './networkTokenProvisionFailed'
export * from './networkTokenProvisionFailedContext'
export * from './networkTokenProvisionSucceeded'
export * from './networkTokenRequest'
export * from './networkTokens'
export * from './paymentConnectorExternalTransactionRequest'
export * from './paymentConnectorExternalTransactionRequestContext'
export * from './paymentConnectorReportTransactionSettled'
export * from './paymentConnectorReportTransactionSettledContext'
export * from './paymentConnectorResponseTransactionAuthorizationFailedEvent'
export * from './paymentConnectorResponseTransactionAuthorizationFailedEventContext'
export * from './paymentConnectorResponseTransactionAuthorizationSucceededEvent'
export * from './paymentConnectorResponseTransactionAuthorizationSucceededEventContext'
export * from './paymentConnectorResponseTransactionCaptureDeclinedEvent'
export * from './paymentConnectorResponseTransactionCaptureDeclinedEventContext'
export * from './paymentConnectorResponseTransactionCaptureFailedEvent'
export * from './paymentConnectorResponseTransactionCaptureSucceededEvent'
export * from './paymentConnectorResponseTransactionCaptureSucceededEventContext'
export * from './paymentConnectorResponseTransactionDeclinedEvent'
export * from './paymentConnectorResponseTransactionDeclinedEventContext'
export * from './paymentConnectorResponseTransactionVoidDeclinedEvent'
export * from './paymentConnectorResponseTransactionVoidDeclinedEventContext'
export * from './paymentConnectorResponseTransactionVoidFailedEvent'
export * from './paymentConnectorResponseTransactionVoidFailedEventContext'
export * from './paymentConnectorResponseTransactionVoidSucceededEvent'
export * from './paymentConnectorResponseTransactionVoidSucceededEventContext'
export * from './paymentLink'
export * from './paymentLinkBuyer'
export * from './paymentLinkRequest'
export * from './paymentLinkRequestConnectionOptions'
export * from './paymentLinkShippingDetails'
export * from './paymentLinkStatementDescriptor'
export * from './paymentLinks'
export * from './paymentMethod'
export * from './paymentMethodDefinition'
export * from './paymentMethodDefinitions'
export * from './paymentMethodDetailsCard'
export * from './paymentMethodRequest'
export * from './paymentMethodSnapshot'
export * from './paymentMethodTokenized'
export * from './paymentMethods'
export * from './paymentMethodsTokenized'
export * from './paymentOption'
export * from './paymentOptionApprovalUI'
export * from './paymentOptionContext'
export * from './paymentOptions'
export * from './paymentOptionsRequest'
export * from './paymentService'
export * from './paymentServiceDefinition'
export * from './paymentServiceDefinitionConfiguration'
export * from './paymentServiceDefinitionReportingFieldsInner'
export * from './paymentServiceDefinitionSupportedFeatures'
export * from './paymentServiceDefinitions'
export * from './paymentServiceMerchantProfile'
export * from './paymentServiceReportingFieldsInner'
export * from './paymentServiceRequest'
export * from './paymentServiceRequestFieldsInner'
export * from './paymentServiceRequestMerchantProfile'
export * from './paymentServiceRequestReportingFieldsInner'
export * from './paymentServiceSession'
export * from './paymentServiceSnapshot'
export * from './paymentServiceToken'
export * from './paymentServiceTokenRequest'
export * from './paymentServiceTokens'
export * from './paymentServiceUpdate'
export * from './paymentServiceUpdateFieldsInner'
export * from './paymentServiceUpdateMerchantProfile'
export * from './paymentServiceUpdateReportingFieldsInner'
export * from './paymentServices'
export * from './payout'
export * from './payoutConnectionOptionsRequest'
export * from './payoutConnectionOptionsRequestCheckoutCard'
export * from './payoutInlineCardRequest'
export * from './payoutMerchant'
export * from './payoutPaymentMethodRequest'
export * from './payoutRequest'
export * from './payoutRequestBuyer'
export * from './payoutRequestConnectionOptions'
export * from './payoutRequestMerchant'
export * from './payoutStoredCardRequest'
export * from './payouts'
export * from './recipient'
export * from './recipientAddress'
export * from './recipientSnapshot'
export * from './redirectRequest'
export * from './refund'
export * from './refunds'
export * from './report'
export * from './reportCreate'
export * from './reportExecution'
export * from './reportExecutionSummary'
export * from './reportExecutionSummaryContext'
export * from './reportExecutionUrl'
export * from './reportExecutions'
export * from './reportSpec'
export * from './reportSummary'
export * from './reportUpdate'
export * from './reports'
export * from './requiredFields'
export * from './requiredFieldsAddress'
export * from './resetPasswordRequest'
export * from './role'
export * from './roleAssignment'
export * from './roleAssignmentAssignee'
export * from './roleAssignmentRequest'
export * from './roleAssignmentRequestAssignee'
export * from './roleAssignmentRequestRole'
export * from './roleAssignments'
export * from './rolePermissions'
export * from './roles'
export * from './setPasswordRequest'
export * from './settlement'
export * from './settlements'
export * from './shippingDetail'
export * from './shippingDetailAddress'
export * from './shippingDetailRequest'
export * from './shippingDetailRequestAddress'
export * from './shippingDetailUpdateRequest'
export * from './shippingDetails'
export * from './statementDescriptor'
export * from './taxId'
export * from './threeDSecureAuthenticationRequestEvent'
export * from './threeDSecureAuthenticationRequestEventContext'
export * from './threeDSecureData'
export * from './threeDSecureDataV1'
export * from './threeDSecureDataV1V2'
export * from './threeDSecureDataV2'
export * from './threeDSecureError'
export * from './threeDSecurePreparationRequestEvent'
export * from './threeDSecurePreparationRequestEventContext'
export * from './threeDSecureRequestErrorEvent'
export * from './threeDSecureRequestErrorEventContext'
export * from './threeDSecureResultRequestEvent'
export * from './threeDSecureResultRequestEventContext'
export * from './threeDSecureSuccessEvent'
export * from './threeDSecureSuccessEventContext'
export * from './threeDSecureSummary'
export * from './threeDSecureSummaryErrorData'
export * from './threeDSecureV2'
export * from './tokenizedRequest'
export * from './transaction'
export * from './transactionBuyer'
export * from './transactionBuyerRequest'
export * from './transactionBuyerRequestBillingDetails'
export * from './transactionBuyerRequestShippingDetails'
export * from './transactionCaptureRequest'
export * from './transactionCaptureRequestAirline'
export * from './transactionCardRequest'
export * from './transactionCheckoutSessionRequest'
export * from './transactionGiftCardNewRequest'
export * from './transactionGiftCardRequest'
export * from './transactionGiftCardStoredRequest'
export * from './transactionHistoryEvent'
export * from './transactionHistoryEvents'
export * from './transactionNetworkTokenApplePayRequest'
export * from './transactionNetworkTokenGooglePayRequest'
export * from './transactionNetworkTokenRequest'
export * from './transactionPaymentMethod'
export * from './transactionPaymentMethodRequest'
export * from './transactionPaymentService'
export * from './transactionRecipient'
export * from './transactionRedirectRequest'
export * from './transactionRefundAllRequest'
export * from './transactionRefundRequest'
export * from './transactionRequest'
export * from './transactionRequestBrowserInfo'
export * from './transactionRequestRecipient'
export * from './transactionRetriesReportSpec'
export * from './transactionRetriesReportSpecParams'
export * from './transactionRetriesReportSpecParamsFilters'
export * from './transactionRetriesReportSpecParamsFiltersCreatedAt'
export * from './transactionShippingDetails'
export * from './transactionStatusSummary'
export * from './transactionSummary'
export * from './transactions'
export * from './transactionsBatchCaptureRequest'
export * from './transactionsReportSpec'
export * from './transactionsReportSpecParams'
export * from './transactionsReportSpecParamsFilters'
export * from './transactionsReportSpecParamsFiltersAuthorizedAt'
export * from './transactionsReportSpecParamsFiltersCapturedAt'
export * from './transactionsReportSpecParamsFiltersUpdatedAt'
export * from './transactionsReportSpecParamsFiltersVoidedAt'
export * from './userCurrentUpdate'
export * from './userRequest'
export * from './userRole'
export * from './userUpdate'
export * from './webhookSubscription'
export * from './webhookSubscriptionAuthentication'
export * from './webhookSubscriptionRequest'
export * from './webhookSubscriptionRotateSecretRequest'
export * from './webhookSubscriptionUpdateRequest'
export * from './webhookSubscriptions'

import * as fs from 'fs'

export interface RequestDetailedFile {
  value: Buffer
  options?: {
    filename?: string
    contentType?: string
  }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile

import { APIKeyPairCreate } from './aPIKeyPairCreate'
import { APIKeyPairUpdate } from './aPIKeyPairUpdate'
import { AccountUpdaterInquirySummary } from './accountUpdaterInquirySummary'
import { AccountUpdaterJob } from './accountUpdaterJob'
import { AccountUpdaterJobCreate } from './accountUpdaterJobCreate'
import { Address } from './address'
import { Airline } from './airline'
import { AirlineLeg } from './airlineLeg'
import { AirlinePassenger } from './airlinePassenger'
import { AntiFraudDecisionErrorEvent } from './antiFraudDecisionErrorEvent'
import { AntiFraudDecisionErrorEventContext } from './antiFraudDecisionErrorEventContext'
import { AntiFraudDecisionEvent } from './antiFraudDecisionEvent'
import { AntiFraudDecisionEventContext } from './antiFraudDecisionEventContext'
import { AntiFraudDecisionSkippedEvent } from './antiFraudDecisionSkippedEvent'
import { AntiFraudDecisionSkippedEventContext } from './antiFraudDecisionSkippedEventContext'
import { AntiFraudDecisionUpdateErrorEvent } from './antiFraudDecisionUpdateErrorEvent'
import { AntiFraudDecisionUpdateErrorEventContext } from './antiFraudDecisionUpdateErrorEventContext'
import { AntiFraudDecisionUpdateEvent } from './antiFraudDecisionUpdateEvent'
import { AntiFraudDecisionUpdateEventContext } from './antiFraudDecisionUpdateEventContext'
import { AntiFraudServiceCreate } from './antiFraudServiceCreate'
import { AntiFraudServiceDefinition } from './antiFraudServiceDefinition'
import { AntiFraudServiceDefinitionFieldsInner } from './antiFraudServiceDefinitionFieldsInner'
import { AntiFraudServiceUpdate } from './antiFraudServiceUpdate'
import { AntiFraudServiceUpdateFieldsInner } from './antiFraudServiceUpdateFieldsInner'
import { AntiFraudTransactionStatusUpdateErrorEvent } from './antiFraudTransactionStatusUpdateErrorEvent'
import { AntiFraudTransactionStatusUpdateErrorEventContext } from './antiFraudTransactionStatusUpdateErrorEventContext'
import { AntiFraudTransactionStatusUpdateEvent } from './antiFraudTransactionStatusUpdateEvent'
import { AntiFraudTransactionStatusUpdateEventContext } from './antiFraudTransactionStatusUpdateEventContext'
import { AntiFraudWebhookEvent } from './antiFraudWebhookEvent'
import { AntiFraudWebhookEventContext } from './antiFraudWebhookEventContext'
import { ApiLog } from './apiLog'
import { ApiLogResponseBody } from './apiLogResponseBody'
import { ApiLogResponseBodyDetails } from './apiLogResponseBodyDetails'
import { ApiLogs } from './apiLogs'
import { ApplePayRequest } from './applePayRequest'
import { ApplePaySessionRequest } from './applePaySessionRequest'
import { AuditLog } from './auditLog'
import { AuditLogResource } from './auditLogResource'
import { AuditLogUser } from './auditLogUser'
import { AuditLogs } from './auditLogs'
import { BINLookupRequest } from './bINLookupRequest'
import { BINLookupRequestContext } from './bINLookupRequestContext'
import { BillingDetails } from './billingDetails'
import { BillingDetailsAddress } from './billingDetailsAddress'
import { BillingDetailsRequest } from './billingDetailsRequest'
import { BillingDetailsRequestAddress } from './billingDetailsRequestAddress'
import { BillingDetailsRequestTaxId } from './billingDetailsRequestTaxId'
import { BillingDetailsTaxId } from './billingDetailsTaxId'
import { BillingDetailsUpdateRequest } from './billingDetailsUpdateRequest'
import { BillingDetailsUpdateRequestAddress } from './billingDetailsUpdateRequestAddress'
import { BrowserInfo } from './browserInfo'
import { Buyer } from './buyer'
import { BuyerBillingDetails } from './buyerBillingDetails'
import { BuyerRequest } from './buyerRequest'
import { BuyerRequestBillingDetails } from './buyerRequestBillingDetails'
import { BuyerSnapshot } from './buyerSnapshot'
import { BuyerSnapshotBillingDetails } from './buyerSnapshotBillingDetails'
import { BuyerUpdate } from './buyerUpdate'
import { BuyerUpdateBillingDetails } from './buyerUpdateBillingDetails'
import { Buyers } from './buyers'
import { CardDetails } from './cardDetails'
import { CardRequest } from './cardRequest'
import { CardSchemeDefinition } from './cardSchemeDefinition'
import { CardSchemeDefinitions } from './cardSchemeDefinitions'
import { CartItem } from './cartItem'
import { CheckoutSession } from './checkoutSession'
import { CheckoutSessionAirline } from './checkoutSessionAirline'
import { CheckoutSessionCreateRequest } from './checkoutSessionCreateRequest'
import { CheckoutSessionCreateRequestAirline } from './checkoutSessionCreateRequestAirline'
import { CheckoutSessionPaymentMethod } from './checkoutSessionPaymentMethod'
import { CheckoutSessionPaymentMethodDetails } from './checkoutSessionPaymentMethodDetails'
import { CheckoutSessionRequest } from './checkoutSessionRequest'
import { CheckoutSessionUpdateRequest } from './checkoutSessionUpdateRequest'
import { ClickToPaySessionRequest } from './clickToPaySessionRequest'
import { Connection } from './connection'
import { ConnectionDefinition } from './connectionDefinition'
import { ConnectionDefinitions } from './connectionDefinitions'
import { ConnectionOptions } from './connectionOptions'
import { ConnectionOptionsAdyenCard } from './connectionOptionsAdyenCard'
import { ConnectionOptionsAdyenSepa } from './connectionOptionsAdyenSepa'
import { ConnectionOptionsCybersourceAntiFraud } from './connectionOptionsCybersourceAntiFraud'
import { ConnectionOptionsCybersourceCard } from './connectionOptionsCybersourceCard'
import { ConnectionOptionsCybersourceIdeal } from './connectionOptionsCybersourceIdeal'
import { ConnectionOptionsCybersourceKcp } from './connectionOptionsCybersourceKcp'
import { ConnectionOptionsFiservCard } from './connectionOptionsFiservCard'
import { ConnectionOptionsFiservCardInstallmentOptions } from './connectionOptionsFiservCardInstallmentOptions'
import { ConnectionOptionsForterAntiFraud } from './connectionOptionsForterAntiFraud'
import { ConnectionOptionsForterAntiFraudCartItemsInner } from './connectionOptionsForterAntiFraudCartItemsInner'
import { ConnectionOptionsForterAntiFraudCartItemsInnerBasicItemData } from './connectionOptionsForterAntiFraudCartItemsInnerBasicItemData'
import { ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInner } from './connectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInner'
import { ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerAddress } from './connectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerAddress'
import { ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerComments } from './connectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerComments'
import { ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPersonalDetails } from './connectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPersonalDetails'
import { ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPhoneInner } from './connectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPhoneInner'
import { ConnectionOptionsForterAntiFraudCartItemsInnerDeliveryDetails } from './connectionOptionsForterAntiFraudCartItemsInnerDeliveryDetails'
import { ConnectionOptionsForterAntiFraudTotalDiscount } from './connectionOptionsForterAntiFraudTotalDiscount'
import { ConnectionOptionsForterAntiFraudTotalDiscountCouponDiscountAmount } from './connectionOptionsForterAntiFraudTotalDiscountCouponDiscountAmount'
import { ConnectionOptionsGivingblockGivingblock } from './connectionOptionsGivingblockGivingblock'
import { ConnectionOptionsLatitudeLatitude } from './connectionOptionsLatitudeLatitude'
import { ConnectionOptionsPaypalPaypal } from './connectionOptionsPaypalPaypal'
import { ConnectionOptionsPaypalPaypalAdditionalDataInner } from './connectionOptionsPaypalPaypalAdditionalDataInner'
import { ConnectionOptionsPowertranzCard } from './connectionOptionsPowertranzCard'
import { ConnectionOptionsStripeCard } from './connectionOptionsStripeCard'
import { ConnectionOptionsStripeCardStripeConnect } from './connectionOptionsStripeCardStripeConnect'
import { Connections } from './connections'
import { Cryptogram } from './cryptogram'
import { DetailedSettlementReportSpec } from './detailedSettlementReportSpec'
import { DetailedSettlementReportSpecParams } from './detailedSettlementReportSpecParams'
import { DetailedSettlementReportSpecParamsFilters } from './detailedSettlementReportSpecParamsFilters'
import { DetailedSettlementReportSpecParamsFiltersIngestedAt } from './detailedSettlementReportSpecParamsFiltersIngestedAt'
import { DigitalWallet } from './digitalWallet'
import { DigitalWalletApplePayTokenDecrypted } from './digitalWalletApplePayTokenDecrypted'
import { DigitalWalletApplePayTokenDecryptedContext } from './digitalWalletApplePayTokenDecryptedContext'
import { DigitalWalletClickToPayFields } from './digitalWalletClickToPayFields'
import { DigitalWalletClickToPayTokenDecrypted } from './digitalWalletClickToPayTokenDecrypted'
import { DigitalWalletClickToPayTokenDecryptedContext } from './digitalWalletClickToPayTokenDecryptedContext'
import { DigitalWalletDomain } from './digitalWalletDomain'
import { DigitalWalletGooglePayTokenDecrypted } from './digitalWalletGooglePayTokenDecrypted'
import { DigitalWalletGooglePayTokenDecryptedContext } from './digitalWalletGooglePayTokenDecryptedContext'
import { DigitalWalletRequest } from './digitalWalletRequest'
import { DigitalWalletUpdate } from './digitalWalletUpdate'
import { DigitalWallets } from './digitalWallets'
import { Error400BadRequest } from './error400BadRequest'
import { Error401Unauthorized } from './error401Unauthorized'
import { Error403Forbidden } from './error403Forbidden'
import { Error404NotFound } from './error404NotFound'
import { Error409DuplicateRecord } from './error409DuplicateRecord'
import { Error429TooManyRequests } from './error429TooManyRequests'
import { ErrorDetail } from './errorDetail'
import { GiftCard } from './giftCard'
import { GiftCardBalanceNewRequest } from './giftCardBalanceNewRequest'
import { GiftCardBalanceRequest } from './giftCardBalanceRequest'
import { GiftCardBalanceStoredRequest } from './giftCardBalanceStoredRequest'
import { GiftCardBalancesRequest } from './giftCardBalancesRequest'
import { GiftCardBuyer } from './giftCardBuyer'
import { GiftCardRedemption } from './giftCardRedemption'
import { GiftCardRedemptionFailed } from './giftCardRedemptionFailed'
import { GiftCardRedemptionFailedContext } from './giftCardRedemptionFailedContext'
import { GiftCardRedemptionSucceeded } from './giftCardRedemptionSucceeded'
import { GiftCardRedemptionSucceededContext } from './giftCardRedemptionSucceededContext'
import { GiftCardRefundFailed } from './giftCardRefundFailed'
import { GiftCardRefundFailedContext } from './giftCardRefundFailedContext'
import { GiftCardRefundSucceeded } from './giftCardRefundSucceeded'
import { GiftCardService } from './giftCardService'
import { GiftCardServiceCreateRequest } from './giftCardServiceCreateRequest'
import { GiftCardServiceCreateRequestFieldsInner } from './giftCardServiceCreateRequestFieldsInner'
import { GiftCardServiceDefinition } from './giftCardServiceDefinition'
import { GiftCardServiceFieldsInner } from './giftCardServiceFieldsInner'
import { GiftCardServiceSnapshot } from './giftCardServiceSnapshot'
import { GiftCardServiceUpdateRequest } from './giftCardServiceUpdateRequest'
import { GiftCardServiceUpdateRequestFieldsInner } from './giftCardServiceUpdateRequestFieldsInner'
import { GiftCardServiceVerifyRequest } from './giftCardServiceVerifyRequest'
import { GiftCardServiceVerifyRequestFieldsInner } from './giftCardServiceVerifyRequestFieldsInner'
import { GiftCardSnapshot } from './giftCardSnapshot'
import { GiftCardStoreRequest } from './giftCardStoreRequest'
import { GiftCardSummary } from './giftCardSummary'
import { GiftCards } from './giftCards'
import { GiftCardsSummary } from './giftCardsSummary'
import { GooglePayRequest } from './googlePayRequest'
import { GooglePayRequestAssuranceDetails } from './googlePayRequestAssuranceDetails'
import { GooglePaySessionRequest } from './googlePaySessionRequest'
import { IssueCryptogramRequest } from './issueCryptogramRequest'
import { Merchant } from './merchant'
import { MerchantAccount } from './merchantAccount'
import { MerchantAccountCreate } from './merchantAccountCreate'
import { MerchantAccountUpdate } from './merchantAccountUpdate'
import { MerchantAccounts } from './merchantAccounts'
import { MerchantAddress } from './merchantAddress'
import { MerchantProfile } from './merchantProfile'
import { MerchantProfileAmex } from './merchantProfileAmex'
import { MerchantProfileDankort } from './merchantProfileDankort'
import { MerchantProfileDiscover } from './merchantProfileDiscover'
import { MerchantProfileJcb } from './merchantProfileJcb'
import { MerchantProfileMastercard } from './merchantProfileMastercard'
import { MerchantProfileScheme } from './merchantProfileScheme'
import { MerchantProfileSchemeSummary } from './merchantProfileSchemeSummary'
import { MerchantProfileSummary } from './merchantProfileSummary'
import { MerchantProfileSummaryAmex } from './merchantProfileSummaryAmex'
import { MerchantProfileSummaryDankort } from './merchantProfileSummaryDankort'
import { MerchantProfileSummaryDiscover } from './merchantProfileSummaryDiscover'
import { MerchantProfileSummaryJcb } from './merchantProfileSummaryJcb'
import { MerchantProfileSummaryMastercard } from './merchantProfileSummaryMastercard'
import { MerchantProfileSummaryUnionpay } from './merchantProfileSummaryUnionpay'
import { MerchantProfileSummaryVisa } from './merchantProfileSummaryVisa'
import { MerchantProfileUnionpay } from './merchantProfileUnionpay'
import { MerchantProfileVisa } from './merchantProfileVisa'
import { MerchantRequest } from './merchantRequest'
import { NetworkToken } from './networkToken'
import { NetworkTokenCryptogramProvisionFailed } from './networkTokenCryptogramProvisionFailed'
import { NetworkTokenCryptogramProvisionFailedContext } from './networkTokenCryptogramProvisionFailedContext'
import { NetworkTokenCryptogramProvisionSucceeded } from './networkTokenCryptogramProvisionSucceeded'
import { NetworkTokenCryptogramProvisionSucceededContext } from './networkTokenCryptogramProvisionSucceededContext'
import { NetworkTokenProvisionFailed } from './networkTokenProvisionFailed'
import { NetworkTokenProvisionFailedContext } from './networkTokenProvisionFailedContext'
import { NetworkTokenProvisionSucceeded } from './networkTokenProvisionSucceeded'
import { NetworkTokenRequest } from './networkTokenRequest'
import { NetworkTokens } from './networkTokens'
import { PaymentConnectorExternalTransactionRequest } from './paymentConnectorExternalTransactionRequest'
import { PaymentConnectorExternalTransactionRequestContext } from './paymentConnectorExternalTransactionRequestContext'
import { PaymentConnectorReportTransactionSettled } from './paymentConnectorReportTransactionSettled'
import { PaymentConnectorReportTransactionSettledContext } from './paymentConnectorReportTransactionSettledContext'
import { PaymentConnectorResponseTransactionAuthorizationFailedEvent } from './paymentConnectorResponseTransactionAuthorizationFailedEvent'
import { PaymentConnectorResponseTransactionAuthorizationFailedEventContext } from './paymentConnectorResponseTransactionAuthorizationFailedEventContext'
import { PaymentConnectorResponseTransactionAuthorizationSucceededEvent } from './paymentConnectorResponseTransactionAuthorizationSucceededEvent'
import { PaymentConnectorResponseTransactionAuthorizationSucceededEventContext } from './paymentConnectorResponseTransactionAuthorizationSucceededEventContext'
import { PaymentConnectorResponseTransactionCaptureDeclinedEvent } from './paymentConnectorResponseTransactionCaptureDeclinedEvent'
import { PaymentConnectorResponseTransactionCaptureDeclinedEventContext } from './paymentConnectorResponseTransactionCaptureDeclinedEventContext'
import { PaymentConnectorResponseTransactionCaptureFailedEvent } from './paymentConnectorResponseTransactionCaptureFailedEvent'
import { PaymentConnectorResponseTransactionCaptureSucceededEvent } from './paymentConnectorResponseTransactionCaptureSucceededEvent'
import { PaymentConnectorResponseTransactionCaptureSucceededEventContext } from './paymentConnectorResponseTransactionCaptureSucceededEventContext'
import { PaymentConnectorResponseTransactionDeclinedEvent } from './paymentConnectorResponseTransactionDeclinedEvent'
import { PaymentConnectorResponseTransactionDeclinedEventContext } from './paymentConnectorResponseTransactionDeclinedEventContext'
import { PaymentConnectorResponseTransactionVoidDeclinedEvent } from './paymentConnectorResponseTransactionVoidDeclinedEvent'
import { PaymentConnectorResponseTransactionVoidDeclinedEventContext } from './paymentConnectorResponseTransactionVoidDeclinedEventContext'
import { PaymentConnectorResponseTransactionVoidFailedEvent } from './paymentConnectorResponseTransactionVoidFailedEvent'
import { PaymentConnectorResponseTransactionVoidFailedEventContext } from './paymentConnectorResponseTransactionVoidFailedEventContext'
import { PaymentConnectorResponseTransactionVoidSucceededEvent } from './paymentConnectorResponseTransactionVoidSucceededEvent'
import { PaymentConnectorResponseTransactionVoidSucceededEventContext } from './paymentConnectorResponseTransactionVoidSucceededEventContext'
import { PaymentLink } from './paymentLink'
import { PaymentLinkBuyer } from './paymentLinkBuyer'
import { PaymentLinkRequest } from './paymentLinkRequest'
import { PaymentLinkRequestConnectionOptions } from './paymentLinkRequestConnectionOptions'
import { PaymentLinkShippingDetails } from './paymentLinkShippingDetails'
import { PaymentLinkStatementDescriptor } from './paymentLinkStatementDescriptor'
import { PaymentLinks } from './paymentLinks'
import { PaymentMethod } from './paymentMethod'
import { PaymentMethodDefinition } from './paymentMethodDefinition'
import { PaymentMethodDefinitions } from './paymentMethodDefinitions'
import { PaymentMethodDetailsCard } from './paymentMethodDetailsCard'
import { PaymentMethodRequest } from './paymentMethodRequest'
import { PaymentMethodSnapshot } from './paymentMethodSnapshot'
import { PaymentMethodTokenized } from './paymentMethodTokenized'
import { PaymentMethods } from './paymentMethods'
import { PaymentMethodsTokenized } from './paymentMethodsTokenized'
import { PaymentOption } from './paymentOption'
import { PaymentOptionApprovalUI } from './paymentOptionApprovalUI'
import { PaymentOptionContext } from './paymentOptionContext'
import { PaymentOptions } from './paymentOptions'
import { PaymentOptionsRequest } from './paymentOptionsRequest'
import { PaymentService } from './paymentService'
import { PaymentServiceDefinition } from './paymentServiceDefinition'
import { PaymentServiceDefinitionConfiguration } from './paymentServiceDefinitionConfiguration'
import { PaymentServiceDefinitionReportingFieldsInner } from './paymentServiceDefinitionReportingFieldsInner'
import { PaymentServiceDefinitionSupportedFeatures } from './paymentServiceDefinitionSupportedFeatures'
import { PaymentServiceDefinitions } from './paymentServiceDefinitions'
import { PaymentServiceMerchantProfile } from './paymentServiceMerchantProfile'
import { PaymentServiceReportingFieldsInner } from './paymentServiceReportingFieldsInner'
import { PaymentServiceRequest } from './paymentServiceRequest'
import { PaymentServiceRequestFieldsInner } from './paymentServiceRequestFieldsInner'
import { PaymentServiceRequestMerchantProfile } from './paymentServiceRequestMerchantProfile'
import { PaymentServiceRequestReportingFieldsInner } from './paymentServiceRequestReportingFieldsInner'
import { PaymentServiceSession } from './paymentServiceSession'
import { PaymentServiceSnapshot } from './paymentServiceSnapshot'
import { PaymentServiceToken } from './paymentServiceToken'
import { PaymentServiceTokenRequest } from './paymentServiceTokenRequest'
import { PaymentServiceTokens } from './paymentServiceTokens'
import { PaymentServiceUpdate } from './paymentServiceUpdate'
import { PaymentServiceUpdateFieldsInner } from './paymentServiceUpdateFieldsInner'
import { PaymentServiceUpdateMerchantProfile } from './paymentServiceUpdateMerchantProfile'
import { PaymentServiceUpdateReportingFieldsInner } from './paymentServiceUpdateReportingFieldsInner'
import { PaymentServices } from './paymentServices'
import { Payout } from './payout'
import { PayoutConnectionOptionsRequest } from './payoutConnectionOptionsRequest'
import { PayoutConnectionOptionsRequestCheckoutCard } from './payoutConnectionOptionsRequestCheckoutCard'
import { PayoutInlineCardRequest } from './payoutInlineCardRequest'
import { PayoutMerchant } from './payoutMerchant'
import { PayoutPaymentMethodRequest } from './payoutPaymentMethodRequest'
import { PayoutRequest } from './payoutRequest'
import { PayoutRequestBuyer } from './payoutRequestBuyer'
import { PayoutRequestConnectionOptions } from './payoutRequestConnectionOptions'
import { PayoutRequestMerchant } from './payoutRequestMerchant'
import { PayoutStoredCardRequest } from './payoutStoredCardRequest'
import { Payouts } from './payouts'
import { Recipient } from './recipient'
import { RecipientAddress } from './recipientAddress'
import { RecipientSnapshot } from './recipientSnapshot'
import { RedirectRequest } from './redirectRequest'
import { Refund } from './refund'
import { Refunds } from './refunds'
import { Report } from './report'
import { ReportCreate } from './reportCreate'
import { ReportExecution } from './reportExecution'
import { ReportExecutionSummary } from './reportExecutionSummary'
import { ReportExecutionSummaryContext } from './reportExecutionSummaryContext'
import { ReportExecutionUrl } from './reportExecutionUrl'
import { ReportExecutions } from './reportExecutions'
import { ReportSpec } from './reportSpec'
import { ReportSummary } from './reportSummary'
import { ReportUpdate } from './reportUpdate'
import { Reports } from './reports'
import { RequiredFields } from './requiredFields'
import { RequiredFieldsAddress } from './requiredFieldsAddress'
import { ResetPasswordRequest } from './resetPasswordRequest'
import { Role } from './role'
import { RoleAssignment } from './roleAssignment'
import { RoleAssignmentAssignee } from './roleAssignmentAssignee'
import { RoleAssignmentRequest } from './roleAssignmentRequest'
import { RoleAssignmentRequestAssignee } from './roleAssignmentRequestAssignee'
import { RoleAssignmentRequestRole } from './roleAssignmentRequestRole'
import { RoleAssignments } from './roleAssignments'
import { RolePermissions } from './rolePermissions'
import { Roles } from './roles'
import { SetPasswordRequest } from './setPasswordRequest'
import { Settlement } from './settlement'
import { Settlements } from './settlements'
import { ShippingDetail } from './shippingDetail'
import { ShippingDetailAddress } from './shippingDetailAddress'
import { ShippingDetailRequest } from './shippingDetailRequest'
import { ShippingDetailRequestAddress } from './shippingDetailRequestAddress'
import { ShippingDetailUpdateRequest } from './shippingDetailUpdateRequest'
import { ShippingDetails } from './shippingDetails'
import { StatementDescriptor } from './statementDescriptor'
import { TaxId } from './taxId'
import { ThreeDSecureAuthenticationRequestEvent } from './threeDSecureAuthenticationRequestEvent'
import { ThreeDSecureAuthenticationRequestEventContext } from './threeDSecureAuthenticationRequestEventContext'
import { ThreeDSecureData } from './threeDSecureData'
import { ThreeDSecureDataV1 } from './threeDSecureDataV1'
import { ThreeDSecureDataV1V2 } from './threeDSecureDataV1V2'
import { ThreeDSecureDataV2 } from './threeDSecureDataV2'
import { ThreeDSecureError } from './threeDSecureError'
import { ThreeDSecurePreparationRequestEvent } from './threeDSecurePreparationRequestEvent'
import { ThreeDSecurePreparationRequestEventContext } from './threeDSecurePreparationRequestEventContext'
import { ThreeDSecureRequestErrorEvent } from './threeDSecureRequestErrorEvent'
import { ThreeDSecureRequestErrorEventContext } from './threeDSecureRequestErrorEventContext'
import { ThreeDSecureResultRequestEvent } from './threeDSecureResultRequestEvent'
import { ThreeDSecureResultRequestEventContext } from './threeDSecureResultRequestEventContext'
import { ThreeDSecureSuccessEvent } from './threeDSecureSuccessEvent'
import { ThreeDSecureSuccessEventContext } from './threeDSecureSuccessEventContext'
import { ThreeDSecureSummary } from './threeDSecureSummary'
import { ThreeDSecureSummaryErrorData } from './threeDSecureSummaryErrorData'
import { ThreeDSecureV2 } from './threeDSecureV2'
import { TokenizedRequest } from './tokenizedRequest'
import { Transaction } from './transaction'
import { TransactionBuyer } from './transactionBuyer'
import { TransactionBuyerRequest } from './transactionBuyerRequest'
import { TransactionBuyerRequestBillingDetails } from './transactionBuyerRequestBillingDetails'
import { TransactionBuyerRequestShippingDetails } from './transactionBuyerRequestShippingDetails'
import { TransactionCaptureRequest } from './transactionCaptureRequest'
import { TransactionCaptureRequestAirline } from './transactionCaptureRequestAirline'
import { TransactionCardRequest } from './transactionCardRequest'
import { TransactionCheckoutSessionRequest } from './transactionCheckoutSessionRequest'
import { TransactionGiftCardNewRequest } from './transactionGiftCardNewRequest'
import { TransactionGiftCardRequest } from './transactionGiftCardRequest'
import { TransactionGiftCardStoredRequest } from './transactionGiftCardStoredRequest'
import { TransactionHistoryEvent } from './transactionHistoryEvent'
import { TransactionHistoryEvents } from './transactionHistoryEvents'
import { TransactionNetworkTokenApplePayRequest } from './transactionNetworkTokenApplePayRequest'
import { TransactionNetworkTokenGooglePayRequest } from './transactionNetworkTokenGooglePayRequest'
import { TransactionNetworkTokenRequest } from './transactionNetworkTokenRequest'
import { TransactionPaymentMethod } from './transactionPaymentMethod'
import { TransactionPaymentMethodRequest } from './transactionPaymentMethodRequest'
import { TransactionPaymentService } from './transactionPaymentService'
import { TransactionRecipient } from './transactionRecipient'
import { TransactionRedirectRequest } from './transactionRedirectRequest'
import { TransactionRefundAllRequest } from './transactionRefundAllRequest'
import { TransactionRefundRequest } from './transactionRefundRequest'
import { TransactionRequest } from './transactionRequest'
import { TransactionRequestBrowserInfo } from './transactionRequestBrowserInfo'
import { TransactionRequestRecipient } from './transactionRequestRecipient'
import { TransactionRetriesReportSpec } from './transactionRetriesReportSpec'
import { TransactionRetriesReportSpecParams } from './transactionRetriesReportSpecParams'
import { TransactionRetriesReportSpecParamsFilters } from './transactionRetriesReportSpecParamsFilters'
import { TransactionRetriesReportSpecParamsFiltersCreatedAt } from './transactionRetriesReportSpecParamsFiltersCreatedAt'
import { TransactionShippingDetails } from './transactionShippingDetails'
import { TransactionStatusSummary } from './transactionStatusSummary'
import { TransactionSummary } from './transactionSummary'
import { Transactions } from './transactions'
import { TransactionsBatchCaptureRequest } from './transactionsBatchCaptureRequest'
import { TransactionsReportSpec } from './transactionsReportSpec'
import { TransactionsReportSpecParams } from './transactionsReportSpecParams'
import { TransactionsReportSpecParamsFilters } from './transactionsReportSpecParamsFilters'
import { TransactionsReportSpecParamsFiltersAuthorizedAt } from './transactionsReportSpecParamsFiltersAuthorizedAt'
import { TransactionsReportSpecParamsFiltersCapturedAt } from './transactionsReportSpecParamsFiltersCapturedAt'
import { TransactionsReportSpecParamsFiltersUpdatedAt } from './transactionsReportSpecParamsFiltersUpdatedAt'
import { TransactionsReportSpecParamsFiltersVoidedAt } from './transactionsReportSpecParamsFiltersVoidedAt'
import { UserCurrentUpdate } from './userCurrentUpdate'
import { UserRequest } from './userRequest'
import { UserRole } from './userRole'
import { UserUpdate } from './userUpdate'
import { WebhookSubscription } from './webhookSubscription'
import { WebhookSubscriptionAuthentication } from './webhookSubscriptionAuthentication'
import { WebhookSubscriptionRequest } from './webhookSubscriptionRequest'
import { WebhookSubscriptionRotateSecretRequest } from './webhookSubscriptionRotateSecretRequest'
import { WebhookSubscriptionUpdateRequest } from './webhookSubscriptionUpdateRequest'
import { WebhookSubscriptions } from './webhookSubscriptions'

/* tslint:disable:no-unused-variable */
let primitives = [
  'string',
  'boolean',
  'double',
  'integer',
  'long',
  'float',
  'number',
  'any',
]

let enumsMap: { [index: string]: any } = {
  'APIKeyPairCreate.AlgorithmEnum': APIKeyPairCreate.AlgorithmEnum,
  'AccountUpdaterInquirySummary.TypeEnum':
    AccountUpdaterInquirySummary.TypeEnum,
  'AccountUpdaterJob.TypeEnum': AccountUpdaterJob.TypeEnum,
  'Airline.TicketDeliveryMethodEnum': Airline.TicketDeliveryMethodEnum,
  'AirlineLeg.RouteTypeEnum': AirlineLeg.RouteTypeEnum,
  'AirlinePassenger.AgeGroupEnum': AirlinePassenger.AgeGroupEnum,
  'AntiFraudDecisionErrorEvent.TypeEnum': AntiFraudDecisionErrorEvent.TypeEnum,
  'AntiFraudDecisionErrorEvent.NameEnum': AntiFraudDecisionErrorEvent.NameEnum,
  'AntiFraudDecisionEvent.TypeEnum': AntiFraudDecisionEvent.TypeEnum,
  'AntiFraudDecisionEvent.NameEnum': AntiFraudDecisionEvent.NameEnum,
  'AntiFraudDecisionSkippedEvent.TypeEnum':
    AntiFraudDecisionSkippedEvent.TypeEnum,
  'AntiFraudDecisionSkippedEvent.NameEnum':
    AntiFraudDecisionSkippedEvent.NameEnum,
  'AntiFraudDecisionUpdateErrorEvent.TypeEnum':
    AntiFraudDecisionUpdateErrorEvent.TypeEnum,
  'AntiFraudDecisionUpdateErrorEvent.NameEnum':
    AntiFraudDecisionUpdateErrorEvent.NameEnum,
  'AntiFraudDecisionUpdateEvent.TypeEnum':
    AntiFraudDecisionUpdateEvent.TypeEnum,
  'AntiFraudDecisionUpdateEvent.NameEnum':
    AntiFraudDecisionUpdateEvent.NameEnum,
  'AntiFraudServiceCreate.AntiFraudServiceDefinitionIdEnum':
    AntiFraudServiceCreate.AntiFraudServiceDefinitionIdEnum,
  'AntiFraudServiceDefinition.TypeEnum': AntiFraudServiceDefinition.TypeEnum,
  'AntiFraudServiceDefinitionFieldsInner.FormatEnum':
    AntiFraudServiceDefinitionFieldsInner.FormatEnum,
  'AntiFraudServiceUpdate.AntiFraudServiceDefinitionIdEnum':
    AntiFraudServiceUpdate.AntiFraudServiceDefinitionIdEnum,
  'AntiFraudTransactionStatusUpdateErrorEvent.TypeEnum':
    AntiFraudTransactionStatusUpdateErrorEvent.TypeEnum,
  'AntiFraudTransactionStatusUpdateErrorEvent.NameEnum':
    AntiFraudTransactionStatusUpdateErrorEvent.NameEnum,
  'AntiFraudTransactionStatusUpdateEvent.TypeEnum':
    AntiFraudTransactionStatusUpdateEvent.TypeEnum,
  'AntiFraudTransactionStatusUpdateEvent.NameEnum':
    AntiFraudTransactionStatusUpdateEvent.NameEnum,
  'AntiFraudWebhookEvent.TypeEnum': AntiFraudWebhookEvent.TypeEnum,
  'AntiFraudWebhookEvent.NameEnum': AntiFraudWebhookEvent.NameEnum,
  'ApiLog.TypeEnum': ApiLog.TypeEnum,
  'ApplePayRequest.MethodEnum': ApplePayRequest.MethodEnum,
  'AuditLog.TypeEnum': AuditLog.TypeEnum,
  'AuditLog.ActionEnum': AuditLog.ActionEnum,
  'AuditLogUser.StatusEnum': AuditLogUser.StatusEnum,
  'BINLookupRequest.TypeEnum': BINLookupRequest.TypeEnum,
  'BINLookupRequest.NameEnum': BINLookupRequest.NameEnum,
  'BINLookupRequestContext.SchemeEnum': BINLookupRequestContext.SchemeEnum,
  'BINLookupRequestContext.AdditionalSchemesEnum':
    BINLookupRequestContext.AdditionalSchemesEnum,
  'BillingDetails.TypeEnum': BillingDetails.TypeEnum,
  'BillingDetailsRequestTaxId.KindEnum': BillingDetailsRequestTaxId.KindEnum,
  'BillingDetailsTaxId.KindEnum': BillingDetailsTaxId.KindEnum,
  'BrowserInfo.UserDeviceEnum': BrowserInfo.UserDeviceEnum,
  'Buyer.TypeEnum': Buyer.TypeEnum,
  'BuyerBillingDetails.TypeEnum': BuyerBillingDetails.TypeEnum,
  'BuyerSnapshot.TypeEnum': BuyerSnapshot.TypeEnum,
  'BuyerSnapshotBillingDetails.TypeEnum': BuyerSnapshotBillingDetails.TypeEnum,
  'CardDetails.TypeEnum': CardDetails.TypeEnum,
  'CardDetails.CardTypeEnum': CardDetails.CardTypeEnum,
  'CardDetails.SchemeEnum': CardDetails.SchemeEnum,
  'CardRequest.MethodEnum': CardRequest.MethodEnum,
  'CardSchemeDefinition.TypeEnum': CardSchemeDefinition.TypeEnum,
  'CartItem.ProductTypeEnum': CartItem.ProductTypeEnum,
  'CheckoutSession.TypeEnum': CheckoutSession.TypeEnum,
  'CheckoutSessionAirline.TicketDeliveryMethodEnum':
    CheckoutSessionAirline.TicketDeliveryMethodEnum,
  'CheckoutSessionCreateRequestAirline.TicketDeliveryMethodEnum':
    CheckoutSessionCreateRequestAirline.TicketDeliveryMethodEnum,
  'CheckoutSessionPaymentMethod.MethodEnum':
    CheckoutSessionPaymentMethod.MethodEnum,
  'CheckoutSessionPaymentMethod.SchemeEnum':
    CheckoutSessionPaymentMethod.SchemeEnum,
  'CheckoutSessionPaymentMethodDetails.CardTypeEnum':
    CheckoutSessionPaymentMethodDetails.CardTypeEnum,
  'CheckoutSessionRequest.MethodEnum': CheckoutSessionRequest.MethodEnum,
  'ConnectionDefinition.GroupEnum': ConnectionDefinition.GroupEnum,
  'ConnectionDefinition.CategoryEnum': ConnectionDefinition.CategoryEnum,
  'ConnectionOptionsForterAntiFraud.DeliveryTypeEnum':
    ConnectionOptionsForterAntiFraud.DeliveryTypeEnum,
  'ConnectionOptionsForterAntiFraudCartItemsInnerBasicItemData.TypeEnum':
    ConnectionOptionsForterAntiFraudCartItemsInnerBasicItemData.TypeEnum,
  'ConnectionOptionsForterAntiFraudCartItemsInnerDeliveryDetails.DeliveryTypeEnum':
    ConnectionOptionsForterAntiFraudCartItemsInnerDeliveryDetails.DeliveryTypeEnum,
  'DetailedSettlementReportSpec.ModelEnum':
    DetailedSettlementReportSpec.ModelEnum,
  'DetailedSettlementReportSpecParamsFiltersIngestedAt.StartEnum':
    DetailedSettlementReportSpecParamsFiltersIngestedAt.StartEnum,
  'DetailedSettlementReportSpecParamsFiltersIngestedAt.EndEnum':
    DetailedSettlementReportSpecParamsFiltersIngestedAt.EndEnum,
  'DigitalWallet.TypeEnum': DigitalWallet.TypeEnum,
  'DigitalWallet.ProviderEnum': DigitalWallet.ProviderEnum,
  'DigitalWalletApplePayTokenDecrypted.TypeEnum':
    DigitalWalletApplePayTokenDecrypted.TypeEnum,
  'DigitalWalletApplePayTokenDecrypted.NameEnum':
    DigitalWalletApplePayTokenDecrypted.NameEnum,
  'DigitalWalletApplePayTokenDecryptedContext.TypeEnum':
    DigitalWalletApplePayTokenDecryptedContext.TypeEnum,
  'DigitalWalletClickToPayTokenDecrypted.TypeEnum':
    DigitalWalletClickToPayTokenDecrypted.TypeEnum,
  'DigitalWalletClickToPayTokenDecrypted.NameEnum':
    DigitalWalletClickToPayTokenDecrypted.NameEnum,
  'DigitalWalletClickToPayTokenDecryptedContext.TypeEnum':
    DigitalWalletClickToPayTokenDecryptedContext.TypeEnum,
  'DigitalWalletGooglePayTokenDecrypted.TypeEnum':
    DigitalWalletGooglePayTokenDecrypted.TypeEnum,
  'DigitalWalletGooglePayTokenDecrypted.NameEnum':
    DigitalWalletGooglePayTokenDecrypted.NameEnum,
  'DigitalWalletGooglePayTokenDecryptedContext.TypeEnum':
    DigitalWalletGooglePayTokenDecryptedContext.TypeEnum,
  'DigitalWalletRequest.ProviderEnum': DigitalWalletRequest.ProviderEnum,
  'Error400BadRequest.TypeEnum': Error400BadRequest.TypeEnum,
  'Error400BadRequest.CodeEnum': Error400BadRequest.CodeEnum,
  'Error400BadRequest.StatusEnum': Error400BadRequest.StatusEnum,
  'Error401Unauthorized.TypeEnum': Error401Unauthorized.TypeEnum,
  'Error401Unauthorized.CodeEnum': Error401Unauthorized.CodeEnum,
  'Error401Unauthorized.StatusEnum': Error401Unauthorized.StatusEnum,
  'Error401Unauthorized.MessageEnum': Error401Unauthorized.MessageEnum,
  'Error403Forbidden.TypeEnum': Error403Forbidden.TypeEnum,
  'Error403Forbidden.CodeEnum': Error403Forbidden.CodeEnum,
  'Error403Forbidden.StatusEnum': Error403Forbidden.StatusEnum,
  'Error403Forbidden.MessageEnum': Error403Forbidden.MessageEnum,
  'Error404NotFound.TypeEnum': Error404NotFound.TypeEnum,
  'Error404NotFound.CodeEnum': Error404NotFound.CodeEnum,
  'Error404NotFound.StatusEnum': Error404NotFound.StatusEnum,
  'Error409DuplicateRecord.TypeEnum': Error409DuplicateRecord.TypeEnum,
  'Error409DuplicateRecord.CodeEnum': Error409DuplicateRecord.CodeEnum,
  'Error409DuplicateRecord.StatusEnum': Error409DuplicateRecord.StatusEnum,
  'Error429TooManyRequests.TypeEnum': Error429TooManyRequests.TypeEnum,
  'Error429TooManyRequests.CodeEnum': Error429TooManyRequests.CodeEnum,
  'Error429TooManyRequests.StatusEnum': Error429TooManyRequests.StatusEnum,
  'ErrorDetail.LocationEnum': ErrorDetail.LocationEnum,
  'GiftCard.TypeEnum': GiftCard.TypeEnum,
  'GiftCardBuyer.TypeEnum': GiftCardBuyer.TypeEnum,
  'GiftCardRedemption.TypeEnum': GiftCardRedemption.TypeEnum,
  'GiftCardRedemption.StatusEnum': GiftCardRedemption.StatusEnum,
  'GiftCardRedemption.ErrorCodeEnum': GiftCardRedemption.ErrorCodeEnum,
  'GiftCardRedemptionFailed.TypeEnum': GiftCardRedemptionFailed.TypeEnum,
  'GiftCardRedemptionFailed.NameEnum': GiftCardRedemptionFailed.NameEnum,
  'GiftCardRedemptionSucceeded.TypeEnum': GiftCardRedemptionSucceeded.TypeEnum,
  'GiftCardRedemptionSucceeded.NameEnum': GiftCardRedemptionSucceeded.NameEnum,
  'GiftCardRefundFailed.TypeEnum': GiftCardRefundFailed.TypeEnum,
  'GiftCardRefundFailed.NameEnum': GiftCardRefundFailed.NameEnum,
  'GiftCardRefundSucceeded.TypeEnum': GiftCardRefundSucceeded.TypeEnum,
  'GiftCardRefundSucceeded.NameEnum': GiftCardRefundSucceeded.NameEnum,
  'GiftCardService.TypeEnum': GiftCardService.TypeEnum,
  'GiftCardServiceDefinition.TypeEnum': GiftCardServiceDefinition.TypeEnum,
  'GiftCardServiceSnapshot.TypeEnum': GiftCardServiceSnapshot.TypeEnum,
  'GiftCardSnapshot.TypeEnum': GiftCardSnapshot.TypeEnum,
  'GiftCardSummary.TypeEnum': GiftCardSummary.TypeEnum,
  'GiftCardSummary.BalanceErrorCodeEnum': GiftCardSummary.BalanceErrorCodeEnum,
  'GooglePayRequest.MethodEnum': GooglePayRequest.MethodEnum,
  'Merchant.TypeEnum': Merchant.TypeEnum,
  'MerchantAccount.TypeEnum': MerchantAccount.TypeEnum,
  'MerchantAccount.LoonAcceptedSchemesEnum':
    MerchantAccount.LoonAcceptedSchemesEnum,
  'MerchantAccountCreate.LoonAcceptedSchemesEnum':
    MerchantAccountCreate.LoonAcceptedSchemesEnum,
  'MerchantAccountUpdate.LoonAcceptedSchemesEnum':
    MerchantAccountUpdate.LoonAcceptedSchemesEnum,
  'NetworkToken.TypeEnum': NetworkToken.TypeEnum,
  'NetworkToken.StatusEnum': NetworkToken.StatusEnum,
  'NetworkTokenCryptogramProvisionFailed.TypeEnum':
    NetworkTokenCryptogramProvisionFailed.TypeEnum,
  'NetworkTokenCryptogramProvisionFailed.NameEnum':
    NetworkTokenCryptogramProvisionFailed.NameEnum,
  'NetworkTokenCryptogramProvisionSucceeded.TypeEnum':
    NetworkTokenCryptogramProvisionSucceeded.TypeEnum,
  'NetworkTokenCryptogramProvisionSucceeded.NameEnum':
    NetworkTokenCryptogramProvisionSucceeded.NameEnum,
  'NetworkTokenProvisionFailed.TypeEnum': NetworkTokenProvisionFailed.TypeEnum,
  'NetworkTokenProvisionFailed.NameEnum': NetworkTokenProvisionFailed.NameEnum,
  'NetworkTokenProvisionSucceeded.TypeEnum':
    NetworkTokenProvisionSucceeded.TypeEnum,
  'NetworkTokenProvisionSucceeded.NameEnum':
    NetworkTokenProvisionSucceeded.NameEnum,
  'PaymentConnectorExternalTransactionRequest.TypeEnum':
    PaymentConnectorExternalTransactionRequest.TypeEnum,
  'PaymentConnectorExternalTransactionRequest.NameEnum':
    PaymentConnectorExternalTransactionRequest.NameEnum,
  'PaymentConnectorReportTransactionSettled.TypeEnum':
    PaymentConnectorReportTransactionSettled.TypeEnum,
  'PaymentConnectorReportTransactionSettled.NameEnum':
    PaymentConnectorReportTransactionSettled.NameEnum,
  'PaymentConnectorResponseTransactionAuthorizationFailedEvent.TypeEnum':
    PaymentConnectorResponseTransactionAuthorizationFailedEvent.TypeEnum,
  'PaymentConnectorResponseTransactionAuthorizationFailedEvent.NameEnum':
    PaymentConnectorResponseTransactionAuthorizationFailedEvent.NameEnum,
  'PaymentConnectorResponseTransactionAuthorizationFailedEventContext.StatusEnum':
    PaymentConnectorResponseTransactionAuthorizationFailedEventContext.StatusEnum,
  'PaymentConnectorResponseTransactionAuthorizationFailedEventContext.InstrumentTypeEnum':
    PaymentConnectorResponseTransactionAuthorizationFailedEventContext.InstrumentTypeEnum,
  'PaymentConnectorResponseTransactionAuthorizationFailedEventContext.RetryRuleEnum':
    PaymentConnectorResponseTransactionAuthorizationFailedEventContext.RetryRuleEnum,
  'PaymentConnectorResponseTransactionAuthorizationFailedEventContext.AvsResponseCodeEnum':
    PaymentConnectorResponseTransactionAuthorizationFailedEventContext.AvsResponseCodeEnum,
  'PaymentConnectorResponseTransactionAuthorizationFailedEventContext.CvvResponseCodeEnum':
    PaymentConnectorResponseTransactionAuthorizationFailedEventContext.CvvResponseCodeEnum,
  'PaymentConnectorResponseTransactionAuthorizationFailedEventContext.PaymentMethodSchemeEnum':
    PaymentConnectorResponseTransactionAuthorizationFailedEventContext.PaymentMethodSchemeEnum,
  'PaymentConnectorResponseTransactionAuthorizationSucceededEvent.TypeEnum':
    PaymentConnectorResponseTransactionAuthorizationSucceededEvent.TypeEnum,
  'PaymentConnectorResponseTransactionAuthorizationSucceededEvent.NameEnum':
    PaymentConnectorResponseTransactionAuthorizationSucceededEvent.NameEnum,
  'PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.StatusEnum':
    PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.StatusEnum,
  'PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.InstrumentTypeEnum':
    PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.InstrumentTypeEnum,
  'PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.AvsResponseCodeEnum':
    PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.AvsResponseCodeEnum,
  'PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.CvvResponseCodeEnum':
    PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.CvvResponseCodeEnum,
  'PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.PaymentMethodSchemeEnum':
    PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.PaymentMethodSchemeEnum,
  'PaymentConnectorResponseTransactionCaptureDeclinedEvent.TypeEnum':
    PaymentConnectorResponseTransactionCaptureDeclinedEvent.TypeEnum,
  'PaymentConnectorResponseTransactionCaptureDeclinedEvent.NameEnum':
    PaymentConnectorResponseTransactionCaptureDeclinedEvent.NameEnum,
  'PaymentConnectorResponseTransactionCaptureDeclinedEventContext.AvsResponseCodeEnum':
    PaymentConnectorResponseTransactionCaptureDeclinedEventContext.AvsResponseCodeEnum,
  'PaymentConnectorResponseTransactionCaptureDeclinedEventContext.CvvResponseCodeEnum':
    PaymentConnectorResponseTransactionCaptureDeclinedEventContext.CvvResponseCodeEnum,
  'PaymentConnectorResponseTransactionCaptureDeclinedEventContext.PaymentMethodSchemeEnum':
    PaymentConnectorResponseTransactionCaptureDeclinedEventContext.PaymentMethodSchemeEnum,
  'PaymentConnectorResponseTransactionCaptureFailedEvent.TypeEnum':
    PaymentConnectorResponseTransactionCaptureFailedEvent.TypeEnum,
  'PaymentConnectorResponseTransactionCaptureFailedEvent.NameEnum':
    PaymentConnectorResponseTransactionCaptureFailedEvent.NameEnum,
  'PaymentConnectorResponseTransactionCaptureSucceededEvent.TypeEnum':
    PaymentConnectorResponseTransactionCaptureSucceededEvent.TypeEnum,
  'PaymentConnectorResponseTransactionCaptureSucceededEvent.NameEnum':
    PaymentConnectorResponseTransactionCaptureSucceededEvent.NameEnum,
  'PaymentConnectorResponseTransactionCaptureSucceededEventContext.StatusEnum':
    PaymentConnectorResponseTransactionCaptureSucceededEventContext.StatusEnum,
  'PaymentConnectorResponseTransactionCaptureSucceededEventContext.InstrumentTypeEnum':
    PaymentConnectorResponseTransactionCaptureSucceededEventContext.InstrumentTypeEnum,
  'PaymentConnectorResponseTransactionCaptureSucceededEventContext.AvsResponseCodeEnum':
    PaymentConnectorResponseTransactionCaptureSucceededEventContext.AvsResponseCodeEnum,
  'PaymentConnectorResponseTransactionCaptureSucceededEventContext.CvvResponseCodeEnum':
    PaymentConnectorResponseTransactionCaptureSucceededEventContext.CvvResponseCodeEnum,
  'PaymentConnectorResponseTransactionCaptureSucceededEventContext.PaymentMethodSchemeEnum':
    PaymentConnectorResponseTransactionCaptureSucceededEventContext.PaymentMethodSchemeEnum,
  'PaymentConnectorResponseTransactionDeclinedEvent.TypeEnum':
    PaymentConnectorResponseTransactionDeclinedEvent.TypeEnum,
  'PaymentConnectorResponseTransactionDeclinedEvent.NameEnum':
    PaymentConnectorResponseTransactionDeclinedEvent.NameEnum,
  'PaymentConnectorResponseTransactionDeclinedEventContext.StatusEnum':
    PaymentConnectorResponseTransactionDeclinedEventContext.StatusEnum,
  'PaymentConnectorResponseTransactionDeclinedEventContext.InstrumentTypeEnum':
    PaymentConnectorResponseTransactionDeclinedEventContext.InstrumentTypeEnum,
  'PaymentConnectorResponseTransactionDeclinedEventContext.RetryRuleEnum':
    PaymentConnectorResponseTransactionDeclinedEventContext.RetryRuleEnum,
  'PaymentConnectorResponseTransactionDeclinedEventContext.AvsResponseCodeEnum':
    PaymentConnectorResponseTransactionDeclinedEventContext.AvsResponseCodeEnum,
  'PaymentConnectorResponseTransactionDeclinedEventContext.CvvResponseCodeEnum':
    PaymentConnectorResponseTransactionDeclinedEventContext.CvvResponseCodeEnum,
  'PaymentConnectorResponseTransactionDeclinedEventContext.PaymentMethodSchemeEnum':
    PaymentConnectorResponseTransactionDeclinedEventContext.PaymentMethodSchemeEnum,
  'PaymentConnectorResponseTransactionVoidDeclinedEvent.TypeEnum':
    PaymentConnectorResponseTransactionVoidDeclinedEvent.TypeEnum,
  'PaymentConnectorResponseTransactionVoidDeclinedEvent.NameEnum':
    PaymentConnectorResponseTransactionVoidDeclinedEvent.NameEnum,
  'PaymentConnectorResponseTransactionVoidFailedEvent.TypeEnum':
    PaymentConnectorResponseTransactionVoidFailedEvent.TypeEnum,
  'PaymentConnectorResponseTransactionVoidFailedEvent.NameEnum':
    PaymentConnectorResponseTransactionVoidFailedEvent.NameEnum,
  'PaymentConnectorResponseTransactionVoidSucceededEvent.TypeEnum':
    PaymentConnectorResponseTransactionVoidSucceededEvent.TypeEnum,
  'PaymentConnectorResponseTransactionVoidSucceededEvent.NameEnum':
    PaymentConnectorResponseTransactionVoidSucceededEvent.NameEnum,
  'PaymentLink.TypeEnum': PaymentLink.TypeEnum,
  'PaymentLink.StatusEnum': PaymentLink.StatusEnum,
  'PaymentLink.LocaleEnum': PaymentLink.LocaleEnum,
  'PaymentLink.IntentEnum': PaymentLink.IntentEnum,
  'PaymentLink.PaymentSourceEnum': PaymentLink.PaymentSourceEnum,
  'PaymentLinkBuyer.TypeEnum': PaymentLinkBuyer.TypeEnum,
  'PaymentLinkRequest.LocaleEnum': PaymentLinkRequest.LocaleEnum,
  'PaymentLinkRequest.IntentEnum': PaymentLinkRequest.IntentEnum,
  'PaymentLinkRequest.PaymentSourceEnum': PaymentLinkRequest.PaymentSourceEnum,
  'PaymentLinkShippingDetails.TypeEnum': PaymentLinkShippingDetails.TypeEnum,
  'PaymentMethod.TypeEnum': PaymentMethod.TypeEnum,
  'PaymentMethod.AdditionalSchemesEnum': PaymentMethod.AdditionalSchemesEnum,
  'PaymentMethod.ApprovalTargetEnum': PaymentMethod.ApprovalTargetEnum,
  'PaymentMethod.MethodEnum': PaymentMethod.MethodEnum,
  'PaymentMethod.ModeEnum': PaymentMethod.ModeEnum,
  'PaymentMethod.SchemeEnum': PaymentMethod.SchemeEnum,
  'PaymentMethod.StatusEnum': PaymentMethod.StatusEnum,
  'PaymentMethodDetailsCard.CardTypeEnum':
    PaymentMethodDetailsCard.CardTypeEnum,
  'PaymentMethodSnapshot.TypeEnum': PaymentMethodSnapshot.TypeEnum,
  'PaymentMethodSnapshot.ApprovalTargetEnum':
    PaymentMethodSnapshot.ApprovalTargetEnum,
  'PaymentMethodSnapshot.MethodEnum': PaymentMethodSnapshot.MethodEnum,
  'PaymentMethodSnapshot.SchemeEnum': PaymentMethodSnapshot.SchemeEnum,
  'PaymentMethodTokenized.TypeEnum': PaymentMethodTokenized.TypeEnum,
  'PaymentMethodTokenized.MethodEnum': PaymentMethodTokenized.MethodEnum,
  'PaymentMethodTokenized.SchemeEnum': PaymentMethodTokenized.SchemeEnum,
  'PaymentMethodTokenized.AdditionalSchemesEnum':
    PaymentMethodTokenized.AdditionalSchemesEnum,
  'PaymentMethodTokenized.ApprovalTargetEnum':
    PaymentMethodTokenized.ApprovalTargetEnum,
  'PaymentOption.TypeEnum': PaymentOption.TypeEnum,
  'PaymentOption.MethodEnum': PaymentOption.MethodEnum,
  'PaymentOption.ModeEnum': PaymentOption.ModeEnum,
  'PaymentService.TypeEnum': PaymentService.TypeEnum,
  'PaymentService.MethodEnum': PaymentService.MethodEnum,
  'PaymentService.StatusEnum': PaymentService.StatusEnum,
  'PaymentServiceDefinition.TypeEnum': PaymentServiceDefinition.TypeEnum,
  'PaymentServiceDefinition.MethodEnum': PaymentServiceDefinition.MethodEnum,
  'PaymentServiceDefinition.ModeEnum': PaymentServiceDefinition.ModeEnum,
  'PaymentServiceDefinitionConfiguration.ApprovalUiTargetEnum':
    PaymentServiceDefinitionConfiguration.ApprovalUiTargetEnum,
  'PaymentServiceDefinitionReportingFieldsInner.FormatEnum':
    PaymentServiceDefinitionReportingFieldsInner.FormatEnum,
  'PaymentServiceSession.TypeEnum': PaymentServiceSession.TypeEnum,
  'PaymentServiceSession.StatusEnum': PaymentServiceSession.StatusEnum,
  'PaymentServiceSnapshot.TypeEnum': PaymentServiceSnapshot.TypeEnum,
  'PaymentServiceSnapshot.MethodEnum': PaymentServiceSnapshot.MethodEnum,
  'PaymentServiceToken.TypeEnum': PaymentServiceToken.TypeEnum,
  'PaymentServiceToken.StatusEnum': PaymentServiceToken.StatusEnum,
  'Payout.TypeEnum': Payout.TypeEnum,
  'Payout.CategoryEnum': Payout.CategoryEnum,
  'Payout.StatusEnum': Payout.StatusEnum,
  'PayoutInlineCardRequest.MethodEnum': PayoutInlineCardRequest.MethodEnum,
  'PayoutInlineCardRequest.SchemeEnum': PayoutInlineCardRequest.SchemeEnum,
  'PayoutMerchant.TypeEnum': PayoutMerchant.TypeEnum,
  'PayoutPaymentMethodRequest.MethodEnum':
    PayoutPaymentMethodRequest.MethodEnum,
  'PayoutPaymentMethodRequest.SchemeEnum':
    PayoutPaymentMethodRequest.SchemeEnum,
  'PayoutRequest.CategoryEnum': PayoutRequest.CategoryEnum,
  'PayoutStoredCardRequest.MethodEnum': PayoutStoredCardRequest.MethodEnum,
  'RedirectRequest.MethodEnum': RedirectRequest.MethodEnum,
  'Refund.TypeEnum': Refund.TypeEnum,
  'Refund.StatusEnum': Refund.StatusEnum,
  'Refund.TargetTypeEnum': Refund.TargetTypeEnum,
  'Report.ScheduleEnum': Report.ScheduleEnum,
  'Report.TypeEnum': Report.TypeEnum,
  'Report.CreatorTypeEnum': Report.CreatorTypeEnum,
  'ReportCreate.ScheduleEnum': ReportCreate.ScheduleEnum,
  'ReportExecution.TypeEnum': ReportExecution.TypeEnum,
  'ReportExecution.StatusEnum': ReportExecution.StatusEnum,
  'ReportExecutionSummary.TypeEnum': ReportExecutionSummary.TypeEnum,
  'ReportExecutionSummary.StatusEnum': ReportExecutionSummary.StatusEnum,
  'ReportSpec.ModelEnum': ReportSpec.ModelEnum,
  'ReportSummary.TypeEnum': ReportSummary.TypeEnum,
  'ReportSummary.CreatorTypeEnum': ReportSummary.CreatorTypeEnum,
  'Role.TypeEnum': Role.TypeEnum,
  'RoleAssignment.TypeEnum': RoleAssignment.TypeEnum,
  'RoleAssignmentAssignee.TypeEnum': RoleAssignmentAssignee.TypeEnum,
  'RoleAssignmentRequestAssignee.TypeEnum':
    RoleAssignmentRequestAssignee.TypeEnum,
  'Settlement.TypeEnum': Settlement.TypeEnum,
  'ShippingDetail.TypeEnum': ShippingDetail.TypeEnum,
  'TaxId.KindEnum': TaxId.KindEnum,
  'ThreeDSecureAuthenticationRequestEvent.TypeEnum':
    ThreeDSecureAuthenticationRequestEvent.TypeEnum,
  'ThreeDSecureAuthenticationRequestEvent.NameEnum':
    ThreeDSecureAuthenticationRequestEvent.NameEnum,
  'ThreeDSecureData.SchemeEnum': ThreeDSecureData.SchemeEnum,
  'ThreeDSecureDataV1.SchemeEnum': ThreeDSecureDataV1.SchemeEnum,
  'ThreeDSecureDataV1V2.DirectoryResponseEnum':
    ThreeDSecureDataV1V2.DirectoryResponseEnum,
  'ThreeDSecureDataV1V2.SchemeEnum': ThreeDSecureDataV1V2.SchemeEnum,
  'ThreeDSecureDataV1V2.AuthenticationResponseEnum':
    ThreeDSecureDataV1V2.AuthenticationResponseEnum,
  'ThreeDSecureDataV2.DirectoryResponseEnum':
    ThreeDSecureDataV2.DirectoryResponseEnum,
  'ThreeDSecureDataV2.SchemeEnum': ThreeDSecureDataV2.SchemeEnum,
  'ThreeDSecureDataV2.AuthenticationResponseEnum':
    ThreeDSecureDataV2.AuthenticationResponseEnum,
  'ThreeDSecurePreparationRequestEvent.TypeEnum':
    ThreeDSecurePreparationRequestEvent.TypeEnum,
  'ThreeDSecurePreparationRequestEvent.NameEnum':
    ThreeDSecurePreparationRequestEvent.NameEnum,
  'ThreeDSecureRequestErrorEvent.TypeEnum':
    ThreeDSecureRequestErrorEvent.TypeEnum,
  'ThreeDSecureRequestErrorEvent.NameEnum':
    ThreeDSecureRequestErrorEvent.NameEnum,
  'ThreeDSecureResultRequestEvent.TypeEnum':
    ThreeDSecureResultRequestEvent.TypeEnum,
  'ThreeDSecureResultRequestEvent.NameEnum':
    ThreeDSecureResultRequestEvent.NameEnum,
  'ThreeDSecureSuccessEvent.TypeEnum': ThreeDSecureSuccessEvent.TypeEnum,
  'ThreeDSecureSuccessEvent.NameEnum': ThreeDSecureSuccessEvent.NameEnum,
  'ThreeDSecureSuccessEventContext.MethodEnum':
    ThreeDSecureSuccessEventContext.MethodEnum,
  'ThreeDSecureSummary.StatusEnum': ThreeDSecureSummary.StatusEnum,
  'ThreeDSecureSummary.MethodEnum': ThreeDSecureSummary.MethodEnum,
  'ThreeDSecureV2.AuthenticationResponseEnum':
    ThreeDSecureV2.AuthenticationResponseEnum,
  'ThreeDSecureV2.DirectoryResponseEnum': ThreeDSecureV2.DirectoryResponseEnum,
  'TokenizedRequest.MethodEnum': TokenizedRequest.MethodEnum,
  'Transaction.TypeEnum': Transaction.TypeEnum,
  'Transaction.AvsResponseCodeEnum': Transaction.AvsResponseCodeEnum,
  'Transaction.CvvResponseCodeEnum': Transaction.CvvResponseCodeEnum,
  'Transaction.InstrumentTypeEnum': Transaction.InstrumentTypeEnum,
  'Transaction.IntentEnum': Transaction.IntentEnum,
  'Transaction.IntentOutcomeEnum': Transaction.IntentOutcomeEnum,
  'Transaction.MethodEnum': Transaction.MethodEnum,
  'Transaction.PaymentSourceEnum': Transaction.PaymentSourceEnum,
  'Transaction.StatusEnum': Transaction.StatusEnum,
  'TransactionBuyer.TypeEnum': TransactionBuyer.TypeEnum,
  'TransactionBuyerRequestShippingDetails.TypeEnum':
    TransactionBuyerRequestShippingDetails.TypeEnum,
  'TransactionCaptureRequestAirline.TicketDeliveryMethodEnum':
    TransactionCaptureRequestAirline.TicketDeliveryMethodEnum,
  'TransactionCardRequest.MethodEnum': TransactionCardRequest.MethodEnum,
  'TransactionCheckoutSessionRequest.MethodEnum':
    TransactionCheckoutSessionRequest.MethodEnum,
  'TransactionHistoryEvent.TypeEnum': TransactionHistoryEvent.TypeEnum,
  'TransactionHistoryEvent.NameEnum': TransactionHistoryEvent.NameEnum,
  'TransactionNetworkTokenApplePayRequest.MethodEnum':
    TransactionNetworkTokenApplePayRequest.MethodEnum,
  'TransactionNetworkTokenApplePayRequest.CardSourceEnum':
    TransactionNetworkTokenApplePayRequest.CardSourceEnum,
  'TransactionNetworkTokenGooglePayRequest.MethodEnum':
    TransactionNetworkTokenGooglePayRequest.MethodEnum,
  'TransactionNetworkTokenGooglePayRequest.CardSourceEnum':
    TransactionNetworkTokenGooglePayRequest.CardSourceEnum,
  'TransactionNetworkTokenRequest.MethodEnum':
    TransactionNetworkTokenRequest.MethodEnum,
  'TransactionPaymentMethod.TypeEnum': TransactionPaymentMethod.TypeEnum,
  'TransactionPaymentMethod.ApprovalTargetEnum':
    TransactionPaymentMethod.ApprovalTargetEnum,
  'TransactionPaymentMethod.MethodEnum': TransactionPaymentMethod.MethodEnum,
  'TransactionPaymentMethod.SchemeEnum': TransactionPaymentMethod.SchemeEnum,
  'TransactionPaymentMethodRequest.MethodEnum':
    TransactionPaymentMethodRequest.MethodEnum,
  'TransactionPaymentService.TypeEnum': TransactionPaymentService.TypeEnum,
  'TransactionPaymentService.MethodEnum': TransactionPaymentService.MethodEnum,
  'TransactionRedirectRequest.MethodEnum':
    TransactionRedirectRequest.MethodEnum,
  'TransactionRefundRequest.TargetTypeEnum':
    TransactionRefundRequest.TargetTypeEnum,
  'TransactionRequest.IntentEnum': TransactionRequest.IntentEnum,
  'TransactionRequest.PaymentSourceEnum': TransactionRequest.PaymentSourceEnum,
  'TransactionRequestBrowserInfo.UserDeviceEnum':
    TransactionRequestBrowserInfo.UserDeviceEnum,
  'TransactionRetriesReportSpec.ModelEnum':
    TransactionRetriesReportSpec.ModelEnum,
  'TransactionShippingDetails.TypeEnum': TransactionShippingDetails.TypeEnum,
  'TransactionStatusSummary.TypeEnum': TransactionStatusSummary.TypeEnum,
  'TransactionStatusSummary.StatusEnum': TransactionStatusSummary.StatusEnum,
  'TransactionSummary.TypeEnum': TransactionSummary.TypeEnum,
  'TransactionSummary.InstrumentTypeEnum':
    TransactionSummary.InstrumentTypeEnum,
  'TransactionSummary.IntentEnum': TransactionSummary.IntentEnum,
  'TransactionSummary.MethodEnum': TransactionSummary.MethodEnum,
  'TransactionSummary.StatusEnum': TransactionSummary.StatusEnum,
  'TransactionsReportSpec.ModelEnum': TransactionsReportSpec.ModelEnum,
  'TransactionsReportSpecParams.FieldsEnum':
    TransactionsReportSpecParams.FieldsEnum,
  'TransactionsReportSpecParamsFilters.StatusEnum':
    TransactionsReportSpecParamsFilters.StatusEnum,
  'TransactionsReportSpecParamsFilters.MethodEnum':
    TransactionsReportSpecParamsFilters.MethodEnum,
  'TransactionsReportSpecParamsFilters.SchemeEnum':
    TransactionsReportSpecParamsFilters.SchemeEnum,
  'TransactionsReportSpecParamsFilters.ThreeDSecureStatusEnum':
    TransactionsReportSpecParamsFilters.ThreeDSecureStatusEnum,
  'TransactionsReportSpecParamsFilters.PaymentSourceEnum':
    TransactionsReportSpecParamsFilters.PaymentSourceEnum,
  'UserRole.TypeEnum': UserRole.TypeEnum,
  'WebhookSubscription.TypeEnum': WebhookSubscription.TypeEnum,
  'WebhookSubscriptionAuthentication.KindEnum':
    WebhookSubscriptionAuthentication.KindEnum,
}

let typeMap: { [index: string]: any } = {
  APIKeyPairCreate: APIKeyPairCreate,
  APIKeyPairUpdate: APIKeyPairUpdate,
  AccountUpdaterInquirySummary: AccountUpdaterInquirySummary,
  AccountUpdaterJob: AccountUpdaterJob,
  AccountUpdaterJobCreate: AccountUpdaterJobCreate,
  Address: Address,
  Airline: Airline,
  AirlineLeg: AirlineLeg,
  AirlinePassenger: AirlinePassenger,
  AntiFraudDecisionErrorEvent: AntiFraudDecisionErrorEvent,
  AntiFraudDecisionErrorEventContext: AntiFraudDecisionErrorEventContext,
  AntiFraudDecisionEvent: AntiFraudDecisionEvent,
  AntiFraudDecisionEventContext: AntiFraudDecisionEventContext,
  AntiFraudDecisionSkippedEvent: AntiFraudDecisionSkippedEvent,
  AntiFraudDecisionSkippedEventContext: AntiFraudDecisionSkippedEventContext,
  AntiFraudDecisionUpdateErrorEvent: AntiFraudDecisionUpdateErrorEvent,
  AntiFraudDecisionUpdateErrorEventContext:
    AntiFraudDecisionUpdateErrorEventContext,
  AntiFraudDecisionUpdateEvent: AntiFraudDecisionUpdateEvent,
  AntiFraudDecisionUpdateEventContext: AntiFraudDecisionUpdateEventContext,
  AntiFraudServiceCreate: AntiFraudServiceCreate,
  AntiFraudServiceDefinition: AntiFraudServiceDefinition,
  AntiFraudServiceDefinitionFieldsInner: AntiFraudServiceDefinitionFieldsInner,
  AntiFraudServiceUpdate: AntiFraudServiceUpdate,
  AntiFraudServiceUpdateFieldsInner: AntiFraudServiceUpdateFieldsInner,
  AntiFraudTransactionStatusUpdateErrorEvent:
    AntiFraudTransactionStatusUpdateErrorEvent,
  AntiFraudTransactionStatusUpdateErrorEventContext:
    AntiFraudTransactionStatusUpdateErrorEventContext,
  AntiFraudTransactionStatusUpdateEvent: AntiFraudTransactionStatusUpdateEvent,
  AntiFraudTransactionStatusUpdateEventContext:
    AntiFraudTransactionStatusUpdateEventContext,
  AntiFraudWebhookEvent: AntiFraudWebhookEvent,
  AntiFraudWebhookEventContext: AntiFraudWebhookEventContext,
  ApiLog: ApiLog,
  ApiLogResponseBody: ApiLogResponseBody,
  ApiLogResponseBodyDetails: ApiLogResponseBodyDetails,
  ApiLogs: ApiLogs,
  ApplePayRequest: ApplePayRequest,
  ApplePaySessionRequest: ApplePaySessionRequest,
  AuditLog: AuditLog,
  AuditLogResource: AuditLogResource,
  AuditLogUser: AuditLogUser,
  AuditLogs: AuditLogs,
  BINLookupRequest: BINLookupRequest,
  BINLookupRequestContext: BINLookupRequestContext,
  BillingDetails: BillingDetails,
  BillingDetailsAddress: BillingDetailsAddress,
  BillingDetailsRequest: BillingDetailsRequest,
  BillingDetailsRequestAddress: BillingDetailsRequestAddress,
  BillingDetailsRequestTaxId: BillingDetailsRequestTaxId,
  BillingDetailsTaxId: BillingDetailsTaxId,
  BillingDetailsUpdateRequest: BillingDetailsUpdateRequest,
  BillingDetailsUpdateRequestAddress: BillingDetailsUpdateRequestAddress,
  BrowserInfo: BrowserInfo,
  Buyer: Buyer,
  BuyerBillingDetails: BuyerBillingDetails,
  BuyerRequest: BuyerRequest,
  BuyerRequestBillingDetails: BuyerRequestBillingDetails,
  BuyerSnapshot: BuyerSnapshot,
  BuyerSnapshotBillingDetails: BuyerSnapshotBillingDetails,
  BuyerUpdate: BuyerUpdate,
  BuyerUpdateBillingDetails: BuyerUpdateBillingDetails,
  Buyers: Buyers,
  CardDetails: CardDetails,
  CardRequest: CardRequest,
  CardSchemeDefinition: CardSchemeDefinition,
  CardSchemeDefinitions: CardSchemeDefinitions,
  CartItem: CartItem,
  CheckoutSession: CheckoutSession,
  CheckoutSessionAirline: CheckoutSessionAirline,
  CheckoutSessionCreateRequest: CheckoutSessionCreateRequest,
  CheckoutSessionCreateRequestAirline: CheckoutSessionCreateRequestAirline,
  CheckoutSessionPaymentMethod: CheckoutSessionPaymentMethod,
  CheckoutSessionPaymentMethodDetails: CheckoutSessionPaymentMethodDetails,
  CheckoutSessionRequest: CheckoutSessionRequest,
  CheckoutSessionUpdateRequest: CheckoutSessionUpdateRequest,
  ClickToPaySessionRequest: ClickToPaySessionRequest,
  Connection: Connection,
  ConnectionDefinition: ConnectionDefinition,
  ConnectionDefinitions: ConnectionDefinitions,
  ConnectionOptions: ConnectionOptions,
  ConnectionOptionsAdyenCard: ConnectionOptionsAdyenCard,
  ConnectionOptionsAdyenSepa: ConnectionOptionsAdyenSepa,
  ConnectionOptionsCybersourceAntiFraud: ConnectionOptionsCybersourceAntiFraud,
  ConnectionOptionsCybersourceCard: ConnectionOptionsCybersourceCard,
  ConnectionOptionsCybersourceIdeal: ConnectionOptionsCybersourceIdeal,
  ConnectionOptionsCybersourceKcp: ConnectionOptionsCybersourceKcp,
  ConnectionOptionsFiservCard: ConnectionOptionsFiservCard,
  ConnectionOptionsFiservCardInstallmentOptions:
    ConnectionOptionsFiservCardInstallmentOptions,
  ConnectionOptionsForterAntiFraud: ConnectionOptionsForterAntiFraud,
  ConnectionOptionsForterAntiFraudCartItemsInner:
    ConnectionOptionsForterAntiFraudCartItemsInner,
  ConnectionOptionsForterAntiFraudCartItemsInnerBasicItemData:
    ConnectionOptionsForterAntiFraudCartItemsInnerBasicItemData,
  ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInner:
    ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInner,
  ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerAddress:
    ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerAddress,
  ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerComments:
    ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerComments,
  ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPersonalDetails:
    ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPersonalDetails,
  ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPhoneInner:
    ConnectionOptionsForterAntiFraudCartItemsInnerBeneficiariesInnerPhoneInner,
  ConnectionOptionsForterAntiFraudCartItemsInnerDeliveryDetails:
    ConnectionOptionsForterAntiFraudCartItemsInnerDeliveryDetails,
  ConnectionOptionsForterAntiFraudTotalDiscount:
    ConnectionOptionsForterAntiFraudTotalDiscount,
  ConnectionOptionsForterAntiFraudTotalDiscountCouponDiscountAmount:
    ConnectionOptionsForterAntiFraudTotalDiscountCouponDiscountAmount,
  ConnectionOptionsGivingblockGivingblock:
    ConnectionOptionsGivingblockGivingblock,
  ConnectionOptionsLatitudeLatitude: ConnectionOptionsLatitudeLatitude,
  ConnectionOptionsPaypalPaypal: ConnectionOptionsPaypalPaypal,
  ConnectionOptionsPaypalPaypalAdditionalDataInner:
    ConnectionOptionsPaypalPaypalAdditionalDataInner,
  ConnectionOptionsPowertranzCard: ConnectionOptionsPowertranzCard,
  ConnectionOptionsStripeCard: ConnectionOptionsStripeCard,
  ConnectionOptionsStripeCardStripeConnect:
    ConnectionOptionsStripeCardStripeConnect,
  Connections: Connections,
  Cryptogram: Cryptogram,
  DetailedSettlementReportSpec: DetailedSettlementReportSpec,
  DetailedSettlementReportSpecParams: DetailedSettlementReportSpecParams,
  DetailedSettlementReportSpecParamsFilters:
    DetailedSettlementReportSpecParamsFilters,
  DetailedSettlementReportSpecParamsFiltersIngestedAt:
    DetailedSettlementReportSpecParamsFiltersIngestedAt,
  DigitalWallet: DigitalWallet,
  DigitalWalletApplePayTokenDecrypted: DigitalWalletApplePayTokenDecrypted,
  DigitalWalletApplePayTokenDecryptedContext:
    DigitalWalletApplePayTokenDecryptedContext,
  DigitalWalletClickToPayFields: DigitalWalletClickToPayFields,
  DigitalWalletClickToPayTokenDecrypted: DigitalWalletClickToPayTokenDecrypted,
  DigitalWalletClickToPayTokenDecryptedContext:
    DigitalWalletClickToPayTokenDecryptedContext,
  DigitalWalletDomain: DigitalWalletDomain,
  DigitalWalletGooglePayTokenDecrypted: DigitalWalletGooglePayTokenDecrypted,
  DigitalWalletGooglePayTokenDecryptedContext:
    DigitalWalletGooglePayTokenDecryptedContext,
  DigitalWalletRequest: DigitalWalletRequest,
  DigitalWalletUpdate: DigitalWalletUpdate,
  DigitalWallets: DigitalWallets,
  Error400BadRequest: Error400BadRequest,
  Error401Unauthorized: Error401Unauthorized,
  Error403Forbidden: Error403Forbidden,
  Error404NotFound: Error404NotFound,
  Error409DuplicateRecord: Error409DuplicateRecord,
  Error429TooManyRequests: Error429TooManyRequests,
  ErrorDetail: ErrorDetail,
  GiftCard: GiftCard,
  GiftCardBalanceNewRequest: GiftCardBalanceNewRequest,
  GiftCardBalanceRequest: GiftCardBalanceRequest,
  GiftCardBalanceStoredRequest: GiftCardBalanceStoredRequest,
  GiftCardBalancesRequest: GiftCardBalancesRequest,
  GiftCardBuyer: GiftCardBuyer,
  GiftCardRedemption: GiftCardRedemption,
  GiftCardRedemptionFailed: GiftCardRedemptionFailed,
  GiftCardRedemptionFailedContext: GiftCardRedemptionFailedContext,
  GiftCardRedemptionSucceeded: GiftCardRedemptionSucceeded,
  GiftCardRedemptionSucceededContext: GiftCardRedemptionSucceededContext,
  GiftCardRefundFailed: GiftCardRefundFailed,
  GiftCardRefundFailedContext: GiftCardRefundFailedContext,
  GiftCardRefundSucceeded: GiftCardRefundSucceeded,
  GiftCardService: GiftCardService,
  GiftCardServiceCreateRequest: GiftCardServiceCreateRequest,
  GiftCardServiceCreateRequestFieldsInner:
    GiftCardServiceCreateRequestFieldsInner,
  GiftCardServiceDefinition: GiftCardServiceDefinition,
  GiftCardServiceFieldsInner: GiftCardServiceFieldsInner,
  GiftCardServiceSnapshot: GiftCardServiceSnapshot,
  GiftCardServiceUpdateRequest: GiftCardServiceUpdateRequest,
  GiftCardServiceUpdateRequestFieldsInner:
    GiftCardServiceUpdateRequestFieldsInner,
  GiftCardServiceVerifyRequest: GiftCardServiceVerifyRequest,
  GiftCardServiceVerifyRequestFieldsInner:
    GiftCardServiceVerifyRequestFieldsInner,
  GiftCardSnapshot: GiftCardSnapshot,
  GiftCardStoreRequest: GiftCardStoreRequest,
  GiftCardSummary: GiftCardSummary,
  GiftCards: GiftCards,
  GiftCardsSummary: GiftCardsSummary,
  GooglePayRequest: GooglePayRequest,
  GooglePayRequestAssuranceDetails: GooglePayRequestAssuranceDetails,
  GooglePaySessionRequest: GooglePaySessionRequest,
  IssueCryptogramRequest: IssueCryptogramRequest,
  Merchant: Merchant,
  MerchantAccount: MerchantAccount,
  MerchantAccountCreate: MerchantAccountCreate,
  MerchantAccountUpdate: MerchantAccountUpdate,
  MerchantAccounts: MerchantAccounts,
  MerchantAddress: MerchantAddress,
  MerchantProfile: MerchantProfile,
  MerchantProfileAmex: MerchantProfileAmex,
  MerchantProfileDankort: MerchantProfileDankort,
  MerchantProfileDiscover: MerchantProfileDiscover,
  MerchantProfileJcb: MerchantProfileJcb,
  MerchantProfileMastercard: MerchantProfileMastercard,
  MerchantProfileScheme: MerchantProfileScheme,
  MerchantProfileSchemeSummary: MerchantProfileSchemeSummary,
  MerchantProfileSummary: MerchantProfileSummary,
  MerchantProfileSummaryAmex: MerchantProfileSummaryAmex,
  MerchantProfileSummaryDankort: MerchantProfileSummaryDankort,
  MerchantProfileSummaryDiscover: MerchantProfileSummaryDiscover,
  MerchantProfileSummaryJcb: MerchantProfileSummaryJcb,
  MerchantProfileSummaryMastercard: MerchantProfileSummaryMastercard,
  MerchantProfileSummaryUnionpay: MerchantProfileSummaryUnionpay,
  MerchantProfileSummaryVisa: MerchantProfileSummaryVisa,
  MerchantProfileUnionpay: MerchantProfileUnionpay,
  MerchantProfileVisa: MerchantProfileVisa,
  MerchantRequest: MerchantRequest,
  NetworkToken: NetworkToken,
  NetworkTokenCryptogramProvisionFailed: NetworkTokenCryptogramProvisionFailed,
  NetworkTokenCryptogramProvisionFailedContext:
    NetworkTokenCryptogramProvisionFailedContext,
  NetworkTokenCryptogramProvisionSucceeded:
    NetworkTokenCryptogramProvisionSucceeded,
  NetworkTokenCryptogramProvisionSucceededContext:
    NetworkTokenCryptogramProvisionSucceededContext,
  NetworkTokenProvisionFailed: NetworkTokenProvisionFailed,
  NetworkTokenProvisionFailedContext: NetworkTokenProvisionFailedContext,
  NetworkTokenProvisionSucceeded: NetworkTokenProvisionSucceeded,
  NetworkTokenRequest: NetworkTokenRequest,
  NetworkTokens: NetworkTokens,
  PaymentConnectorExternalTransactionRequest:
    PaymentConnectorExternalTransactionRequest,
  PaymentConnectorExternalTransactionRequestContext:
    PaymentConnectorExternalTransactionRequestContext,
  PaymentConnectorReportTransactionSettled:
    PaymentConnectorReportTransactionSettled,
  PaymentConnectorReportTransactionSettledContext:
    PaymentConnectorReportTransactionSettledContext,
  PaymentConnectorResponseTransactionAuthorizationFailedEvent:
    PaymentConnectorResponseTransactionAuthorizationFailedEvent,
  PaymentConnectorResponseTransactionAuthorizationFailedEventContext:
    PaymentConnectorResponseTransactionAuthorizationFailedEventContext,
  PaymentConnectorResponseTransactionAuthorizationSucceededEvent:
    PaymentConnectorResponseTransactionAuthorizationSucceededEvent,
  PaymentConnectorResponseTransactionAuthorizationSucceededEventContext:
    PaymentConnectorResponseTransactionAuthorizationSucceededEventContext,
  PaymentConnectorResponseTransactionCaptureDeclinedEvent:
    PaymentConnectorResponseTransactionCaptureDeclinedEvent,
  PaymentConnectorResponseTransactionCaptureDeclinedEventContext:
    PaymentConnectorResponseTransactionCaptureDeclinedEventContext,
  PaymentConnectorResponseTransactionCaptureFailedEvent:
    PaymentConnectorResponseTransactionCaptureFailedEvent,
  PaymentConnectorResponseTransactionCaptureSucceededEvent:
    PaymentConnectorResponseTransactionCaptureSucceededEvent,
  PaymentConnectorResponseTransactionCaptureSucceededEventContext:
    PaymentConnectorResponseTransactionCaptureSucceededEventContext,
  PaymentConnectorResponseTransactionDeclinedEvent:
    PaymentConnectorResponseTransactionDeclinedEvent,
  PaymentConnectorResponseTransactionDeclinedEventContext:
    PaymentConnectorResponseTransactionDeclinedEventContext,
  PaymentConnectorResponseTransactionVoidDeclinedEvent:
    PaymentConnectorResponseTransactionVoidDeclinedEvent,
  PaymentConnectorResponseTransactionVoidDeclinedEventContext:
    PaymentConnectorResponseTransactionVoidDeclinedEventContext,
  PaymentConnectorResponseTransactionVoidFailedEvent:
    PaymentConnectorResponseTransactionVoidFailedEvent,
  PaymentConnectorResponseTransactionVoidFailedEventContext:
    PaymentConnectorResponseTransactionVoidFailedEventContext,
  PaymentConnectorResponseTransactionVoidSucceededEvent:
    PaymentConnectorResponseTransactionVoidSucceededEvent,
  PaymentConnectorResponseTransactionVoidSucceededEventContext:
    PaymentConnectorResponseTransactionVoidSucceededEventContext,
  PaymentLink: PaymentLink,
  PaymentLinkBuyer: PaymentLinkBuyer,
  PaymentLinkRequest: PaymentLinkRequest,
  PaymentLinkRequestConnectionOptions: PaymentLinkRequestConnectionOptions,
  PaymentLinkShippingDetails: PaymentLinkShippingDetails,
  PaymentLinkStatementDescriptor: PaymentLinkStatementDescriptor,
  PaymentLinks: PaymentLinks,
  PaymentMethod: PaymentMethod,
  PaymentMethodDefinition: PaymentMethodDefinition,
  PaymentMethodDefinitions: PaymentMethodDefinitions,
  PaymentMethodDetailsCard: PaymentMethodDetailsCard,
  PaymentMethodRequest: PaymentMethodRequest,
  PaymentMethodSnapshot: PaymentMethodSnapshot,
  PaymentMethodTokenized: PaymentMethodTokenized,
  PaymentMethods: PaymentMethods,
  PaymentMethodsTokenized: PaymentMethodsTokenized,
  PaymentOption: PaymentOption,
  PaymentOptionApprovalUI: PaymentOptionApprovalUI,
  PaymentOptionContext: PaymentOptionContext,
  PaymentOptions: PaymentOptions,
  PaymentOptionsRequest: PaymentOptionsRequest,
  PaymentService: PaymentService,
  PaymentServiceDefinition: PaymentServiceDefinition,
  PaymentServiceDefinitionConfiguration: PaymentServiceDefinitionConfiguration,
  PaymentServiceDefinitionReportingFieldsInner:
    PaymentServiceDefinitionReportingFieldsInner,
  PaymentServiceDefinitionSupportedFeatures:
    PaymentServiceDefinitionSupportedFeatures,
  PaymentServiceDefinitions: PaymentServiceDefinitions,
  PaymentServiceMerchantProfile: PaymentServiceMerchantProfile,
  PaymentServiceReportingFieldsInner: PaymentServiceReportingFieldsInner,
  PaymentServiceRequest: PaymentServiceRequest,
  PaymentServiceRequestFieldsInner: PaymentServiceRequestFieldsInner,
  PaymentServiceRequestMerchantProfile: PaymentServiceRequestMerchantProfile,
  PaymentServiceRequestReportingFieldsInner:
    PaymentServiceRequestReportingFieldsInner,
  PaymentServiceSession: PaymentServiceSession,
  PaymentServiceSnapshot: PaymentServiceSnapshot,
  PaymentServiceToken: PaymentServiceToken,
  PaymentServiceTokenRequest: PaymentServiceTokenRequest,
  PaymentServiceTokens: PaymentServiceTokens,
  PaymentServiceUpdate: PaymentServiceUpdate,
  PaymentServiceUpdateFieldsInner: PaymentServiceUpdateFieldsInner,
  PaymentServiceUpdateMerchantProfile: PaymentServiceUpdateMerchantProfile,
  PaymentServiceUpdateReportingFieldsInner:
    PaymentServiceUpdateReportingFieldsInner,
  PaymentServices: PaymentServices,
  Payout: Payout,
  PayoutConnectionOptionsRequest: PayoutConnectionOptionsRequest,
  PayoutConnectionOptionsRequestCheckoutCard:
    PayoutConnectionOptionsRequestCheckoutCard,
  PayoutInlineCardRequest: PayoutInlineCardRequest,
  PayoutMerchant: PayoutMerchant,
  PayoutPaymentMethodRequest: PayoutPaymentMethodRequest,
  PayoutRequest: PayoutRequest,
  PayoutRequestBuyer: PayoutRequestBuyer,
  PayoutRequestConnectionOptions: PayoutRequestConnectionOptions,
  PayoutRequestMerchant: PayoutRequestMerchant,
  PayoutStoredCardRequest: PayoutStoredCardRequest,
  Payouts: Payouts,
  Recipient: Recipient,
  RecipientAddress: RecipientAddress,
  RecipientSnapshot: RecipientSnapshot,
  RedirectRequest: RedirectRequest,
  Refund: Refund,
  Refunds: Refunds,
  Report: Report,
  ReportCreate: ReportCreate,
  ReportExecution: ReportExecution,
  ReportExecutionSummary: ReportExecutionSummary,
  ReportExecutionSummaryContext: ReportExecutionSummaryContext,
  ReportExecutionUrl: ReportExecutionUrl,
  ReportExecutions: ReportExecutions,
  ReportSpec: ReportSpec,
  ReportSummary: ReportSummary,
  ReportUpdate: ReportUpdate,
  Reports: Reports,
  RequiredFields: RequiredFields,
  RequiredFieldsAddress: RequiredFieldsAddress,
  ResetPasswordRequest: ResetPasswordRequest,
  Role: Role,
  RoleAssignment: RoleAssignment,
  RoleAssignmentAssignee: RoleAssignmentAssignee,
  RoleAssignmentRequest: RoleAssignmentRequest,
  RoleAssignmentRequestAssignee: RoleAssignmentRequestAssignee,
  RoleAssignmentRequestRole: RoleAssignmentRequestRole,
  RoleAssignments: RoleAssignments,
  RolePermissions: RolePermissions,
  Roles: Roles,
  SetPasswordRequest: SetPasswordRequest,
  Settlement: Settlement,
  Settlements: Settlements,
  ShippingDetail: ShippingDetail,
  ShippingDetailAddress: ShippingDetailAddress,
  ShippingDetailRequest: ShippingDetailRequest,
  ShippingDetailRequestAddress: ShippingDetailRequestAddress,
  ShippingDetailUpdateRequest: ShippingDetailUpdateRequest,
  ShippingDetails: ShippingDetails,
  StatementDescriptor: StatementDescriptor,
  TaxId: TaxId,
  ThreeDSecureAuthenticationRequestEvent:
    ThreeDSecureAuthenticationRequestEvent,
  ThreeDSecureAuthenticationRequestEventContext:
    ThreeDSecureAuthenticationRequestEventContext,
  ThreeDSecureData: ThreeDSecureData,
  ThreeDSecureDataV1: ThreeDSecureDataV1,
  ThreeDSecureDataV1V2: ThreeDSecureDataV1V2,
  ThreeDSecureDataV2: ThreeDSecureDataV2,
  ThreeDSecureError: ThreeDSecureError,
  ThreeDSecurePreparationRequestEvent: ThreeDSecurePreparationRequestEvent,
  ThreeDSecurePreparationRequestEventContext:
    ThreeDSecurePreparationRequestEventContext,
  ThreeDSecureRequestErrorEvent: ThreeDSecureRequestErrorEvent,
  ThreeDSecureRequestErrorEventContext: ThreeDSecureRequestErrorEventContext,
  ThreeDSecureResultRequestEvent: ThreeDSecureResultRequestEvent,
  ThreeDSecureResultRequestEventContext: ThreeDSecureResultRequestEventContext,
  ThreeDSecureSuccessEvent: ThreeDSecureSuccessEvent,
  ThreeDSecureSuccessEventContext: ThreeDSecureSuccessEventContext,
  ThreeDSecureSummary: ThreeDSecureSummary,
  ThreeDSecureSummaryErrorData: ThreeDSecureSummaryErrorData,
  ThreeDSecureV2: ThreeDSecureV2,
  TokenizedRequest: TokenizedRequest,
  Transaction: Transaction,
  TransactionBuyer: TransactionBuyer,
  TransactionBuyerRequest: TransactionBuyerRequest,
  TransactionBuyerRequestBillingDetails: TransactionBuyerRequestBillingDetails,
  TransactionBuyerRequestShippingDetails:
    TransactionBuyerRequestShippingDetails,
  TransactionCaptureRequest: TransactionCaptureRequest,
  TransactionCaptureRequestAirline: TransactionCaptureRequestAirline,
  TransactionCardRequest: TransactionCardRequest,
  TransactionCheckoutSessionRequest: TransactionCheckoutSessionRequest,
  TransactionGiftCardNewRequest: TransactionGiftCardNewRequest,
  TransactionGiftCardRequest: TransactionGiftCardRequest,
  TransactionGiftCardStoredRequest: TransactionGiftCardStoredRequest,
  TransactionHistoryEvent: TransactionHistoryEvent,
  TransactionHistoryEvents: TransactionHistoryEvents,
  TransactionNetworkTokenApplePayRequest:
    TransactionNetworkTokenApplePayRequest,
  TransactionNetworkTokenGooglePayRequest:
    TransactionNetworkTokenGooglePayRequest,
  TransactionNetworkTokenRequest: TransactionNetworkTokenRequest,
  TransactionPaymentMethod: TransactionPaymentMethod,
  TransactionPaymentMethodRequest: TransactionPaymentMethodRequest,
  TransactionPaymentService: TransactionPaymentService,
  TransactionRecipient: TransactionRecipient,
  TransactionRedirectRequest: TransactionRedirectRequest,
  TransactionRefundAllRequest: TransactionRefundAllRequest,
  TransactionRefundRequest: TransactionRefundRequest,
  TransactionRequest: TransactionRequest,
  TransactionRequestBrowserInfo: TransactionRequestBrowserInfo,
  TransactionRequestRecipient: TransactionRequestRecipient,
  TransactionRetriesReportSpec: TransactionRetriesReportSpec,
  TransactionRetriesReportSpecParams: TransactionRetriesReportSpecParams,
  TransactionRetriesReportSpecParamsFilters:
    TransactionRetriesReportSpecParamsFilters,
  TransactionRetriesReportSpecParamsFiltersCreatedAt:
    TransactionRetriesReportSpecParamsFiltersCreatedAt,
  TransactionShippingDetails: TransactionShippingDetails,
  TransactionStatusSummary: TransactionStatusSummary,
  TransactionSummary: TransactionSummary,
  Transactions: Transactions,
  TransactionsBatchCaptureRequest: TransactionsBatchCaptureRequest,
  TransactionsReportSpec: TransactionsReportSpec,
  TransactionsReportSpecParams: TransactionsReportSpecParams,
  TransactionsReportSpecParamsFilters: TransactionsReportSpecParamsFilters,
  TransactionsReportSpecParamsFiltersAuthorizedAt:
    TransactionsReportSpecParamsFiltersAuthorizedAt,
  TransactionsReportSpecParamsFiltersCapturedAt:
    TransactionsReportSpecParamsFiltersCapturedAt,
  TransactionsReportSpecParamsFiltersUpdatedAt:
    TransactionsReportSpecParamsFiltersUpdatedAt,
  TransactionsReportSpecParamsFiltersVoidedAt:
    TransactionsReportSpecParamsFiltersVoidedAt,
  UserCurrentUpdate: UserCurrentUpdate,
  UserRequest: UserRequest,
  UserRole: UserRole,
  UserUpdate: UserUpdate,
  WebhookSubscription: WebhookSubscription,
  WebhookSubscriptionAuthentication: WebhookSubscriptionAuthentication,
  WebhookSubscriptionRequest: WebhookSubscriptionRequest,
  WebhookSubscriptionRotateSecretRequest:
    WebhookSubscriptionRotateSecretRequest,
  WebhookSubscriptionUpdateRequest: WebhookSubscriptionUpdateRequest,
  WebhookSubscriptions: WebhookSubscriptions,
}

export class ObjectSerializer {
  public static findCorrectType(data: any, expectedType: string) {
    if (data == undefined) {
      return expectedType
    } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
      return expectedType
    } else if (expectedType === 'Date') {
      return expectedType
    } else {
      if (enumsMap[expectedType]) {
        return expectedType
      }

      if (!typeMap[expectedType]) {
        return expectedType // w/e we don't know the type
      }

      // Check the discriminator
      let discriminatorProperty = typeMap[expectedType].discriminator
      if (discriminatorProperty == null) {
        return expectedType // the type does not have a discriminator. use it.
      } else {
        if (data[discriminatorProperty]) {
          var discriminatorType = data[discriminatorProperty]
          if (typeMap[discriminatorType]) {
            return discriminatorType // use the type given in the discriminator
          } else {
            return expectedType // discriminator did not map to a type
          }
        } else {
          return expectedType // discriminator was not present (or an empty string)
        }
      }
    }
  }

  public static serialize(data: any, type: string) {
    if (data == undefined) {
      return data
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data
    } else if (type.lastIndexOf('Array<', 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace('Array<', '') // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1) // Type> => Type
      let transformedData: any[] = []
      for (let index = 0; index < data.length; index++) {
        let datum = data[index]
        transformedData.push(ObjectSerializer.serialize(datum, subType))
      }
      return transformedData
    } else if (type === 'Date') {
      return data.toISOString()
    } else {
      if (enumsMap[type]) {
        return data
      }
      if (!typeMap[type]) {
        // in case we dont know the type
        return data
      }

      // Get the actual type of this object
      type = this.findCorrectType(data, type)

      // get the map for the correct type.
      let attributeTypes = typeMap[type].getAttributeTypeMap()
      let instance: { [index: string]: any } = {}
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index]
        instance[attributeType.baseName] = ObjectSerializer.serialize(
          data[attributeType.name],
          attributeType.type
        )
      }
      return instance
    }
  }

  public static deserialize(data: any, type: string) {
    // polymorphism may change the actual type.
    type = ObjectSerializer.findCorrectType(data, type)
    if (data == undefined) {
      return data
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data
    } else if (type.lastIndexOf('Array<', 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace('Array<', '') // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1) // Type> => Type
      let transformedData: any[] = []
      for (let index = 0; index < data.length; index++) {
        let datum = data[index]
        transformedData.push(ObjectSerializer.deserialize(datum, subType))
      }
      return transformedData
    } else if (type === 'Date') {
      return new Date(data)
    } else {
      if (enumsMap[type]) {
        // is Enum
        return data
      }

      if (!typeMap[type]) {
        // dont know the type
        return data
      }
      let instance = new typeMap[type]()
      let attributeTypes = typeMap[type].getAttributeTypeMap()
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index]
        instance[attributeType.name] = ObjectSerializer.deserialize(
          data[attributeType.baseName],
          attributeType.type
        )
      }
      return instance
    }
  }
}

export interface Authentication {
  /**
   * Apply authentication settings to header and query params.
   */
  applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void
}

export class HttpBasicAuth implements Authentication {
  public username: string = ''
  public password: string = ''

  applyToRequest(requestOptions: localVarRequest.Options): void {
    requestOptions.auth = {
      username: this.username,
      password: this.password,
    }
  }
}

export class HttpBearerAuth implements Authentication {
  public accessToken: string | (() => string) = ''

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (requestOptions && requestOptions.headers) {
      const accessToken =
        typeof this.accessToken === 'function'
          ? this.accessToken()
          : this.accessToken
      requestOptions.headers['Authorization'] = 'Bearer ' + accessToken
    }
  }
}

export class ApiKeyAuth implements Authentication {
  public apiKey: string = ''

  constructor(
    private location: string,
    private paramName: string
  ) {}

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (this.location == 'query') {
      ;(<any>requestOptions.qs)[this.paramName] = this.apiKey
    } else if (
      this.location == 'header' &&
      requestOptions &&
      requestOptions.headers
    ) {
      requestOptions.headers[this.paramName] = this.apiKey
    } else if (
      this.location == 'cookie' &&
      requestOptions &&
      requestOptions.headers
    ) {
      if (requestOptions.headers['Cookie']) {
        requestOptions.headers['Cookie'] +=
          '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey)
      } else {
        requestOptions.headers['Cookie'] =
          this.paramName + '=' + encodeURIComponent(this.apiKey)
      }
    }
  }
}

export class OAuth implements Authentication {
  public accessToken: string = ''

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (requestOptions && requestOptions.headers) {
      requestOptions.headers['Authorization'] = 'Bearer ' + this.accessToken
    }
  }
}

export class VoidAuth implements Authentication {
  public username: string = ''
  public password: string = ''

  applyToRequest(_: localVarRequest.Options): void {
    // Do nothing
  }
}

export type Interceptor = (
  requestOptions: localVarRequest.Options
) => Promise<void> | void

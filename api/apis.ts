export * from './aPIKeyPairsApi';
import { APIKeyPairsApi } from './aPIKeyPairsApi';
export * from './aPILogsApi';
import { APILogsApi } from './aPILogsApi';
export * from './antiFraudServicesApi';
import { AntiFraudServicesApi } from './antiFraudServicesApi';
export * from './applePayCertificatesApi';
import { ApplePayCertificatesApi } from './applePayCertificatesApi';
export * from './auditLogsApi';
import { AuditLogsApi } from './auditLogsApi';
export * from './buyersApi';
import { BuyersApi } from './buyersApi';
export * from './cardDetailsApi';
import { CardDetailsApi } from './cardDetailsApi';
export * from './cardSchemeDefinitionsApi';
import { CardSchemeDefinitionsApi } from './cardSchemeDefinitionsApi';
export * from './checkoutSessionsApi';
import { CheckoutSessionsApi } from './checkoutSessionsApi';
export * from './connectionDefinitionsApi';
import { ConnectionDefinitionsApi } from './connectionDefinitionsApi';
export * from './connectionsApi';
import { ConnectionsApi } from './connectionsApi';
export * from './digitalWalletsApi';
import { DigitalWalletsApi } from './digitalWalletsApi';
export * from './flowApi';
import { FlowApi } from './flowApi';
export * from './merchantAccountsApi';
import { MerchantAccountsApi } from './merchantAccountsApi';
export * from './paymentMethodDefinitionsApi';
import { PaymentMethodDefinitionsApi } from './paymentMethodDefinitionsApi';
export * from './paymentMethodsApi';
import { PaymentMethodsApi } from './paymentMethodsApi';
export * from './paymentOptionsApi';
import { PaymentOptionsApi } from './paymentOptionsApi';
export * from './paymentServiceDefinitionsApi';
import { PaymentServiceDefinitionsApi } from './paymentServiceDefinitionsApi';
export * from './paymentServicesApi';
import { PaymentServicesApi } from './paymentServicesApi';
export * from './reportsApi';
import { ReportsApi } from './reportsApi';
export * from './rolesApi';
import { RolesApi } from './rolesApi';
export * from './sessionsApi';
import { SessionsApi } from './sessionsApi';
export * from './tokensApi';
import { TokensApi } from './tokensApi';
export * from './transactionsApi';
import { TransactionsApi } from './transactionsApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
export * from './vaultForwardApi';
import { VaultForwardApi } from './vaultForwardApi';
export * from './vaultForwardConfigurationsApi';
import { VaultForwardConfigurationsApi } from './vaultForwardConfigurationsApi';
export * from './vaultForwardDefinitionsApi';
import { VaultForwardDefinitionsApi } from './vaultForwardDefinitionsApi';
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [APIKeyPairsApi, APILogsApi, AntiFraudServicesApi, ApplePayCertificatesApi, AuditLogsApi, BuyersApi, CardDetailsApi, CardSchemeDefinitionsApi, CheckoutSessionsApi, ConnectionDefinitionsApi, ConnectionsApi, DigitalWalletsApi, FlowApi, MerchantAccountsApi, PaymentMethodDefinitionsApi, PaymentMethodsApi, PaymentOptionsApi, PaymentServiceDefinitionsApi, PaymentServicesApi, ReportsApi, RolesApi, SessionsApi, TokensApi, TransactionsApi, UsersApi, VaultForwardApi, VaultForwardConfigurationsApi, VaultForwardDefinitionsApi, WebhooksApi];

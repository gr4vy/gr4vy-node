export * from './antiFraudServicesApi';
import { AntiFraudServicesApi } from './antiFraudServicesApi';
export * from './auditLogsApi';
import { AuditLogsApi } from './auditLogsApi';
export * from './buyersApi';
import { BuyersApi } from './buyersApi';
export * from './cardSchemeDefinitionsApi';
import { CardSchemeDefinitionsApi } from './cardSchemeDefinitionsApi';
export * from './checkoutSessionsApi';
import { CheckoutSessionsApi } from './checkoutSessionsApi';
export * from './digitalWalletsApi';
import { DigitalWalletsApi } from './digitalWalletsApi';
export * from './paymentMethodDefinitionsApi';
import { PaymentMethodDefinitionsApi } from './paymentMethodDefinitionsApi';
export * from './paymentMethodTokensApi';
import { PaymentMethodTokensApi } from './paymentMethodTokensApi';
export * from './paymentMethodsApi';
import { PaymentMethodsApi } from './paymentMethodsApi';
export * from './paymentOptionsApi';
import { PaymentOptionsApi } from './paymentOptionsApi';
export * from './paymentServiceDefinitionsApi';
import { PaymentServiceDefinitionsApi } from './paymentServiceDefinitionsApi';
export * from './paymentServicesApi';
import { PaymentServicesApi } from './paymentServicesApi';
export * from './transactionsApi';
import { TransactionsApi } from './transactionsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AntiFraudServicesApi, AuditLogsApi, BuyersApi, CardSchemeDefinitionsApi, CheckoutSessionsApi, DigitalWalletsApi, PaymentMethodDefinitionsApi, PaymentMethodTokensApi, PaymentMethodsApi, PaymentOptionsApi, PaymentServiceDefinitionsApi, PaymentServicesApi, TransactionsApi];

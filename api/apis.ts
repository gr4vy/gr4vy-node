export * from './buyersApi';
import { BuyersApi } from './buyersApi';
export * from './paymentMethodsApi';
import { PaymentMethodsApi } from './paymentMethodsApi';
export * from './paymentOptionsApi';
import { PaymentOptionsApi } from './paymentOptionsApi';
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

export const APIS = [BuyersApi, PaymentMethodsApi, PaymentOptionsApi, PaymentServicesApi, TransactionsApi];

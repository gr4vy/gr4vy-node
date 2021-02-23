import Authentication from './authentication';

import {
    BuyersApi,
    PaymentMethodsApi,
    PaymentOptionsApi,
    PaymentServicesApi,
    TransactionsApi,
} from './api/apis';

class Client {
    baseUrl: string;
    debug: boolean;
    authentication: Authentication;
    apis: (
        | BuyersApi
        | PaymentMethodsApi
        | PaymentOptionsApi
        | PaymentServicesApi
        | TransactionsApi
    )[];

    // Buyers
    listBuyers: typeof BuyersApi.prototype.listBuyers;
    getBuyer: typeof BuyersApi.prototype.getBuyer;
    addBuyer: typeof BuyersApi.prototype.addBuyer;
    updateBuyer: typeof BuyersApi.prototype.updateBuyer;
    deleteBuyer: typeof BuyersApi.prototype.deleteBuyer;

    // Payment Methods
    listPaymentMethods: typeof PaymentMethodsApi.prototype.listPaymentMethods;
    getPaymentMethod: typeof PaymentMethodsApi.prototype.getPaymentMethod;
    storePaymentMethod: typeof PaymentMethodsApi.prototype.storePaymentMethod;
    deletePaymentMethod: typeof PaymentMethodsApi.prototype.deletePaymentMethod;

    // Payment Options
    listPaymentOptions: typeof PaymentOptionsApi.prototype.listPaymentOptions;

    // Payment Services
    listPaymentServices: typeof PaymentServicesApi.prototype.listPaymentServices;
    getPaymentService: typeof PaymentServicesApi.prototype.getPaymentService;
    addPaymentService: typeof PaymentServicesApi.prototype.addPaymentService;
    updatePaymentService: typeof PaymentServicesApi.prototype.updatePaymentService;
    deletePaymentService: typeof PaymentServicesApi.prototype.deletePaymentService;

    // Transactions
    authorizeNewTransaction: typeof TransactionsApi.prototype.authorizeNewTransaction;
    authorizeTransaction: typeof TransactionsApi.prototype.authorizeTransaction;
    captureTransaction: typeof TransactionsApi.prototype.captureTransaction;
    getTransaction: typeof TransactionsApi.prototype.getTransaction;
    listTransactions: typeof TransactionsApi.prototype.listTransactions;
    refundTransaction: typeof TransactionsApi.prototype.refundTransaction;

    constructor(options: Options) {
        this.validate(options);

        this.apis = [];
        this.authentication = new Authentication(options.key);
        this.debug = options.debug || false;
        this.baseUrl = options.baseUrl
            ? options.baseUrl
            : `https://api.${options.merchantId}.gr4vy.app`;

        // Buyers
        const ba = new BuyersApi(this.baseUrl);
        this.listBuyers = this.wrap(ba.listBuyers.bind(ba));
        this.getBuyer = this.wrap(ba.getBuyer.bind(ba));
        this.addBuyer = this.wrap(ba.addBuyer.bind(ba));
        this.updateBuyer = this.wrap(ba.updateBuyer.bind(ba));
        this.deleteBuyer = this.wrap(ba.deleteBuyer.bind(ba));
        this.apis.push(ba);

        // Payment Methods
        const pma = new PaymentMethodsApi(this.baseUrl);
        this.listPaymentMethods = this.wrap(pma.listPaymentMethods.bind(pma));
        this.getPaymentMethod = this.wrap(pma.getPaymentMethod.bind(pma));
        this.storePaymentMethod = this.wrap(pma.storePaymentMethod.bind(pma));
        this.deletePaymentMethod = this.wrap(pma.deletePaymentMethod.bind(pma));
        this.apis.push(pma);

        // Payment Options
        const poa = new PaymentOptionsApi(this.baseUrl);
        this.listPaymentOptions = this.wrap(poa.listPaymentOptions.bind(poa));
        this.apis.push(poa);

        // Payment Services
        const psa = new PaymentServicesApi(this.baseUrl);
        this.listPaymentServices = this.wrap(psa.listPaymentServices.bind(psa));
        this.getPaymentService = this.wrap(psa.getPaymentService.bind(psa));
        this.addPaymentService = this.wrap(psa.addPaymentService.bind(psa));
        this.updatePaymentService = this.wrap(
            psa.updatePaymentService.bind(psa)
        );
        this.deletePaymentService = this.wrap(
            psa.deletePaymentService.bind(psa)
        );
        this.apis.push(psa);

        const ta = new TransactionsApi(this.baseUrl);
        this.authorizeNewTransaction = this.wrap(
            ta.authorizeNewTransaction.bind(ta)
        );
        this.authorizeTransaction = this.wrap(ta.authorizeTransaction.bind(ta));
        this.captureTransaction = this.wrap(ta.captureTransaction.bind(ta));
        this.getTransaction = this.wrap(ta.getTransaction.bind(ta));
        this.listTransactions = this.wrap(ta.listTransactions.bind(ta));
        this.refundTransaction = this.wrap(ta.refundTransaction.bind(ta));
        this.apis.push(ta);
    }

    /**
     * Validates the passed in options.
     *
     * @param options
     */
    private validate(options: Options) {
        if (!options.keyId) {
            throw new Error('Missing argument `keyId`');
        }
        if (!options.key) {
            throw new Error('Missing argument `key`');
        }
    }

    public getBearerToken(): Promise<string> {
        return this.authentication.getSignedJWT();
    }

    /**
     * Wrap an API endpoint with pre and post processing
     * @param fn The API endpoint to wrap
     */
    private wrap<T extends (...args: any[]) => any>(fn: T): T {
        return <T>((...args: any[]) => {
            return this.preprocess(fn, args).then(() => {
                return fn(...args).then((data) => {
                    this.postprocess(fn, data);
                    return data;
                });
            });
        });
    }

    private async preprocess(fn, args) {
        this.updateBearerToken();
        this.log(
            `Gr4vy - Request - ${fn.name.replace('bound ', '.')}:`,
            ...args
        );
    }

    private async postprocess(fn, data) {
        this.log(
            `Gr4vy - Response - ${fn.name.replace('bound ', '.')} - ${
                data.response.statusCode
            }):`,
            data.body
        );
    }

    /**
     * Generates a new authorization token and attaches it to every API.
     */
    private async updateBearerToken(): Promise<void> {
        const token: string = await this.authentication.getSignedJWT();
        this.apis.forEach((api) => (api.accessToken = token));
    }

    /**
     * Internal logger
     */
    private log(...args: any[]) {
        if (this.debug) {
            console.debug(...args);
        }
    }
}

type Options = {
    merchantId: string;
    key: string;
    keyId: string;
    baseUrl?: string;
    debug?: boolean;
};

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
    apis: (
        | BuyersApi
        | PaymentMethodsApi
        | PaymentOptionsApi
        | PaymentServicesApi
        | TransactionsApi
    )[];

    listBuyers: typeof BuyersApi.prototype.listBuyers;
    getBuyer: typeof BuyersApi.prototype.getBuyer;
    addBuyer: typeof BuyersApi.prototype.addBuyer;
    updateBuyer: typeof BuyersApi.prototype.updateBuyer;
    deleteBuyer: typeof BuyersApi.prototype.deleteBuyer;

    listPaymentMethods: typeof PaymentMethodsApi.prototype.listPaymentMethods;
    getPaymentMethod: typeof PaymentMethodsApi.prototype.getPaymentMethod;
    storePaymentMethod: typeof PaymentMethodsApi.prototype.storePaymentMethod;
    deletePaymentMethod: typeof PaymentMethodsApi.prototype.deletePaymentMethod;

    listPaymentOptions: typeof PaymentOptionsApi.prototype.listPaymentOptions;

    listPaymentServices: typeof PaymentServicesApi.prototype.listPaymentServices;
    getPaymentService: typeof PaymentServicesApi.prototype.getPaymentService;
    addPaymentService: typeof PaymentServicesApi.prototype.addPaymentService;
    updatePaymentService: typeof PaymentServicesApi.prototype.updatePaymentService;
    deletePaymentService: typeof PaymentServicesApi.prototype.deletePaymentService;

    authorizeNewTransaction: typeof TransactionsApi.prototype.authorizeNewTransaction;
    authorizeTransaction: typeof TransactionsApi.prototype.authorizeTransaction;
    captureTransaction: typeof TransactionsApi.prototype.captureTransaction;
    getTransaction: typeof TransactionsApi.prototype.getTransaction;
    listTransactions: typeof TransactionsApi.prototype.listTransactions;
    refundTransaction: typeof TransactionsApi.prototype.refundTransaction;

    constructor(config: Config) {
        this.apis = [];
        this.debug = config.debug || false;
        this.baseUrl = config.baseUrl
            ? config.baseUrl
            : `https://api.${config.merchantId}.gr4vy.app`;

        const ba = new BuyersApi(this.baseUrl);
        this.listBuyers = this.auth(ba.listBuyers.bind(ba));
        this.getBuyer = this.auth(ba.getBuyer.bind(ba));
        this.addBuyer = this.auth(ba.addBuyer.bind(ba));
        this.updateBuyer = this.auth(ba.updateBuyer.bind(ba));
        this.deleteBuyer = this.auth(ba.deleteBuyer.bind(ba));
        this.apis.push(ba);

        const pma = new PaymentMethodsApi(this.baseUrl);
        this.listPaymentMethods = this.auth(pma.listPaymentMethods.bind(pma));
        this.getPaymentMethod = this.auth(pma.getPaymentMethod.bind(pma));
        this.storePaymentMethod = this.auth(pma.storePaymentMethod.bind(pma));
        this.deletePaymentMethod = this.auth(pma.deletePaymentMethod.bind(pma));
        this.apis.push(pma);

        const poa = new PaymentOptionsApi(this.baseUrl);
        this.listPaymentOptions = this.auth(poa.listPaymentOptions.bind(poa));
        this.apis.push(poa);

        const psa = new PaymentServicesApi(this.baseUrl);
        this.listPaymentServices = this.auth(psa.listPaymentServices.bind(psa));
        this.getPaymentService = this.auth(psa.getPaymentService.bind(psa));
        this.addPaymentService = this.auth(psa.addPaymentService.bind(psa));
        this.updatePaymentService = this.auth(
            psa.updatePaymentService.bind(psa)
        );
        this.deletePaymentService = this.auth(
            psa.deletePaymentService.bind(psa)
        );
        this.apis.push(psa);

        const ta = new TransactionsApi(this.baseUrl);
        this.authorizeNewTransaction = this.auth(
            ta.authorizeNewTransaction.bind(ta)
        );
        this.authorizeTransaction = this.auth(ta.authorizeTransaction.bind(ta));
        this.captureTransaction = this.auth(ta.captureTransaction.bind(ta));
        this.getTransaction = this.auth(ta.getTransaction.bind(ta));
        this.listTransactions = this.auth(ta.listTransactions.bind(ta));
        this.refundTransaction = this.auth(ta.refundTransaction.bind(ta));
        this.apis.push(ta);
    }

    /**
     * Wrap a function in an authentication handler
     * @param fn The function to wrap
     */
    private auth<T extends (...args: any[]) => any>(fn: T): T {
        return <T>((...args: any[]) => {
            this.generateJWT();
            this.log(
                `Gr4vy | Request${fn.name.replace('bound ', '.')}`,
                ...args
            );
            const promise = fn(...args);
            return promise.then((data) => {
                this.log(
                    `Gr4vy | Response(${data.response.statusCode}):`,

                    data.body
                );
                return data;
            });
        });
    }

    /**
     * Generates a new authorization token and attaches it to every API.
     */
    private generateJWT() {
        const token = String(Math.floor(Math.random() * 1000));
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

type Config = {
    baseUrl?: string;
    merchantId: string;
    debug?: boolean;
};

export { Client };
export * from './model/models';

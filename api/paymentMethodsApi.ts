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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { Error400BadRequest } from '../model/error400BadRequest';
import { Error401Unauthorized } from '../model/error401Unauthorized';
import { Error404NotFound } from '../model/error404NotFound';
import { Error409DuplicateRecord } from '../model/error409DuplicateRecord';
import { PaymentMethod } from '../model/paymentMethod';
import { PaymentMethodRequest } from '../model/paymentMethodRequest';
import { PaymentMethods } from '../model/paymentMethods';
import { PaymentMethodsTokenized } from '../model/paymentMethodsTokenized';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.plantly.gr4vy.app';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum PaymentMethodsApiApiKeys {
}

export class PaymentMethodsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'bearerAuth': new HttpBearerAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: PaymentMethodsApiApiKeys, value: string) {
        (this.authentications as any)[PaymentMethodsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.bearerAuth.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Removes a stored payment method.
     * @summary Delete payment method
     * @param paymentMethodId The ID of the payment method.
     */
    public async deletePaymentMethod (paymentMethodId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/payment-methods/{payment_method_id}'
            .replace('{' + 'payment_method_id' + '}', encodeURIComponent(String(paymentMethodId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'paymentMethodId' is not null or undefined
        if (paymentMethodId === null || paymentMethodId === undefined) {
            throw new Error('Required parameter paymentMethodId was null or undefined when calling deletePaymentMethod.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Gets the details for a stored payment method.
     * @summary Get payment method
     * @param paymentMethodId The ID of the payment method.
     */
    public async getPaymentMethod (paymentMethodId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PaymentMethod;  }> {
        const localVarPath = this.basePath + '/payment-methods/{payment_method_id}'
            .replace('{' + 'payment_method_id' + '}', encodeURIComponent(String(paymentMethodId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'paymentMethodId' is not null or undefined
        if (paymentMethodId === null || paymentMethodId === undefined) {
            throw new Error('Required parameter paymentMethodId was null or undefined when calling getPaymentMethod.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PaymentMethod;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "PaymentMethod");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns a list of stored payment methods for a buyer in a summarized format. Only payment methods that are compatible with at least one active payment service in that region are shown.
     * @summary List payment methods for buyer
     * @param buyerId Filters the results to only the items for which the &#x60;buyer&#x60; has an &#x60;id&#x60; that matches this value.
     * @param buyerExternalIdentifier Filters the results to only the items for which the &#x60;buyer&#x60; has an &#x60;external_identifier&#x60; that matches this value.
     * @param country Filters the results to only the items which support this country code. A country is formatted as 2-letter ISO country code.
     * @param currency Filters the results to only the items which support this currency code. A currency is formatted as 3-letter ISO currency code.
     * @param sortBy Used by the payment method filter to sort the results by an specific usage field.
     * @param orderBy Used to show the results ascending or descending order.
     */
    public async listBuyerPaymentMethods (buyerId?: string, buyerExternalIdentifier?: string, country?: string, currency?: string, sortBy?: 'last_used_at' | 'usage_count' | 'cit_last_used_at' | 'cit_usage_count', orderBy?: 'asc' | 'desc', options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PaymentMethodsTokenized;  }> {
        const localVarPath = this.basePath + '/buyers/payment-methods';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (buyerId !== undefined) {
            localVarQueryParameters['buyer_id'] = ObjectSerializer.serialize(buyerId, "string");
        }

        if (buyerExternalIdentifier !== undefined) {
            localVarQueryParameters['buyer_external_identifier'] = ObjectSerializer.serialize(buyerExternalIdentifier, "string");
        }

        if (country !== undefined) {
            localVarQueryParameters['country'] = ObjectSerializer.serialize(country, "string");
        }

        if (currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, "string");
        }

        if (sortBy !== undefined) {
            localVarQueryParameters['sort_by'] = ObjectSerializer.serialize(sortBy, "'last_used_at' | 'usage_count' | 'cit_last_used_at' | 'cit_usage_count'");
        }

        if (orderBy !== undefined) {
            localVarQueryParameters['order_by'] = ObjectSerializer.serialize(orderBy, "'asc' | 'desc'");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PaymentMethodsTokenized;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "PaymentMethodsTokenized");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns a list of stored payment methods.
     * @summary List payment methods
     * @param buyerId Filters the results to only the items for which the &#x60;buyer&#x60; has an &#x60;id&#x60; that matches this value.
     * @param buyerExternalIdentifier Filters the results to only the items for which the &#x60;buyer&#x60; has an &#x60;external_identifier&#x60; that matches this value.
     * @param status Filters the results to only the payment methods for which the &#x60;status&#x60; matches with any of the provided status values.
     * @param externalIdentifier Filters the results to only the items for which the resource has an &#x60;external_identifier&#x60; that matches this value.
     * @param limit Defines the maximum number of items to return for this request.
     * @param cursor A cursor that identifies the page of results to return. This is used to paginate the results of this API.  For the first page of results, this parameter can be left out. For additional pages, use the value returned by the API in the &#x60;next_cursor&#x60; field. Similarly the &#x60;previous_cursor&#x60; can be used to reverse backwards in the list.
     */
    public async listPaymentMethods (buyerId?: string, buyerExternalIdentifier?: string, status?: Array<'processing' | 'buyer_approval_required' | 'succeeded' | 'failed'>, externalIdentifier?: string, limit?: number, cursor?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PaymentMethods;  }> {
        const localVarPath = this.basePath + '/payment-methods';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (buyerId !== undefined) {
            localVarQueryParameters['buyer_id'] = ObjectSerializer.serialize(buyerId, "string");
        }

        if (buyerExternalIdentifier !== undefined) {
            localVarQueryParameters['buyer_external_identifier'] = ObjectSerializer.serialize(buyerExternalIdentifier, "string");
        }

        if (status !== undefined) {
            localVarQueryParameters['status'] = ObjectSerializer.serialize(status, "Array<'processing' | 'buyer_approval_required' | 'succeeded' | 'failed'>");
        }

        if (externalIdentifier !== undefined) {
            localVarQueryParameters['external_identifier'] = ObjectSerializer.serialize(externalIdentifier, "string");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (cursor !== undefined) {
            localVarQueryParameters['cursor'] = ObjectSerializer.serialize(cursor, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PaymentMethods;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "PaymentMethods");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Stores and vaults a new payment method.  Vaulting a card only stores its information but doesn\'t validate it against any PSP, so ephemeral data like the security code, often referred to as the CVV or CVD, won\'t be used. In order to validate the card data, a CIT (Customer Initiated Transaction) must be done, even if it\'s a zero-value one. 
     * @summary New payment method
     * @param paymentMethodRequest 
     */
    public async newPaymentMethod (paymentMethodRequest?: PaymentMethodRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PaymentMethod;  }> {
        const localVarPath = this.basePath + '/payment-methods';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(paymentMethodRequest, "PaymentMethodRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PaymentMethod;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "PaymentMethod");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}

import { BuyersApi } from './api/apis';
import { Buyers } from './model/models';
import http from 'http';

class Client {
    baseUrl: string;

    constructor(config: Config) {
        this.baseUrl = config.baseUrl
            ? config.baseUrl
            : `https://api.${config.merchantId}.gr4vy.app`;
    }

    /**
     * Returns a list of buyers.
     * @summary List buyers
     * @param externalIdentifier Filters the results to only the items for which the &#x60;external_identifier&#x60; matches this value.
     * @param limit Defines the maximum number of items to return for this request.
     * @param cursor A cursor that identifies the page of results to return. This is used to paginate the results of this API.  For the first page of results, this parameter can be left out. For additional pages, use the value returned by the API in the &#x60;next_cursor&#x60; field. Similarly the &#x60;previous_cursor&#x60; can be used to reverse backwards in the list.
     */
    public async listBuyers(
        externalIdentifier?: string,
        limit?: number,
        cursor?: string,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{ response: http.IncomingMessage; body: Buyers }> {
        const api = new BuyersApi(this.baseUrl);
        return api.listBuyers(externalIdentifier, limit, cursor, options);
    }
}

type Config = {
    baseUrl?: string;
    merchantId: string;
};

export { Client };

# Gr4vy SDK for Node

[![Module Version](https://badge.fury.io/js/%40gr4vy%2Fnode.svg)][npm]

Gr4vy provides any of your payment integrations through one unified API. For more details, visit [gr4vy.com](https://gr4vy.com).

## Installation

To add Gr4vy to your project, install the `@gr4vy/node` package as follows.

```sh
npm install @gr4vy/node --save
# yarn add @gr4vy/node
```

## Getting Started

To make your first API call, you will need to [request](https://gr4vy.com) a Gr4vy instance to be set up. Please contact our sales team for a demo.

Once you have been set up with a Gr4vy account you will need to head over to the **Integrations** panel and generate a private key. We recommend storing this key in a secure location but in this code sample we simply read the file from disk.

```js
const fs = require('fs')
const { Client, BuyerRequest } = require('@gr4vy/node')
// or: import { Client, BuyerRequest } from "@gr4vy/node";

const key = String(fs.readFileSync('./private.key'))

const client = new Client({
  gr4vyId: 'YOUR_GR4VY_ID',
  privateKey: key,
  environment: 'production',
})

const buyerRequest = new BuyerRequest()
buyerRequest.displayName = 'John L.'
const buyer = await client.newBuyer(buyerRequest)
console.log(buyer)
// {
//   response: {...} the HTTP response object
//   body {...} the parsed JSON
// }
```

## Environment

The SDK defaults the environment to "sandbox", to send transactions to production, set the environment in `Client`:

```js
const client = new Client({
  gr4vyId: 'YOUR_GR4VY_ID',
  privateKey: key,
  environment: 'sandbox',
})

const client = new Client({
  gr4vyId: 'YOUR_GR4VY_ID',
  privateKey: key,
  environment: 'production',
})
```

## Gr4vy Embed

To create a token for Gr4vy Embed, call the `client.getEmbedToken()` function
with the amount, currency, and optional buyer information for Gr4vy Embed.

```js
const token = await client.getEmbedToken({
  amount: 1299,
  currency: 'USD',
  buyerExternalIdentifier: 'user-1234',
  // or: buyerId: ...
})
```

You can now pass this token to your frontend where it can be used to
authenticate Gr4vy Embed.

The `buyerId` and `buyerExternalIdentifier` fields can be used to allow the
token to pull in previously stored payment methods for a user. A buyer needs to
be created before it can be used in this way.

```js
const buyerRequest = new BuyerRequest()
buyerRequest.displayName = 'John L.'
buyerRequest.externalIdentifier = 'user-1234'
const buyer = await client.newBuyer(buyerRequest)

const token = await client.getEmbedToken({
  amount: 1299,
  currency: 'USD',
  buyerId: buyer.body.id,
})
```

## Initialization

The client can be initialized with the Gr4vy ID (`gr4vyId`) and the private key.

```js
const client = new Client({
  gr4vyId: 'acme',
  privateKey: key,
})
```

Alternatively, instead of the `gr4vyId` it can be initialized with the `baseUrl` of the server to use directly.

```js
const client = new Client({
  baseUrl: 'https://api.acme.gr4vy.app',
  privateKey: key,
})
```

Your API key can be created in your admin panel on the **Integrations** tab.

## Making API calls

This library conveniently maps every API path to a seperate function. For example, `GET /buyers?limit=100` would be:

```js
client.listBuyers(null, 100)
```

To create or update a resource, the API requires a request object for that
resource that is conventiently named `<Resource>Request` or
`<Resource>UpdateRequest`.

For example, to create a buyer you will need to pass a `BuyerRequest` object to
the `addBuyer` method.

```js
const buyerRequest = new BuyerRequest()
buyerRequest.displayName = 'John L.'
const buyer = await client.newBuyer(buyerRequest)
```

Similarly, to update a buyer you will need to pass in the `BuyerUpdateRequest`.

```js
const buyerUpdateRequest = new BuyerUpdateRequest()
buyerUpdateRequest.displayName = 'John D.'
const buyer = await client.updateBuyer(buyer.id, buyerUpdateRequest)
```

## Generate API bearer token

The SDK can be used to create API access tokens for use with other request
libraries.

```js
import { JWTScope } from '@gr4vy/node'

const bearerToken = client.getBearerToken(
  [JWTScope.BuyersRead, JWTScope.BuyersWrite],
  '1h'
)
```

The first parameter is a list of recognised scopes for the Gr4vy API. The second
parameter is the expiration time for the token as defined by the
[`vercel/ms`](https://github.com/vercel/ms) library.

The resulting token can be used as a bearer token in the header of the HTTP
request made to the API.

```ini
Authorization: Bearer <bearerToken>
```

## Response & Promises

Every API call returns a `Promise` that either resolves or rejects.

Every resolved API call returns an object containing a `body`
attribute with the parsed JSON body and a `response` object representing the
HTTP response object which includes the raw headers and status code.

For a failed API call, it returns a similar object is returned with the `body`
of the error.

```js
client
  .getBuyer(buyer.id)
  .then((result) => {
    console.dir(result.body) // the parsed JSON
    console.dir(result.response.statusCode) // the status code of the response
  })
  .catch((error) => {
    console.dir(error.response.body) // the parsed JSON of the error
    console.dir(error.response.statusCode) // the status code of the error
  })
```

## Logging & Debugging

The SDK makes it easy possible to the requests and responses to the console.

```js
const client = new Client({
  gr4vyId: 'demo',
  privateKey: key,
  debug: true,
  // merchantAccountId: 'my-merchant-id' # optional for multi merchant instances
})
```

This will output the request parameters and response to the console as follows.

```sh
Gr4vy - Request - .getBuyer: 41291df0-4a5d-42d9-a977-dbc8ef6463c4
Gr4vy - Response - .getBuyer - 200): Buyer {
  type: 'buyer',
  id: '41291df0-4a5d-42d9-a977-dbc8ef6463c4',
  external_identifier: null,
  display_name: 'Test',
  created_at: 2021-02-23T16:23:22.794Z,
  updated_at: 2021-02-23T16:23:22.794Z
}
```

## Development

### Adding new APIs

To add new APIs, run the following command to update the models and APIs based
on the API spec.

```
./openapi-generator-generate.sh
```

Next, update `sdk/client.ts` to bind any new APIs or remove any APIs that are no
longer available.

```js
const poa = new PaymentOptionsApi(this.baseUrl)
this.listPaymentOptions = this.wrap(poa.listPaymentOptions.bind(poa))
this.apis.push(poa)
```

### Publishing

Publishing of this project is done automatically using the `yarn release`
command which creates a new version, publishes it to a tag, and then triggers a
GitHub Action to release the new package to NPM.

## License

This library is released under the [MIT License](LICENSE).

[npm]: https://www.npmjs.com/package/@gr4vy/node

import jwt from 'jsonwebtoken'
import snakecaseKeys from 'snakecase-keys'
import timekeeper from 'timekeeper'
import { CheckoutSessionsApi } from '../api/checkoutSessionsApi'
import Client from './client'

const privateKey = `-----BEGIN PRIVATE KEY-----
MIHuAgEAMBAGByqGSM49AgEGBSuBBAAjBIHWMIHTAgEBBEIBABM9jQu+HT87oIik
O6DiJjYeghr3V+VMBVNU2hCM3X/OAS6TUTylMbnjDnwWdmu7anVSnjvEY1a4KxQ9
WZ8E/PKhgYkDgYYABABRdv5VAtOsGb6THxeK/p7RAARPm6Zwb7FF4sZAYkkSB7h0
2jpj3UHSpyl92BQkiF/xakz7hMMD1A0ZTn5SuXWp3AG9qPHO3eB9WrZhPGYixwyo
XNjhnPEDhmkItKXteke9iBOTOOXB7AFQSh7EXRBmhBs4u3ZlTmrl+8VdBc3+jwAY
rw==
-----END PRIVATE KEY-----`

const thumbprint = 'va-SLs5AxJNfqKXD8LI5Y38BflpNvjZjY4RSWz66U1w'

const checkoutSessionId = 'checkout-session-id'

jest.mock('../api/checkoutSessionsApi')
const NewCheckoutSession = CheckoutSessionsApi.prototype
  .newCheckoutSession as jest.Mock
NewCheckoutSession.mockReturnValue(
  Promise.resolve({ body: { id: checkoutSessionId } })
)

const embedParams = {
  amount: 9000,
  currency: 'USD',
  buyerExternalIdentifier: 'user-123',
}

describe('#constructor', () => {
  test('it should work with a gr4vy ID', () => {
    const client = new Client({ privateKey, gr4vyId: 'test' })
    expect(client.baseUrl).toBe('https://api.test.gr4vy.app')
  })

  test('it should work with a gr4vy ID and an environment', () => {
    const client = new Client({
      privateKey,
      gr4vyId: 'test',
      environment: 'sandbox',
    })
    expect(client.baseUrl).toBe('https://api.sandbox.test.gr4vy.app')
  })

  test('it should work with a base URL', () => {
    const client = new Client({
      privateKey,
      baseUrl: 'https://api.demo.gr4vy.app',
    })
    expect(client.baseUrl).toBe('https://api.demo.gr4vy.app')
  })

  test('it should fail if neither the baseUrl or Gr4vy ID is present', () => {
    expect(() => {
      new Client({
        privateKey,
        baseUrl: '',
      })
    }).toThrowError()
  })
})

describe('.getBearerToken()', () => {
  test('it should create a valid signed JWT token', async () => {
    const client = new Client({ privateKey, gr4vyId: 'demo' })
    const token = await client.getBearerToken()

    const decoded = jwt.verify(token, privateKey, {
      algorithms: ['ES512'],
      complete: true,
    })

    expect(decoded.header.kid).toBe(thumbprint)
    expect(decoded.payload.scopes).toEqual(['*.read', '*.write'])
  })
})

describe('.getEmbedToken()', () => {
  test('it should create a valid signed JWT token', async () => {
    const client = new Client({ privateKey, gr4vyId: 'demo' })
    const token = await client.getEmbedToken(embedParams)

    const decoded = jwt.verify(token, privateKey, {
      algorithms: ['ES512'],
      complete: true,
    })

    expect(decoded.header.kid).toBe(thumbprint)
    expect(decoded.payload.scopes).toEqual(['embed'])
    expect(decoded.payload.embed).toEqual(snakecaseKeys(embedParams))
  })
})

describe('.getEmbedTokenWithCheckoutSession()', () => {
  test('it should create a valid embed token with a pinned checkout session', async () => {
    const client = new Client({
      privateKey,
      gr4vyId: 'demo',
    })

    const { token, checkoutSession } =
      await client.getEmbedTokenWithCheckoutSession(embedParams)

    const decoded = jwt.verify(token, privateKey, {
      algorithms: ['ES512'],
      complete: true,
    })

    expect(decoded.header.kid).toBe(thumbprint)
    expect(decoded.payload.scopes).toEqual(['embed'])
    expect(decoded.payload.embed).toEqual(snakecaseKeys(embedParams))

    expect(checkoutSession?.id).toBe(checkoutSessionId)
  })
})

describe('.updateEmbedToken()', () => {
  test('it should update a valid signed JWT token', async () => {
    const client = new Client({ privateKey, gr4vyId: 'demo' })
    timekeeper.freeze(Date.now())
    const token1 = await client.getEmbedToken(embedParams)
    timekeeper.travel(Date.now() + 1000)
    const token2 = await client.updateEmbedToken(token1)

    const decoded1 = jwt.decode(token1, { complete: true })
    const decoded2 = jwt.decode(token2, { complete: true })

    expect(decoded2.header).toEqual(decoded1.header)
    expect(decoded2.payload.scopes).toEqual(decoded1.payload.scopes)
    expect(decoded2.payload.embed).toEqual(decoded1.payload.embed)
    expect(decoded2.payload.checkout_session_id).toEqual(
      decoded1.payload.checkout_session_id
    )
    expect(decoded2.payload.iat).toBeGreaterThan(decoded1.payload.iat)
    expect(decoded2.payload.exp).toBeGreaterThan(decoded1.payload.exp)
    expect(decoded2.payload.nbf).toBeGreaterThan(decoded1.payload.nbf)
  })

  test('it shoud allow for new Embed params to be set', async () => {
    const client = new Client({ privateKey, gr4vyId: 'demo' })
    const token1 = await client.getEmbedToken(embedParams)

    const embedParams2 = {
      amount: 1299,
      currency: 'USD',
    }
    const token2 = await client.updateEmbedToken(token1, embedParams2)

    const decoded1 = jwt.decode(token1, { complete: true })
    const decoded2 = jwt.decode(token2, { complete: true })

    expect(decoded2.payload.checkout_session_id).toEqual(
      decoded1.payload.checkout_session_id
    )
  })
})

describe('.updateBearerToken()', () => {
  test('it should update a valid signed JWT token', async () => {
    const client = new Client({ privateKey, gr4vyId: 'demo' })
    timekeeper.freeze(Date.now())
    const token1 = await client.getBearerToken()
    timekeeper.travel(Date.now() + 1000)
    const token2 = await client.getBearerToken()

    const decoded1 = jwt.decode(token1, { complete: true })
    const decoded2 = jwt.decode(token2, { complete: true })

    expect(decoded2.header).toEqual(decoded1.header)
    expect(decoded2.payload.scopes).toEqual(decoded1.payload.scopes)
    expect(decoded2.payload.checkout_session_id).toEqual(
      decoded1.payload.checkout_session_id
    )
    expect(decoded2.payload.iat).toBeGreaterThan(decoded1.payload.iat)
    expect(decoded2.payload.exp).toBeGreaterThan(decoded1.payload.exp)
    expect(decoded2.payload.nbf).toBeGreaterThan(decoded1.payload.nbf)
  })
})

describe('.setMerchantAccountId()', () => {
  test('it should set the default header for every request', async () => {
    const client = new Client({
      privateKey,
      gr4vyId: 'demo',
      merchantAccountId: 'test',
    })

    expect(
      client.apis[0].defaultHeaders['X-GR4VY-MERCHANT-ACCOUNT-ID']
    ).toEqual('test')
  })
})

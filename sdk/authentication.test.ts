import jwt from 'jsonwebtoken'
import snakecaseKeys from 'snakecase-keys'
import timekeeper from 'timekeeper'
import { version } from '../package.json'
import Authentication, { JWTScope } from './authentication'

const privateKey = `-----BEGIN PRIVATE KEY-----
MIHuAgEAMBAGByqGSM49AgEGBSuBBAAjBIHWMIHTAgEBBEIBABM9jQu+HT87oIik
O6DiJjYeghr3V+VMBVNU2hCM3X/OAS6TUTylMbnjDnwWdmu7anVSnjvEY1a4KxQ9
WZ8E/PKhgYkDgYYABABRdv5VAtOsGb6THxeK/p7RAARPm6Zwb7FF4sZAYkkSB7h0
2jpj3UHSpyl92BQkiF/xakz7hMMD1A0ZTn5SuXWp3AG9qPHO3eB9WrZhPGYixwyo
XNjhnPEDhmkItKXteke9iBOTOOXB7AFQSh7EXRBmhBs4u3ZlTmrl+8VdBc3+jwAY
rw==
-----END PRIVATE KEY-----`

const thumbprint = 'va-SLs5AxJNfqKXD8LI5Y38BflpNvjZjY4RSWz66U1w'

const embedParams = {
  amount: 9000,
  currency: 'USD',
  buyerExternalIdentifier: 'user-123',
  metadata: {
    camelCaseKey: 'value1',
    snake_case_key: 'value2',
  },
  cartItems: [
    {
      name: 'Joust Duffle Bag',
      quantity: 1,
      unitAmount: 9000,
      taxAmount: 0,
      categories: ['Gear', 'Bags', 'Test'],
    },
  ],
}

const checkoutSessionId = '0ebde6a1-f66c-43ea-bb8b-73751864c604'

describe('.getJWS', () => {
  test('it should create a valid signed JWT token', async () => {
    const auth = new Authentication(privateKey)
    const jws = await auth.getJWS()

    const decoded = jwt.verify(jws, privateKey, {
      algorithms: ['ES512'],
      complete: true,
    })

    expect(decoded.header.alg).toBe('ES512')
    expect(decoded.header.typ).toBe('JWT')
    expect(decoded.header.kid).toBe(thumbprint)
    expect(decoded.payload.scopes).toEqual(['*.read', '*.write'])
    expect(typeof decoded.payload.iat).toBe('number')
    expect(typeof decoded.payload.nbf).toBe('number')
    expect(typeof decoded.payload.exp).toBe('number')
    expect(decoded.payload.iss.startsWith('Gr4vy Node SDK')).toBeTruthy()
    expect(decoded.payload.iss).toMatch('Gr4vy Node SDK')
    expect(decoded.payload.iss).toMatch(version)
  })

  test('it should optionally insert embed data', async () => {
    const auth = new Authentication(privateKey)
    const jws = await auth.getJWS([JWTScope.Embed], '1m', embedParams)

    const decoded = jwt.verify(jws, privateKey, {
      algorithms: ['ES512'],
      complete: true,
    })

    expect(decoded.payload.scopes).toEqual(['embed'])
    expect(decoded.payload.embed).toEqual(
      snakecaseKeys(embedParams, { exclude: ['metadata'] })
    )
  })

  test('it should ignore embed data if the embed scope was not set', async () => {
    const auth = new Authentication(privateKey)
    const jws = await auth.getJWS([JWTScope.ReadAll], '1m', embedParams)

    const decoded = jwt.verify(jws, privateKey, {
      algorithms: ['ES512'],
      complete: true,
    })

    expect(decoded.payload.scopes).toEqual(['*.read'])
    expect(decoded.payload.embed).toBeUndefined()
  })

  test('it should take an optional checkout session ID', async () => {
    const checkoutSessionId = 'id'

    const auth = new Authentication(privateKey)
    const jws = await auth.getJWS(
      [JWTScope.ReadAll],
      '1m',
      embedParams,
      checkoutSessionId
    )

    const decoded = jwt.verify(jws, privateKey, {
      algorithms: ['ES512'],
      complete: true,
    })

    expect(decoded.payload.checkout_session_id).toEqual(checkoutSessionId)
  })
})

describe('.parseJSW', () => {
  test('it should decode a token', async () => {
    timekeeper.freeze(Date.now())

    const auth = new Authentication(privateKey)
    const token1 = await auth.getJWS(
      [JWTScope.Embed],
      '1m',
      embedParams,
      checkoutSessionId
    )

    timekeeper.travel(Date.now() + 1000)

    const token2 = await auth.updateJWS(token1, '1m')

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
})

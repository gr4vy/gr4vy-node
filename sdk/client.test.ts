import jwt from 'jsonwebtoken'
import snakecaseKeys from 'snakecase-keys'
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

const embedParams = {
  amount: 9000,
  currency: 'USD',
  buyerExternalIdentifier: 'user-123',
}

describe('#constructor', () => {
  const client = new Client({ privateKey, gr4vyId: 'demo' })
  expect(client.apis).toHaveLength(7)
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

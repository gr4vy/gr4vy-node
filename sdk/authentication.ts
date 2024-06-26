import keyto from '@trust/keyto'
import jwt from 'jsonwebtoken'
import { jwkThumbprintByEncoding } from 'jwk-thumbprint'
import snakeCaseKeys from 'snakecase-keys'
import { v4 as uuid } from 'uuid' // eslint-disable-line import/namespace
import { CartItem } from '../model/cartItem'
import { version } from '../package.json'

const issuer = `Gr4vy Node SDK ${version} - Node ${process.version}`

class Authentication {
  privateKey: string

  constructor(privateKey: string) {
    this.privateKey = privateKey
  }

  public async getJWS(
    scopes: JWTScopes = [JWTScope.ReadAll, JWTScope.WriteAll],
    expiresIn = '30s',
    embedParams?: EmbedParams,
    checkoutSessionId?: string
  ): Promise<string> {
    const keyid: string = await this.getKeyId()
    const claims = { scopes }

    if (checkoutSessionId) {
      claims['checkout_session_id'] = checkoutSessionId
    }

    if (scopes.includes(JWTScope.Embed) && embedParams) {
      const connOptions =
        embedParams.connectionOptions || embedParams['connection_options']
      claims['embed'] = snakeCaseKeys(embedParams, { exclude: ['metadata'] })
      claims['embed']['connection_options'] = connOptions
    }

    return jwt.sign(claims, this.privateKey, {
      algorithm: 'ES512',
      keyid,
      jwtid: uuid(),
      expiresIn,
      notBefore: '0s',
      issuer,
    })
  }

  public async updateJWS(
    token: string,
    expiresIn = '30s',
    embedParams?: EmbedParams
  ): Promise<string> {
    const payload = jwt.verify(token, this.privateKey, {
      algorithms: ['ES512'],
      ignoreExpiration: true,
    })

    const { scopes, checkout_session_id: checkoutSessionId, embed } = payload

    return this.getJWS(
      scopes,
      expiresIn,
      embedParams ?? embed,
      checkoutSessionId
    )
  }

  public async getKeyId(): Promise<string> {
    const jwk = keyto.from(this.privateKey, 'pem').toJwk('private')
    return jwkThumbprintByEncoding(jwk, 'SHA-256', 'base64url')
  }
}

type JWTScopes = JWTScope[]

enum JWTScope {
  ReadAll = '*.read',
  WriteAll = '*.write',
  Embed = 'embed',
  BuyersRead = 'buyers.read',
  BuyersWrite = 'buyers.write',
  PaymentMethodRead = 'payment-methods.read',
  PaymentMethodWrite = 'payment-methods.write',
  PaymentOptionsRead = 'payment-options.read',
  PaymentServiceDefinitionsRead = 'payment-service-definitions.read',
  PaymentServicesRead = 'payment-services.read',
  PaymentServicesWrite = 'payment-services.write',
  TransactionsRead = 'transactions.read',
  TransactionsWrite = 'transactions.write',
}

type EmbedParams = {
  amount: number
  currency: string
  buyerId?: string
  buyerExternalIdentifier?: string
  metadata?: Record<string, string>
  connectionOptions?: Record<string, any>
  cartItems?: Array<CartItem>
  merchantAccountId?: string
}

export default Authentication
export { JWTScope, JWTScopes, EmbedParams }

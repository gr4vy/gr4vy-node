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
  AntiFraudServiceDefinitionsRead = 'anti-fraud-service-definitions.read',
  AntiFraudServiceDefinitionsWrite = 'anti-fraud-service-definitions.write',
  AntiFraudServicesRead = 'anti-fraud-services.read',
  AntiFraudServicesWrite = 'anti-fraud-services.write',
  ApiLogsRead = 'api-logs.read',
  ApiLogsWrite = 'api-logs.write',
  ApplePayCertificatesRead = 'apple-pay-certificates.read',
  ApplePayCertificatesWrite = 'apple-pay-certificates.write',
  AuditLogs = 'audit-logs.read',
  AuditLogsWrite = 'audit-logs.write',
  BuyersRead = 'buyers.read',
  BuyersWrite = 'buyers.write',
  BuyersBillingDetailsRead = 'buyers.billing-details.read',
  BuyersBillingDetailsWrite = 'buyers.billing-details.write',
  CardSchemeDefinitionsRead = 'card-scheme-definitions.read',
  CardSchemeDefinitionsWrite = 'card-scheme-definitions.write',
  CheckoutSessionsRead = 'checkout-sessions.read',
  CheckoutSessionsWrite = 'checkout-sessions.write',
  ConnectionsRead = 'connections.read',
  ConnectionsWrite = 'connections.write',
  DigitalWalletsRead = 'digital-wallets.read',
  DigitalWalletsWrite = 'digital-wallets.write',
  FlowsRead = 'flows.read',
  FlowsWrite = 'flows.write',
  GiftCardServiceDefinitionsRead = 'gift-card-service-definitions.read',
  GiftCardServiceDefinitionsWrite = 'gift-card-service-definitions.write',
  GiftCardServicesRead = 'gift-card-services.read',
  GiftCardServicesWrite = 'gift-card-services.write',
  GiftCardsRead = 'gift-cards.read',
  GiftCardsWrite = 'gift-cards.write',
  MerchantAccountsRead = 'merchant-accounts.read',
  MerchantAccountsWrite = 'merchant-accounts.write',
  PaymentLinksRead = 'payment-links.read',
  PaymentLinksWrite = 'payment-links.write',
  PaymentMethodDefinitionsRead = 'payment-method-definitions.read',
  PaymentMethodDefinitionsWrite = 'payment-method-definitions.write',
  PaymentMethodsRead = 'payment-methods.read',
  PaymentMethodsWrite = 'payment-methods.write',
  PaymentOptionsRead = 'payment-options.read',
  PaymentOptionsWrite = 'payment-options.write',
  PaymentServiceDefinitionsRead = 'payment-service-definitions.read',
  PaymentServiceDefinitionsWrite = 'payment-service-definitions.write',
  PaymentServicesRead = 'payment-services.read',
  PaymentServicesWrite = 'payment-services.write',
  PayoutsRead = 'payouts.read',
  PayoutsWrite = 'payouts.write',
  ReportsRead = 'reports.read',
  ReportsWrite = 'reports.write',
  RolesRead = 'roles.read',
  RolesWrite = 'roles.write',
  TransactionsRead = 'transactions.read',
  TransactionsWrite = 'transactions.write',
  UsersMeRead = 'users.me.read',
  UsersMeWrite = 'users.me.write',
  VaultForwardRead = 'vault-forward.read',
  VaultForwardWrite = 'vault-forward.write',
  VaultForwardAuthenticationsRead = 'vault-forward-authentications.read',
  VaultForwardAuthenticationsWrite = 'vault-forward-authentications.write',
  VaultForwardConfigsRead = 'vault-forward-configs.read',
  VaultForwardConfigsWrite = 'vault-forward-configs.write',
  VaultForwardDefinitionsRead = 'vault-forward-definitions.read',
  VaultForwardDefinitionsWrite = 'vault-forward-definitions.write',
  WebhookSubscriptionsRead = 'webhook-subscriptions.read',
  WebhookSubscriptionsWrite = 'webhook-subscriptions.write',
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

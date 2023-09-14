import {
  BuyersApi,
  MerchantAccountsApi,
  PaymentMethodsApi,
  PaymentOptionsApi,
  PaymentServicesApi,
  TransactionsApi,
} from '../api/apis'
import { CheckoutSessionsApi } from '../api/checkoutSessionsApi'
import { PaymentServiceDefinitionsApi } from '../api/paymentServiceDefinitionsApi'
import { CheckoutSession } from '../model/checkoutSession'
import Authentication, {
  JWTScope,
  JWTScopes,
  EmbedParams,
} from './authentication'

class Client {
  baseUrl: string
  debug: boolean
  authentication: Authentication
  apis: (
    | BuyersApi
    | CheckoutSessionsApi
    | MerchantAccountsApi
    | PaymentMethodsApi
    | PaymentOptionsApi
    | PaymentServiceDefinitionsApi
    | PaymentServicesApi
    | TransactionsApi
  )[]

  // Buyers
  listBuyers: typeof BuyersApi.prototype.listBuyers
  getBuyer: typeof BuyersApi.prototype.getBuyer
  newBuyer: typeof BuyersApi.prototype.newBuyer
  updateBuyer: typeof BuyersApi.prototype.updateBuyer
  deleteBuyer: typeof BuyersApi.prototype.deleteBuyer
  listBuyerShippingDetails: typeof BuyersApi.prototype.listBuyerShippingDetails
  newBuyerShippingDetail: typeof BuyersApi.prototype.newBuyerShippingDetail
  updateBuyerShippingDetail: typeof BuyersApi.prototype.updateBuyerShippingDetail
  deleteBuyerShippingDetail: typeof BuyersApi.prototype.deleteBuyerShippingDetail

  // Checkout Sessions
  newCheckoutSession: typeof CheckoutSessionsApi.prototype.newCheckoutSession
  deleteCheckoutSession: typeof CheckoutSessionsApi.prototype.deleteCheckoutSession
  getCheckoutSession: typeof CheckoutSessionsApi.prototype.getCheckoutSession
  updateCheckoutSession: typeof CheckoutSessionsApi.prototype.updateCheckoutSession
  updateCheckoutSessionFields: typeof CheckoutSessionsApi.prototype.updateCheckoutSessionFields

  // Merchant Accounts
  listMerchantAccounts: typeof MerchantAccountsApi.prototype.listMerchantAccounts
  newMerchantAccount: typeof MerchantAccountsApi.prototype.newMerchantAccount
  updateMerchantAccount: typeof MerchantAccountsApi.prototype.updateMerchantAccount
  deleteMerchantAccuont: typeof MerchantAccountsApi.prototype.deleteMerchantAccuont

  // Payment Methods
  listPaymentMethods: typeof PaymentMethodsApi.prototype.listPaymentMethods
  getPaymentMethod: typeof PaymentMethodsApi.prototype.getPaymentMethod
  newPaymentMethod: typeof PaymentMethodsApi.prototype.newPaymentMethod
  deletePaymentMethod: typeof PaymentMethodsApi.prototype.deletePaymentMethod
  listBuyerPaymentMethods: typeof PaymentMethodsApi.prototype.listBuyerPaymentMethods

  // Payment Options
  listPaymentOptions: typeof PaymentOptionsApi.prototype.listPaymentOptions
  postListPaymentOptions: typeof PaymentOptionsApi.prototype.postListPaymentOptions

  // Payment Service Definitions
  listPaymentServiceDefinitions: typeof PaymentServiceDefinitionsApi.prototype.listPaymentServiceDefinitions
  getPaymentServiceDefinition: typeof PaymentServiceDefinitionsApi.prototype.getPaymentServiceDefinition

  // Payment Services
  listPaymentServices: typeof PaymentServicesApi.prototype.listPaymentServices
  getPaymentService: typeof PaymentServicesApi.prototype.getPaymentService
  newPaymentService: typeof PaymentServicesApi.prototype.newPaymentService
  updatePaymentService: typeof PaymentServicesApi.prototype.updatePaymentService
  deletePaymentService: typeof PaymentServicesApi.prototype.deletePaymentService

  // Transactions
  newTransaction: typeof TransactionsApi.prototype.newTransaction
  voidTransaction: typeof TransactionsApi.prototype.voidTransaction
  captureTransaction: typeof TransactionsApi.prototype.captureTransaction
  getTransaction: typeof TransactionsApi.prototype.getTransaction
  listTransactions: typeof TransactionsApi.prototype.listTransactions
  newRefund: typeof TransactionsApi.prototype.newRefund
  listTransactionRefunds: typeof TransactionsApi.prototype.listTransactionRefunds
  getRefund: typeof TransactionsApi.prototype.getRefund

  constructor(options: Options) {
    this.validate(options)

    this.apis = []
    this.authentication = new Authentication(options.privateKey)
    this.debug = options.debug || false

    const apiPrefix = options.environment === 'sandbox' ? 'sandbox.' : ''
    this.baseUrl = options.baseUrl
      ? options.baseUrl
      : `https://api.${apiPrefix}${options.gr4vyId}.gr4vy.app`

    // Buyers
    const ba = new BuyersApi(this.baseUrl)
    this.listBuyers = this.wrap(ba.listBuyers.bind(ba))
    this.getBuyer = this.wrap(ba.getBuyer.bind(ba))
    this.newBuyer = this.wrap(ba.newBuyer.bind(ba))
    this.updateBuyer = this.wrap(ba.updateBuyer.bind(ba))
    this.deleteBuyer = this.wrap(ba.deleteBuyer.bind(ba))
    this.listBuyerShippingDetails = this.wrap(
      ba.listBuyerShippingDetails.bind(ba)
    )
    this.newBuyerShippingDetail = this.wrap(ba.newBuyerShippingDetail.bind(ba))
    this.updateBuyerShippingDetail = this.wrap(
      ba.updateBuyerShippingDetail.bind(ba)
    )
    this.deleteBuyerShippingDetail = this.wrap(
      ba.deleteBuyerShippingDetail.bind(ba)
    )
    this.apis.push(ba)

    // Checkout Sessions
    const csa = new CheckoutSessionsApi(this.baseUrl)
    this.newCheckoutSession = this.wrap(csa.newCheckoutSession.bind(csa))
    this.deleteCheckoutSession = this.wrap(csa.deleteCheckoutSession.bind(csa))
    this.getCheckoutSession = this.wrap(csa.getCheckoutSession.bind(csa))
    this.updateCheckoutSession = this.wrap(csa.updateCheckoutSession.bind(csa))
    this.updateCheckoutSessionFields = this.wrap(
      csa.updateCheckoutSessionFields.bind(csa)
    )
    this.apis.push(csa)

    // Merchant Accounts
    const maa = new MerchantAccountsApi(this.baseUrl)
    this.listMerchantAccounts = this.wrap(maa.listMerchantAccounts.bind(maa))
    this.newMerchantAccount = this.wrap(maa.newMerchantAccount.bind(maa))
    this.updateMerchantAccount = this.wrap(maa.updateMerchantAccount.bind(maa))
    this.deleteMerchantAccuont = this.wrap(maa.deleteMerchantAccuont.bind(maa))
    this.apis.push(maa)

    // Payment Methods
    const pma = new PaymentMethodsApi(this.baseUrl)
    this.listPaymentMethods = this.wrap(pma.listPaymentMethods.bind(pma))
    this.getPaymentMethod = this.wrap(pma.getPaymentMethod.bind(pma))
    this.newPaymentMethod = this.wrap(pma.newPaymentMethod.bind(pma))
    this.deletePaymentMethod = this.wrap(pma.deletePaymentMethod.bind(pma))
    this.listBuyerPaymentMethods = this.wrap(
      pma.listBuyerPaymentMethods.bind(pma)
    )
    this.apis.push(pma)

    // Payment Options
    const poa = new PaymentOptionsApi(this.baseUrl)
    this.listPaymentOptions = this.wrap(poa.listPaymentOptions.bind(poa))
    this.postListPaymentOptions = this.wrap(
      poa.postListPaymentOptions.bind(poa)
    )
    this.apis.push(poa)

    // Payment Service Definitions
    const psda = new PaymentServiceDefinitionsApi(this.baseUrl)
    this.listPaymentServiceDefinitions = this.wrap(
      psda.listPaymentServiceDefinitions.bind(psda)
    )
    this.getPaymentServiceDefinition = this.wrap(
      psda.getPaymentServiceDefinition.bind(psda)
    )
    this.apis.push(psda)

    // Payment Services
    const psa = new PaymentServicesApi(this.baseUrl)
    this.listPaymentServices = this.wrap(psa.listPaymentServices.bind(psa))
    this.getPaymentService = this.wrap(psa.getPaymentService.bind(psa))
    this.newPaymentService = this.wrap(psa.newPaymentService.bind(psa))
    this.updatePaymentService = this.wrap(psa.updatePaymentService.bind(psa))
    this.deletePaymentService = this.wrap(psa.deletePaymentService.bind(psa))
    this.apis.push(psa)

    // Transactions
    const ta = new TransactionsApi(this.baseUrl)
    this.newTransaction = this.wrap(ta.newTransaction.bind(ta))
    this.voidTransaction = this.wrap(ta.voidTransaction.bind(ta))
    this.captureTransaction = this.wrap(ta.captureTransaction.bind(ta))
    this.getTransaction = this.wrap(ta.getTransaction.bind(ta))
    this.listTransactions = this.wrap(ta.listTransactions.bind(ta))
    this.newRefund = this.wrap(ta.newRefund.bind(ta))
    this.listTransactionRefunds = this.wrap(ta.listTransactionRefunds.bind(ta))
    this.getRefund = this.wrap(ta.getRefund.bind(ta))
    this.apis.push(ta)

    this.setMerchantAccountId(options.merchantAccountId ?? 'default')
  }

  /**
   * Validates the passed in options.
   *
   * @param options
   */
  private validate(options: Options) {
    if (!options.privateKey) {
      throw new Error('Missing argument `privateKey`')
    }

    if (!options.gr4vyId && !options.baseUrl) {
      throw new Error(
        'Missing argument `gr4vyId` or `baseUrl`. Please provide at least one.'
      )
    }

    if (options.gr4vyId && options.baseUrl) {
      throw new Error(
        'Both `gr4vyId` and `baseUrl` provided. Please provide at only one.'
      )
    }
  }

  /**
   * Returns a new bearer token. A bearer token is a limited validity JWT token.
   *
   * @param scopes The optional scopes to add to the claims
   * @param expiresIn The length of time that the bearer token is valid for,
   * defined as a time span in a zeit/ms format. https://github.com/vercel/ms
   */
  public getBearerToken(
    scopes: JWTScopes = [JWTScope.ReadAll, JWTScope.WriteAll],
    expiresIn = '30s'
  ): Promise<string> {
    return this.authentication.getJWS(scopes, expiresIn)
  }

  /**
   * Returns a token for use with Embed. This token is limited to 1 hour and
   * the `embed` scope.
   *
   * @param embed An object that's added to the `embed` value in the JWT claim
   */
  public getEmbedToken(
    embed: EmbedParams,
    checkoutSessionId?: string
  ): Promise<string> {
    const scopes = [JWTScope.Embed]
    return this.authentication.getJWS(scopes, '1h', embed, checkoutSessionId)
  }

  /**
   * Returns a token for use with Embed which ties all transactions to Embed. This
   * will automatically create a checkout session and add it to the claims in the JWT. This
   * then ties all the transactions to this token.
   *
   * This token is limited to 1 hour and the `embed` scope
   *
   * @param embed An object that's added to the `embed` value in the JWT claim
   */
  public async getEmbedTokenWithCheckoutSession(embed: EmbedParams): Promise<{
    token: string
    checkoutSession: CheckoutSession
  }> {
    const { body: checkoutSession } = await this.newCheckoutSession()
    const token = await this.getEmbedToken(embed, checkoutSession.id)
    return { checkoutSession, token }
  }

  /**
   * Updates an Embed token, keeping any existing claims
   * but resigning it with a new expiration date.
   */
  public async updateEmbedToken(
    token: string,
    embedParams?: EmbedParams
  ): Promise<string> {
    return this.authentication.updateJWS(token, '1h', embedParams)
  }

  /**
   * Updates a bearer token, keeping any existing claims
   * but resigning it with a new expiration date.
   */
  public async updateBearerToken(
    token: string,
    expiresIn = '30s'
  ): Promise<string> {
    return this.authentication.updateJWS(token, expiresIn)
  }

  /**
   * Wrap an API endpoint with pre and post processing
   * @param fn The API endpoint to wrap
   */
  private wrap<T extends (...args: any[]) => any>(fn: T): T {
    return <T>((...args: any[]) => {
      return this.preprocess(fn, args).then(() => {
        return fn(...args).then((data) => {
          this.postprocess(fn, data)
          return data
        })
      })
    })
  }

  /**
   * A function that is called before a request is processed.
   *
   * It logs a the request that is made and creates a new bearer token.
   *
   * @param fn The function that was called
   * @param args The arguments that were passed to the function
   */
  private async preprocess(fn, args) {
    await this.attachBearerToken()
    this.log(`Gr4vy - Request - ${fn.name.replace('bound ', '.')}:`, ...args)
  }

  /**
   * A function that is called after a request is processed.
   *
   * @param fn The function that was called
   * @param data The data that was returned by the API
   */
  private async postprocess(fn, data) {
    this.log(
      `Gr4vy - Response - ${fn.name.replace('bound ', '.')} - ${
        data?.response?.statusCode
      }):`,
      data.body,
      data.defaultHeaders
    )
  }

  /**
   * Generates a new authorization token and attaches it to every API.
   */
  private async attachBearerToken(): Promise<void> {
    const token: string = await this.getBearerToken()
    this.apis.map((api) => (api.accessToken = token))
  }

  /**
   * Generates a new authorization token and attaches it to every API.
   */
  private setMerchantAccountId(merchantAccountId: string): void {
    this.apis.forEach(
      (api) =>
        (api.defaultHeaders = {
          'X-GR4VY-MERCHANT-ACCOUNT-ID': merchantAccountId,
        })
    )
  }

  /**
   * Internal logger
   */
  private log(...args: any[]) {
    if (this.debug) {
      console.debug(...args)
    }
  }
}

type Options =
  | {
      gr4vyId: string
      privateKey: string
      baseUrl?: string
      debug?: boolean
      environment?: 'production' | 'sandbox'
      merchantAccountId?: string
    }
  | {
      gr4vyId?: string
      privateKey: string
      baseUrl: string
      debug?: boolean
      environment?: 'production' | 'sandbox'
      merchantAccountId?: string
    }

export default Client
export { JWTScope }

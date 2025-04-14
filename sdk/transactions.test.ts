import { TransactionCaptureRequest } from '../model/transactionCaptureRequest'
import { TransactionPaymentMethodRequest } from '../model/transactionPaymentMethodRequest'
import { TransactionRefundRequest } from '../model/transactionRefundRequest'
import { TransactionRequest } from '../model/transactionRequest'
import { getTestClient } from './helpers'

const client = getTestClient()

const AMOUNT = 1299
let transactionId

jest.setTimeout(80000)

const transactionRequest = new TransactionRequest()
transactionRequest.amount = AMOUNT
transactionRequest.currency = 'USD'
transactionRequest.metadata = { source: 'node_sdk' }
transactionRequest.paymentMethod = new TransactionPaymentMethodRequest()
transactionRequest.paymentMethod.method =
  TransactionPaymentMethodRequest.MethodEnum.Card
transactionRequest.paymentMethod.number = '4111111111111111'
transactionRequest.paymentMethod.expirationDate = '11/25'
transactionRequest.paymentMethod.securityCode = '123'
transactionRequest.paymentMethod.redirectUrl = 'https://gr4vy.com'

function makeid(length) {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}

describe('#newTransaction', () => {
  test('it should create a transaction', async () => {
    const transaction = await client
      .newTransaction(makeid(10), transactionRequest)
      .catch((error) => {
        console.dir(error.response.body) // the parsed JSON of the error
        console.dir(error.response.statusCode) // the status code of the error
        throw new Error('an error occurred while creating the transaction')
      })

    expect(transaction).toBeDefined()
    expect(transaction.body).toBeDefined()
    transactionId = transaction.body.id
    expect(transactionId).toHaveLength(36)
  })
})

describe('#listTransactions', () => {
  test('it should find some transactions', async () => {
    const transactions = await client.listTransactions()
    expect(transactions).toBeDefined()
    expect(transactions.body.items).toBeDefined()
    expect(transactions.body.items?.length).toBeGreaterThan(0)
  })
})

describe('#getTransaction', () => {
  test('it should find a specific transaction', async () => {
    const transaction = await client.getTransaction(transactionId)
    expect(transaction).toBeDefined()
    expect(transaction.body).toBeDefined()
    expect(transaction.body.amount).toBe(AMOUNT)
  })
})

describe('#captureTransaction', () => {
  test('it should capture a specific transaction', async () => {
    const transactionCaptureRequest = new TransactionCaptureRequest()
    transactionCaptureRequest.amount = AMOUNT

    const transaction = await client.captureTransaction(
      transactionId,
      transactionCaptureRequest
    )

    expect(transaction).toBeDefined()
    expect(transaction.body).toBeDefined()
    expect(transaction.body.amount).toBe(AMOUNT)
  })
})

describe('#newRefund', () => {
  test('it should refund a specific transaction', async () => {
    const transactionRefundRequest = new TransactionRefundRequest()
    transactionRefundRequest.amount = AMOUNT

    const transaction = await client.newRefund(
      transactionId,
      transactionRefundRequest
    )

    expect(transaction).toBeDefined()
    expect(transaction.body).toBeDefined()
    expect(transaction.body.amount).toBe(AMOUNT)
  })
})

describe('#voidTransaction', () => {
  test('it should void a specific transaction', async () => {
    const transactionToVoid = await client
      .newTransaction(makeid(10), transactionRequest)
      .catch(() => {
        throw new Error('an error occurred while creating the transaction')
      })

    const transaction = await client.voidTransaction(
      transactionToVoid.body.id ?? ''
    )

    expect(transaction).toBeDefined()
    expect(transaction.body).toBeDefined()
    expect(transaction.body.status).toBe('authorization_voided')
  })
})

describe('#newTransactionWithConnectionOptions', () => {
  test('it should create a transaction with connectionOptions', async () => {
    const req = new TransactionRequest()
    req.amount = AMOUNT
    req.currency = 'USD'
    req.metadata = { source: 'node_sdk' }

    req.paymentMethod = {
      method: 'card',
      number: '4111111111111111',
      expirationDate: '11/25',
      securityCode: '123',
      redirectUrl: 'https://gr4vy.com',
      buyerId: '1ec415c3-7cdb-4ed2-858d-0c7569c43bbf',
    }

    req.connectionOptions = {
      forterAntiFraud: {
        isGuestBuyer: false,
        totalDiscount: {
          couponCodeUsed: 'FATHERSDAY2015',
          discountType: 'COUPON',
          couponDiscountAmount: {
            amountUsd: '10.99',
            amountLocalCurrency: '8.99',
            currency: 'GBP',
          },
          couponDiscountPercent: '10%',
        },
      },
    }

    req.browserInfo = {
      colorDepth: '24',
      javaEnabled: 'true',
      javascriptEnabled: 'true',
      language: 'en',
      screenHeight: '864',
      screenWidth: '1536',
      timeZoneOffset: '-330',
      userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, ikeGecko) Chrome/99.0.4844.74 Safari/537.36',
      userDevice: 'desktop',
      acceptHeader: 'application/json',
    }

    const transaction = await client
      .newTransaction(makeid(10), req)
      .catch((error) => {
        console.dir(error.response.body) // the parsed JSON of the error
        console.dir(error.response.statusCode) // the status code of the error
        throw new Error('an error occurred while creating the transaction')
      })

    expect(transaction).toBeDefined()
    expect(transaction.body).toBeDefined()
    transactionId = transaction.body.id
    expect(transactionId).toHaveLength(36)
  })
})

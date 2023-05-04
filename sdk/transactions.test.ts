import fs from 'fs'
import path from 'path'
import { TransactionCaptureRequest } from '../model/transactionCaptureRequest'
import { TransactionPaymentMethodRequest } from '../model/transactionPaymentMethodRequest'
import { TransactionRefundRequest } from '../model/transactionRefundRequest'
import { TransactionRequest } from '../model/transactionRequest'
import Client from './client'

let key
if (process.env.PRIVATE_KEY) {
  key = process.env.PRIVATE_KEY
} else {
  const my_path = path.resolve(__dirname, './private_key.pem')
  key = String(fs.readFileSync(my_path))
}

const client = new Client({
  gr4vyId: 'spider',
  environment: 'sandbox',
  privateKey: key,
})

const AMOUNT = 1299
let transactionId

jest.setTimeout(30000)

const transactionRequest = new TransactionRequest()
transactionRequest.amount = AMOUNT
transactionRequest.currency = 'GBP'
transactionRequest.metadata = { source: 'node_sdk' }
transactionRequest.paymentMethod = new TransactionPaymentMethodRequest()
transactionRequest.paymentMethod.method = 'card'
transactionRequest.paymentMethod.number = '4111111111111111'
transactionRequest.paymentMethod.expirationDate = '11/25'
transactionRequest.paymentMethod.securityCode = '123'

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
    expect(transactions.body.items.length).toBeGreaterThan(0)
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

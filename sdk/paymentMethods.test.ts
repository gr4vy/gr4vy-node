import fs from 'fs'
import path from 'path'
import { PaymentMethodRequest } from '../model/paymentMethodRequest'
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
  privateKey: key,
})

let paymentMethodId

jest.setTimeout(30000)

describe('#storePaymentMethod', () => {
  test('it should create a payment method', async () => {
    //method
    //number
    //expirationDate
    //securityCode
    //externalIdentifier
    //buyerId
    //buyerExternalIdentifier
    //redirectUrl
    //currency
    //country
    //environment
    const paymentMethodRequest = new PaymentMethodRequest()
    paymentMethodRequest.method = 'card'
    paymentMethodRequest.number = '4111111111111111'
    paymentMethodRequest.expirationDate = '12/32'
    paymentMethodRequest.securityCode = '123'

    const paymentMethod = await client
      .storePaymentMethod(paymentMethodRequest)
      .catch((error) => {
        console.dir(error.response.body) // the parsed JSON of the error
        console.dir(error.response.statusCode) // the status code of the error
        throw new Error('an error occurred while creating the payment method')
      })

    expect(paymentMethod).toBeDefined()
    expect(paymentMethod.body).toBeDefined()
    paymentMethodId = paymentMethod.body.id
    expect(paymentMethodId).toHaveLength(36)
    expect(paymentMethod.body.status).toEqual('succeeded')
  })
})

describe('#listPaymentMethods', () => {
  test('it should find some payment methods', async () => {
    const paymentMethods = await client.listPaymentMethods()
    expect(paymentMethods).toBeDefined()
    expect(paymentMethods.body.items).toBeDefined()
    expect(paymentMethods.body.items.length).toBeGreaterThan(0)
  })
})

describe('#getPaymentMethod', () => {
  test('it should find a specific paymentMethod', async () => {
    const paymentMethod = await client.getPaymentMethod(paymentMethodId)
    expect(paymentMethod).toBeDefined()
    expect(paymentMethod.body).toBeDefined()
    expect(paymentMethod.body.scheme).toBe('visa')
  })
})

describe('#deletePaymentMethod', () => {
  test('it should delete a specific paymentMethod', async () => {
    const paymentMethod = await client
      .deletePaymentMethod(paymentMethodId)
      .catch((error) => {
        console.dir(error.response.body) // the parsed JSON of the error
        console.dir(error.response.statusCode) // the status code of the error
        throw new Error('an error occurred while creating the payment method')
      })
    expect(paymentMethod.response.statusCode).toEqual(204)
  })
})

//listBuyerPaymentMethods: typeof PaymentMethodsApi.prototype.listBuyerPaymentMethods

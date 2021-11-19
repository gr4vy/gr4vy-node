import fs from 'fs'
import path from 'path'
import { PaymentServiceRequest } from '../model/paymentServiceRequest'
import { PaymentServiceUpdate } from '../model/paymentServiceUpdate'
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

const DISPLAY_NAME = 'My Payment Service'
let paymentServiceId

jest.setTimeout(30000)

describe('#addPaymentService', () => {
  test('it should create a payment service', async () => {
    const paymentServiceRequest = new PaymentServiceRequest()
    paymentServiceRequest.displayName = DISPLAY_NAME
    paymentServiceRequest.fields = [
      {
        key: 'secret_key',
        value:
          'sk_test_51IkXd4C4K0WD5Kw9hkuQUkWq5PB4XGW7UcYdkVj5tuLh9dHiuOSbvdSlEVd3s8r3N3MJwTawwspGLmZGwHnHD0c800KA5x6rzk',
      },
    ]
    paymentServiceRequest.acceptedCountries = ['GB']
    paymentServiceRequest.acceptedCurrencies = ['GBP']
    paymentServiceRequest.paymentServiceDefinitionId = 'stripe-card'

    const paymentService = await client
      .addPaymentService(paymentServiceRequest)
      .catch((error) => {
        console.dir(error.response.body) // the parsed JSON of the error
        console.dir(error.response.statusCode) // the status code of the error
        throw new Error('an error occurred while creating the payment service')
      })

    expect(paymentService).toBeDefined()
    expect(paymentService.body).toBeDefined()
    paymentServiceId = paymentService.body.id
    expect(paymentServiceId).toHaveLength(36)
  })
})

describe('#listPaymentServices', () => {
  test('it should find some payment services', async () => {
    const paymentServices = await client.listPaymentServices()
    expect(paymentServices).toBeDefined()
    expect(paymentServices.body.items).toBeDefined()
    expect(paymentServices.body.items.length).toBeGreaterThan(0)
  })
})

describe('#getPaymentService', () => {
  test('it should find a specific payment service', async () => {
    const paymentService = await client.getPaymentService(paymentServiceId)
    expect(paymentService).toBeDefined()
    expect(paymentService.body).toBeDefined()
    expect(paymentService.body.displayName).toBe(DISPLAY_NAME)
  })
})

describe('#updatePaymentService', () => {
  test('it should update a specific payment service', async () => {
    const paymentServiceUpdate = new PaymentServiceUpdate()
    paymentServiceUpdate.displayName = 'NewDisplayName'

    const paymentService = await client.updatePaymentService(
      paymentServiceId,
      paymentServiceUpdate
    )

    expect(paymentService).toBeDefined()
    expect(paymentService.body).toBeDefined()
    expect(paymentService.body.displayName).toBe('NewDisplayName')
    expect(paymentService.body.paymentServiceDefinitionId).toBe('stripe-card')
  })
})

describe('#deletePaymentService', () => {
  test('it should delete a specific payment service§', async () => {
    const paymentService = await client.deletePaymentService(paymentServiceId)
    expect(paymentService.response.statusCode).toEqual(204)
  })
})

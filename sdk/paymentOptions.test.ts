import fs from 'fs'
import path from 'path'
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

jest.setTimeout(30000)

describe('#listPaymentOptions', () => {
  test('it should list payment options', async () => {
    const paymentOptions = await client.listPaymentOptions().catch((error) => {
      console.dir(error.response.body) // the parsed JSON of the error
      console.dir(error.response.statusCode) // the status code of the error
      throw new Error('an error occurred while listing the payment options')
    })

    expect(paymentOptions).toBeDefined()
    expect(paymentOptions.body).toBeDefined()
    expect(paymentOptions.body.items.length).toBeGreaterThan(0)
  })
})

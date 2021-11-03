import Client from './client'
import { BuyerRequest } from '../model/buyerRequest';
import { BuyerUpdate } from '../model/buyerUpdate';
import fs from 'fs'

const path = require('path').resolve(__dirname, './private_key.pem')
const key = String(fs.readFileSync(path));

const client = new Client({
  gr4vyId: "spider",
  privateKey: key
});

var paymentServiceDefinitionId;

jest.setTimeout(30000);

describe('#listPaymentServiceDefinitions', () => {
  test('it should list payment service definitions', async () => {
    const psd = await client.listPaymentServiceDefinitions().catch(error => {
      console.dir(error.response.body) // the parsed JSON of the error
      console.dir(error.response.statusCode) // the status code of the error
      throw new Error('an error occurred while creating the buyer')
    })

    expect(psd).toBeDefined()
    expect(psd.body).toBeDefined()
    paymentServiceDefinitionId = psd.body.items[0].id
    expect(paymentServiceDefinitionId.length).toBeGreaterThan(0)
  })

})

describe('#getPaymentServiceDefinition', () => {
  test('it should find a specific payment service definition', async () => {
    const psd = await client.getPaymentServiceDefinition(paymentServiceDefinitionId);
    expect(psd).toBeDefined()
    expect(psd.body.id).toBeDefined()
    expect(psd.body.id).toBe(paymentServiceDefinitionId)
  })
})


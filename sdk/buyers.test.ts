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

const DISPLAY_NAME = "Tester T.";
var buyerId;

jest.setTimeout(30000);

describe('#addBuyer', () => {
  test('it should create a buyer', async () => {
    const buyerRequest = new BuyerRequest()
    buyerRequest.displayName = DISPLAY_NAME
    buyerRequest.externalIdentifier = "test-" + (Math.random() + 1).toString(36).substring(8);
    
    const buyer = await client.addBuyer(buyerRequest).catch(error => {
      console.dir(error.response.body) // the parsed JSON of the error
      console.dir(error.response.statusCode) // the status code of the error
      throw new Error('an error occurred while creating the buyer')
    })


    expect(buyer).toBeDefined()
    expect(buyer.body).toBeDefined()
    buyerId = buyer.body.id
    expect(buyerId.length).toEqual(36)
  })

})

describe('#listBuyers', () => {
  test('it should find some buyers', async () => {
    const buyers = await client.listBuyers();
    expect(buyers).toBeDefined()
    expect(buyers.body.items).toBeDefined()
    expect(buyers.body.items.length).toBeGreaterThan(0)
  })

})

describe('#getBuyer', () => {
  test('it should find a specific buyer', async () => {
    const buyer = await client.getBuyer(buyerId);
    expect(buyer).toBeDefined()
    expect(buyer.body).toBeDefined()
    expect(buyer.body.displayName).toBe(DISPLAY_NAME)
  })

})

describe('#updateBuyer', () => {
  test('it should update a specific buyer', async () => {

    const buyerUpdate = new BuyerUpdate()
    buyerUpdate.displayName = "NewDisplayName"
    const buyer = await client.updateBuyer(buyerId, buyerUpdate);
    
    expect(buyer).toBeDefined()
    expect(buyer.body).toBeDefined()
    expect(buyer.body.displayName).toBe("NewDisplayName")
  })

})

describe('#deleteBuyer', () => {
  test('it should delete a specific buyer', async () => {
    const buyer = await client.deleteBuyer(buyerId);
    expect(buyer.response.statusCode).toEqual(204)
  })

})

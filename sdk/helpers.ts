import fs from 'fs'
import path from 'path'
import Client from './client'

export function getTestClient() {
  let key
  if (process.env.PRIVATE_KEY) {
    key = process.env.PRIVATE_KEY
  } else {
    const my_path = path.resolve(__dirname, './private_key.pem')
    key = String(fs.readFileSync(my_path))
  }

  const gr4vyId = process.env.GR4VY_ID || 'spider'

  return new Client({
    gr4vyId,
    environment: 'sandbox',
    privateKey: key,
  })
}

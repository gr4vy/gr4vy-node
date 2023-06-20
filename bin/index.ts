#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { argv, exit } from 'process'
import { version } from '../package.json'
import { Client, JWTScope } from '../sdk'
import { EmbedParams } from '../sdk/authentication'

const command = argv[2]

const usage = ```
Gr4vy CLI (v${version})

To use this CLI please ensure you have a .gr4vyrc.json file
as well as a private key in your current directory.

{
  "gr4vyId": "acme",
  "environment": "sandbox",
  "privateKey": "./private_key.pem"
}

Usage:
  gr4vy --help, -h                                              Show this message
  gr4vy version, --version, -v                                  Print out the installed version of this CLI
  gr4vy token [scopes=*.read,*.write] [expiresIn=30s]           Generates a bearer token for server to server calls
  gr4vy embed amount=100 currency=USD [key2=value2, ... ]       Generates an Embed specific token 
```

const CONFIG_FILENAME = '.gr4vyrc.json'

const args = (argv: string[], key: string, defaults: string[]): string[] =>
  argv
    .find((arg) => arg.startsWith(`${key}=`))
    ?.split('=')?.[1]
    ?.split(',') || defaults

const arg = (argv: string[], key: string, defaults: string): string =>
  args(argv, key, [defaults])[0]

const load = () => {
  let config

  try {
    const file = path.resolve(CONFIG_FILENAME)
    config = JSON.parse(String(fs.readFileSync(file)))
  } catch (error) {
    console.error(`Error loading configuration file ${CONFIG_FILENAME}`)
    exit(1)
  }

  try {
    const file = path.resolve(config['privateKey'])
    config['privateKey'] = String(fs.readFileSync(file))
  } catch (error) {
    console.error(`Error loading private key "${config['privateKey']}"`)
    exit(1)
  }

  return config
}

const embedParams = (argv: string[]): EmbedParams => {
  const params = {}

  argv
    .map((arg) => arg.split('='))
    .filter(([key, value]) => key && value)
    .forEach(([key, value]) => (params[key] = value))

  if (!Object.keys(params).includes('amount')) {
    console.error(`Please provide an amount`)
    exit(1)
  }
  if (!Object.keys(params).includes('currency')) {
    console.error(`Please provide an currency`)
    exit(1)
  }

  return params as EmbedParams
}

const generateBearerToken = async (argv: string[]): Promise<string> => {
  const scopes = args(argv, 'scopes', ['*.read', '*.write'])
  const expiresIn = arg(argv, 'expiresIn', '30s')
  const config = load()

  const client = new Client(config)
  return await client.getBearerToken(scopes as JWTScope[], expiresIn)
}

const generateEmbedToken = async (argv: string[]): Promise<string> => {
  const params = embedParams(argv)
  const config = load()

  const client = new Client(config)
  return await client.getEmbedToken(params as EmbedParams)
}

const run = async () => {
  if (argv.includes('--help') || argv.includes('--h')) {
    console.log(usage)
    return
  }

  if (argv.includes('--version') || argv.includes('-v')) {
    console.log(version)
    return
  }

  switch (command) {
    case 'version':
      console.log(version)
      break

    case 'token': {
      const token = await generateBearerToken(argv.slice(3))
      console.log(token)
      break
    }

    case 'embed': {
      const token = await generateEmbedToken(argv.slice(3))
      console.log(token)
      break
    }

    default:
      console.log(usage)
      break
  }
}

run()

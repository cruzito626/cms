import fs from 'fs'
import path from 'path'
import { isArray, isObject } from 'lodash'

const ENV = process.env.ENVIRONMENT || 'development'

const config = JSON.parse(
  fs.readFileSync(path.join(__dirname, './db.json'), 'utf8')
)[ENV]

if (!config) {
  console.error(`No dbd config for '${ENV}' environment`)
  process.exit(1)
}

function hasEnvVariable (localConfig) {
  return !!localConfig.ENV
}

function getEnvVariable (localConfig) {
  return process.env[localConfig.ENV]
}

function needsRecursion (localConfig) {
  return isObject(localConfig) && !localConfig.ENV
}

function processConfig (localConfig) {
  const processedConfig = {}
  Object.keys(localConfig).forEach((field) => {
    const processedField = localConfig[field]
    if (isArray(processedField)) {
      processedConfig[field] = processedField.map((f) => {
        if (needsRecursion(f)) {
          return processConfig(f)
        }
        if (hasEnvVariable(f)) {
          return getEnvVariable(f)
        }
        return f
      })
    } else if (needsRecursion(processedField)) {
      processedConfig[field] = processConfig(processedField)
    } else if (hasEnvVariable(processedField)) {
      processedConfig[field] = getEnvVariable(processedField)
    } else {
      processedConfig[field] = processedField
    }
  })

  return processedConfig
}

const CONFIG = processConfig(config)
export default CONFIG

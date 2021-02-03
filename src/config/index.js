import 'dotenv/config'

export const { NODE_ENV, ENVIRONMENT = '' } = process.env
export const IS_PROD = ENVIRONMENT.includes('production')
export const IS_TEST = ENVIRONMENT.includes('test')
export const IS_DEV =
  ENVIRONMENT.includes('development') || ENVIRONMENT === ''
export const PORT = +process.env.PORT || 5000

export const {
  SECRET_KEY = 'secret'
} = process.env

const {
  SECRET_KEY_1 = 'secret',
  SECRET_KEY_2 = 'secret',
  SECRET_KEY_3 = 'secret'
} = process.env

export const SECRET_KEYS = [SECRET_KEY_1, SECRET_KEY_2, SECRET_KEY_3]

export { default as POSTGRES } from './db'

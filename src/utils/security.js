import crypto from 'crypto'

import { SECRET_KEYS } from '../config'

export const encrypt = (str) => {
  let secretKey = SECRET_KEYS.map(key => `${key}${str.toString()}`).join('')
  secretKey = crypto
    .createHash('sha1')
    .update(secretKey)
    .digest('hex')

  return crypto
    .createHash('sha1')
    .update(`${secretKey}${str.toString()}`)
    .digest('hex')
}

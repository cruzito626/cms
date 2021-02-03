import { gql } from 'apollo-server'

import types from './types'
import mutations from './mutations'
import queries from './queries'

export default gql`
  ${types}
  ${queries}
  ${mutations}
`

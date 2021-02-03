import { ApolloServer } from 'apollo-server'

import models from './models'
import resolvers from './resolvers'
import typeDefs from './type-defs'

const schema = {
  typeDefs,
  resolvers,
  context: {
    models
  }
}

const server = new ApolloServer(schema)

export default server

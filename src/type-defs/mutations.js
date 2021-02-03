import { gql } from 'apollo-server'

export default gql`
  type Mutation {
    createUser(user: UserInput!): User!
    createPost(post: PostInput!): Post!
  }
`

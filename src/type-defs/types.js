import { gql } from 'apollo-server'

export default gql`
  scalar UUID
  scalar Datetime

  type User {
    id: UUID!
    username: String!
    email: String!
    privilege: String!
    active: Boolean!
    createdAt: Datetime!
    updatedAt: Datetime!
    posts: [Post!]
  }

  type Post {
    id: UUID!
    userId: UUID!
    title: String!
    slug: String!
    content: String!
    readingTiem: String!
    language: String!
    image: String!
    published: Boolean!
    createdAt: Datetime!
    updatedAt: Datetime!
    tags: [Tag!]
  }

  type Tag {
    id: UUID!
    name: String!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  input PostInput {
    title: String!
    slug: String!
    content: String!
    userId: UUID!
    tags: [TagInput]
  }

  input TagInput {
    name: String!
  }
`

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
    registryItem: String
    rsvp: Rsvp
  }
  type Comment {
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Post {
    _id: ID
    content: String
    postAuthor: String
    createdAt: String
    image: String
    comments: [Comment]
  }

  type Rsvp {
    response: String!
    guests: Int!
    children: Int!
    specialFood: String
    foodAllergy: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts: [Post]
    post(postId: ID!): Post
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(content: String!, postAuthor: String!, image: String): Post
    addComment(
      postId: String!
      commentText: String!
      commentAuthor: String!
    ): Post
    saveRsvp(
      response: Boolean!
      guests: Int!
      children: Int!
      specialFood: String
      foodAllergy: String
    ): User
    changeRsvp(
      response: Boolean!
      guests: Int!
      children: Int!
      specialFood: String
      foodAllergy: String
    ): User
    addRegistryItem(registryItem: String, userId: ID): User
  }
`;

module.exports = typeDefs;

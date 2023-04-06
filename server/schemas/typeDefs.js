const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    rsvp: [Rsvp]
    registryItem: String
  }

  type Rsvp {
    response: Boolean!
    guests: Int!
    children: Int!
    specialFood: String
    foodAllergy: String
  }

  type Post {
    postId: Int!
    author: String
    content: String
    comments: [Comment] 
  }

  type Comment {
    commentText: String! 
    author: String
    postId: Int
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveRsvp(response: Boolean!, guests: Int!, children: Int!, specialFood: String, foodAllergy: String): User
    changeRsvp(
        response: Boolean!, guests: Int!, children:Int!, specialFood: String, foodAllergy: String): User
    addRegistryItem(registryItem: String): User
    addPost(postId: Int!, author: String, content: String): User
    addComment(commentText: String!, author: String, postId: Int): Post
  }
`;

module.exports = typeDefs;

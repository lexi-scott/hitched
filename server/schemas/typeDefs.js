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
    guests: Integer!
    children: Integer!
    specialFood: String
    foodAllergy: String
  }

  type Post {
    postId: Integer!
    author: User
    content: String
    comments: [comment] 
  }

  type Comment {
    commentText: String! 
    commentAuthor: User
    postID: Integer
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
    saveRsvp(response: Boolean!, guests: Integer!, children: Integer!, specialFood: String, foodAllergy: String): User
    changeRsvp(
        response: Boolean!, guests: Integer!, children: Integer!, specialFood: String, foodAllergy: String): User
    addRegistryItem(registryItem: String): User
    addPost(postId: Integer!, author: User, content: String): User
    addComment(commentText: String!, commentAuthor: User, postID: Integer): Post
  }
`;

module.exports = typeDefs;

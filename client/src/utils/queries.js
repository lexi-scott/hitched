import { gql } from "@apollo/client";


export const QUERY_USERS = gql`
  {
    users {
      _id
      username
      email
      posts {
        _id
        content
        postAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      rsvp
      reguitryItem
      posts
    }
  }
`;

export const QUERY_RSVP = gql`
query allrsvps {
    rsvps {
      _id
      guests
      children
      specialFood
      foodAllergy
    }
  }
`;



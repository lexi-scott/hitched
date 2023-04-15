import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  {
    users {
      _id
      username
      email
      weddingparty
      couple
      rsvp {
        response
        guests
        children
        specialFood
        foodAllergy
      }
      posts {
        _id
        content
        postAuthor
        image
        likes
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      weddingparty
      couple
      rsvp {
        response
        guests
        children
        specialFood
        foodAllergy
      }
      posts {
        likes
        content
        postAuthor
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  {
    posts {
      _id
      postAuthor
      content
      image
      createdAt
      likes {
        name
        userId
      }
      comments {
        commentText
        commentAuthor
      }
    }
  }
`;

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
        image
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
      rsvp
      registryItem
      posts
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
      comments {
        commentText
        commentAuthor
      }
    }
  }
`;

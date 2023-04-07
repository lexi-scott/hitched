import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($content: String!, $postAuthor: String!) {
    addPost(content: $content, postAuthor: $postAuthor) {
      content
      postAuthor
      createdAt
    }
  }
`;

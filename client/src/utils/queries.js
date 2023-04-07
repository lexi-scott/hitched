import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      rsvp
      reguitryItem
    }
  }
`;

export const GET_ME = gql`
query Me {
  me {
    _id
    username
    email
    bookCount
    rsvp
    reguitryItem
  }
}
`;

export const QUERY_RSVP = gql `
query allrsvps {
    rsvps {
        _id
        guests
        children
        specialFood
        foodAllergy
    }
}
`
import { gql } from '@apollo/client';

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
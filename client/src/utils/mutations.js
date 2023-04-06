import { gql } from '@apollo/client';

export const ADD_RSVP = gql`
mutation addRSVP() {
    addRSVP () {
        _id
        guests
        children
        specialFood
        foodAllergy
    }
}
`
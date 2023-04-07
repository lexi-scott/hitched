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

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_RSVP = gql`
mutation SaveRsvp(response: Boolean!, guests: Int!, children: Int!, specialFood: String, foodAllergy: String) {
    saveRsvp(response: $response, guests: $guests, children: $chilren, specialFood: $specialFood, foodAllergy: $foodAllergy){
        _id
        guests
        children
        specialFood
        foodAllergy
        username
    }
}
`;

export const CHANGE_RSVP = gql`
mutation ChangeRsvp(response: Boolean!, guests: Int!, children: Int!, specialFood: String, foodAllergy: String) {
    changeRsvp(response: $response, guests: $guests, children: $chilren, specialFood: $specialFood, foodAllergy: $foodAllergy){
        _id
        guests
        children
        specialFood
        foodAllergy
        username
    }
}
`;

export const ADD_REGISTRY_ITEM = gql`
mutation AddRegistryItem(registryItem: String) {
    addRegistryItem(registryItem: $registryItem){
        username
    }
}
`;

export const ADD_POST = gql`
 mutation AddPost(postId: Int!, author: String, content: String){
    addPost(postId: $postId, author: $author, content: $content){
        username
    }
 }
 `;

export const ADD_COMMENT = gql`
 mutation Addcomment(commentText: String!, author: String, postId: Int){
    addComment(commentText: $commentText, author: $author, postId: $postId){

 }
 }
 `;

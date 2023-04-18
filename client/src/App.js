import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const personalDetails = {
    name: "Dave & Buster",
    location: "The Girl & the Fig, 110 W Spain St, Sonoma, CA 95476",
    tagline: "Say Yes on October 10, 2023",
    email: "daveandbustermarried@mail.com",
    availability: "October 10, 2023 6PM - 11PM",
    brand:
      "We are so in love and can't wait to share our day with you. More information about our relationship with great anecdotes!",
  };

  return (
    <ApolloProvider client={client}>
      <>
        <Header />
        <AnimatedRoutes personalDetails={personalDetails} />
      </>
    </ApolloProvider>
  );
}

export default App;

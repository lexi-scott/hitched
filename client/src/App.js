// import Header from "./components/Header";
// import Login from "./pages/login/login";
// import AnimatedRoutes from "./components/AnimatedRoutes";

// import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
// import NavLinks from "./components/NavLinks";

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       // Your app components
//       <Header>
//         <AnimatedRoutes>
//         </AnimatedRoutes>
//       </Header>
//       <Login></Login>
//     </ApolloProvider>
//   );
// }


// // // Construct our main GraphQL API endpoint
// // const httpLink = createHttpLink({
// //   uri: '/graphql',
// // });

// // // Construct request middleware that will attach the JWT token to every request as an `authorization` header
// // const authLink = setContext((_, { headers }) => {
// //   // get the authentication token from local storage if it exists
// //   const token = localStorage.getItem('id_token');
// //   // return the headers to the context so httpLink can read them
// //   return {
// //     headers: {
// //       ...headers,
// //       authorization: token ? `Bearer ${token}` : '',
// //     },
// //   };
// // });


// // const client = new ApolloClient({
// //   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
// //   link: authLink.concat(httpLink),
// //   cache: new InMemoryCache(),
// // });


// // function App() {
// //   const personalDetails = {
// //     name: "Dave & Buster",
// //     location: "Napa, CA",
// //     tagline: "Say Yes on October 10, 2023",
// //     email: "daveandbustermarried@mail.com",
// //     availability: "Save the Date!",
// //     brand:
// //       "We met at Subway and fell in love because the worker said they were out of mayo and both of us got so angy we decided we should spend our lives together being miserable!!",
// //   };

// //   return (
// //     <>
// //     <Login></Login>
   
// //       {/* <Header />
// //       <AnimatedRoutes personalDetails={personalDetails} /> */}
// //     </>
// //   );
// // }

// export default App;


import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Login from "./pages/login/login";
import Landing from "./pages/landing/Landing";
import AnimatedRoutes from "./components/AnimatedRoutes";
import NavLinks from "./components/NavLinks";
import Contact from './pages/rsvp/Contact';
import AboutMe from "./components/AboutMe";


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Landing />}
              />
              <Route 
                path="/rsvp" 
                element={<Contact />}
              />
              <Route 
                path="/about" 
                element={<AboutMe />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              
            </Routes>
          </div>

         
        </div>
    </ApolloProvider>
  );
}

export default App;

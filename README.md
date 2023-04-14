
# Hitched 
A website hosted by the couple getting married where guests sign in using their email. Once logged in guests will be taken to a landing page with a picture of the couple and the wedding date and location. Users can use the navigation bar to navigate to an about me page, rsvp page, registry, and social media. On the rsvp page guests will input number of guests attending and dietary preferences. Guests can also pay a donation to the couples honeymoon as a wedding gift on the resistry page using stripe. On the social media page guests can post images and comments aswell as comment on other users images.


## Description 


## Technology Used
* Uses the [express package](https://www.npmjs.com/package/express).
* Uses the [mongodb package](https://www.npmjs.com/package/mongodb) 
* Uses the [moongoose package](https://www.npmjs.com/package/mongoose) 
* Uses the [dotenv package](https://www.npmjs.com/package/dotenv) 
* Uses the [react package](https://www.npmjs.com/package/react)
* Uses the [bootstrap package](https://www.npmjs.com/package/bootstrap)

## Project Structure
.
├── client // contains the client-side code
│   ├── node_modules
│   ├── public
│   ├── src
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
├── server // contains the server-side code
│   ├── node_modules
│   ├── public
│   ├── src
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
├── node_modules
├── models // contains the MongoDB models

├── server.js // the main server file
├── package.json
├── package-lock.json
└── README.md

  
## Database Models
**User**:

* `username`: String, Required, Unique
* `email`: String, Required, Unique, Must match a valid email address
* `weddingparty`: Boolean
* `couple`: Boolean
* `rsvp`: of type nested docuement RSVPschema
* `weddingparty`: Boolean
* `posts`: Array of Post documents

**Thought**:

* `thoughtText`
  * String
  * Required
  * Must be between 1 and 280 characters

* `createdAt`
  * Date
  * Set default value to the current timestamp
  * Use a getter method to format the timestamp on query

* `username` (The user that created this thought)
  * String
  * Required

* `reactions` (These are like replies)
  * Array of nested documents created with the `reactionSchema`

**Schema Settings**:

A virtual called `reactionCount` is provided that retrieves the length of the thought's `reactions` array field on query.

---

## Installation

  To install the necessary dependencies, run the following command:
  ```
  npm i
  ```
  To install the necessary database, schema, and seed data, run the following commands in mysql2 CLI:
  ```
  source db/schema.sql
  ```
  Create a .env file
  ```
  Rename the .env_EXAMPLE file to .env
  Add the database name, your username, and password for the MySQL server, the database host, and the port in the.env file
  ```
  To create the seed data, do the following steps:
  ```
  npm run seed
  ```
  Run the server using the following command:
  ```
  node server

## Usage
  1. You can access the file in the GitHub repository: https://github.com/rbhumbla1/E-Commerce-Back-End
2. Run the application in the terminal using this command: 
```
node server
```
3. Open the website using the following link:

  [Live website](https://budget-app-nodejs.herokuapp.com/)

The app is deployed using heroku. 
Wedding guests will get an email to a website link and sign in using their email.

## Contributors

* [Adena Marom](https://github.com/AdMarom)

* [Deorren Erive](https://github.com/erive92d)

* [Karrine Sagir](https://github.com/karinnesagir)

* [Rima Bhumbla](https://github.com/rbhumbla1)

@lexi-scott
@AdMarom

## Demo

## Development

## Presentation

https://docs.google.com/presentation/d/1b3vIXuHMUF7_EAafCYmlaRt49ICSOWy8mv46IpOJarI/edit?usp=sharing

## Questions

  If you have any questions about the repository and project, or would like to open an issue or would like to contact us for contributing or any other subject, you can contact the owners
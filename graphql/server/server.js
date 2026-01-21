//
// graphql poc
//

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// 1. Schema Definition (TypeDefs)
const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;

// 2. Mock Data Source
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  { id: '3', name: 'Smith', email: 'smith@example.com' },
  { id: '4', name: 'Jane ', email: 'jane@example.com' },
  { id: '5', name: 'JS', email: 'js@example.com' },
];

// 3. Resolvers
const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((u) => u.id === id),
  },
  Mutation: {
    createUser: (_, { name, email }) => {
      const newUser = { id: String(users.length + 1), name, email };
      users.push(newUser);
      return newUser;
    },
  },
};

// 4. Server Initialization
const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);

// Run at http://localhost:4000/

// Query Example:
// query GetUser {
//     user(id: "1") {
//       email
//       name
//     }
//   }

// Response
// {
//     "data": {
//       "user": {
//         "email": "john@example.com",
//         "name": "John Doe"
//       }
//     }
// }

// query Users {
//     users {
//       name
//       email
//     }
//   }

// Response
// {
//     "data": {
//       "users": [
//         {
//           "name": "John Doe",
//           "email": "john@example.com"
//         },
//         {
//           "name": "Jane Smith",
//           "email": "jane@example.com"
//         }
//       ]
//     }
//   }

// Basic Mutation Example:
// mutation Mutation {
//     createUser(name: "Alice John", email: "alice@example.com") {
//       id
//       name
//       email
//     }
//   }

// Response
// {
//     "data": {
//       "createUser": {
//         "id": "3",
//         "name": "Alice John",
//         "email": "alice@example.com"
//       }
//     }
//   }

// Using Variables for Mutation:
// Operation
// mutation Mutation($name: String!, $email: String!) {
//     createUser(name: $name, email: $email) {
//       id
//       name
//       email
//     }
//   }

// Variables
// {
//     "name": "ABC",
//     "email": "abc@example.com"
//   }

// Response
// {
//     "data": {
//       "createUser": {
//         "id": "3",
//         "name": "ABC",
//         "email": "abc@example.com"
//       }
//     }
//   }

// GraphQL Node.js app (TRY)---------------------------------------------<<
// import { buildSchema } from "graphql";
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);
// const root = { hello: () => "Hello from GraphQL!" };

// GraphQL Node.js app (Working but no output)---------------------------<<
// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";

// // 1. Define your schema
// const typeDefs = `
//   type Book {
//     title: String
//     author: String
//   }

//   type Query {
//     books: [Book]
//   }
// `;

// const books = [
//   { title: "The Awakening", author: "Kate Chopin" },
//   { title: "City of Glass", author: "Paul Auster" },
// ];

// // 2. Define your resolvers
// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };

// // 3. Create an Apollo Server instance
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// // 4. Start the server
// startStandaloneServer(server, {
//   listen: { port: 4000 },
// }).then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

// // GraphQL Node.js app ---------------------------<<
// const express = require("express");
// const { ApolloServer } = require("@apollo/server");
// const { expressMiddleware } = require("@apollo/server/express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// async function startServer() {
//   const app = express();
//   const server = new ApolloServer({
//     typeDefs: `
//         type Todo {
//             id: ID!
//             title: String!
//             completed: Boolean
//         }
//         type Query {
//             getTodos: [Todo]
//         }
//     `,
//     resolvers: {},
//   });

//   app.use(bodyParser.json());
//   app.use(cors());

//   await server.start();

//   app.use("/graphql", expressMiddleware(server));

//   app.listen(8000, () => console.log("Server Started at PORT 8000"));
// }

// startServer();

// Sample Node.js app ---------------------------<<
// import express from "express";
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// chalk ----------------------------------------<<
// import chalk from "chalk";

// function hello() {
//   console.log(
//     chalk.hex("#FFA500")(
//       `Hello node.js!\nUsing ${process.version} node version.`
//     )
//   );
// }

// hello();

// Test ----------------------------------------<<
// console.log(`Hello Node.js`, process);

// import chalk from "chalk";
// console.log(chalk.blue("Hello world!"));

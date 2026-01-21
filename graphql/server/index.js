//
// graphql poc
//

// npm install @as-integrations/express5

// const express = require('express');
// import { ApolloServer } from '@apollo/server';
// import { expressMiddleware } from '@apollo/server/express';
// import { json } from 'body-parser';
// import cors from 'cors';

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

//   app.use(json());
//   app.use(cors());

//   await server.start();

//   app.use('/graphql', expressMiddleware(server));

//   app.listen(8000, () => console.log('Server Started at PORT 8000'));
// }

// startServer();

// Ref :- https://www.apollographql.com/docs/apollo-server/api/express-middleware
// npm install @apollo/server @as-integrations/express5 express graphql cors
// import { ApolloServer } from '@apollo/server';
// import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
// import { expressMiddleware } from '@as-integrations/express5';
// import express from 'express';
// import http from 'http';
// import cors from 'cors';
// import { typeDefs, resolvers } from './schema';
// interface MyContext {
//   token?: string;
// }
// // Required logic for integrating with Express
// const app = express();
// // Our httpServer handles incoming requests to our Express app.
// // Below, we tell Apollo Server to "drain" this httpServer,
// // enabling our servers to shut down gracefully.
// const httpServer = http.createServer(app);
// // Same ApolloServer initialization as before, plus the drain plugin
// // for our httpServer.
// const server = new ApolloServer<MyContext>({
//   typeDefs,
//   resolvers,
//   plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
// });
// // Ensure we wait for our server to start
// await server.start();
// // Set up our Express middleware to handle CORS, body parsing,
// // and our expressMiddleware function.
// app.use(
//   '/',
//   cors<cors.CorsRequest>(),
//   express.json(),
//   // expressMiddleware accepts the same arguments:
//   // an Apollo Server instance and optional configuration options
//   expressMiddleware(server, {
//     context: async ({ req }) => ({ token: req.headers.token }),
//   })
// );
// // Modified server startup
// await new Promise<void>((resolve) =>
//   httpServer.listen({ port: 4000 }, resolve)
// );
// console.log(`🚀 Server ready at http://localhost:4000/`);

// Code from chatgpt ------------------------------<<<<< APP IS CRASHING

import express from 'express';
import { ApolloServer } from '@apollo/server';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

// Define your GraphQL schema
const schema = buildSchema(`
  type Query {
    hello: String
  }`);

// Define your resolvers
const root = {
  hello: () => {
    return 'Hello, GraphQL with Express (ESM )!';
  },
};

const app = express();

// GraphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, // Enable GraphiQL UI
  })
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/graphql`);
});

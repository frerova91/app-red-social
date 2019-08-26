const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const express = require("express");

const context = require("./schema/context");
const typeDefs = require("./schema/typedefs");
const resolvers = require("./schema/resolvers");

require("dotenv").config();

//Middelwares
const app = express();

//Apollos server Definitions
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  playground: true
});

server.applyMiddleware({ app });

//Connect to Mongo Atlas clouster
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@app-learn-c3u0e.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen({ port: 4000 }, () => {
      console.log("¡¡¡ TESTING APOLLO-SERVER !!!");
      console.log("¡¡¡ MongoDB Atlas Connection is READY !!!");
      console.log(`¡¡¡ SERVER is runing on PORT 4000!!!`);
      console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
    });
  })
  .catch(err => {
    console.log(
      "--------------!!! CONNECTION ERROR ----- Maybe The IP ADDRESS IS FORBIDDEN ON (ATLAS SERVER) //////¡¡¡---------------",
      err
    );
  });
//autoIndex is by default true but you should only have it for development, it has some perfomance issues, See Mongoose Doc for more info.

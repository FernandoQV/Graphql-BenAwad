import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { RegisterResolver } from "./modules/Register";



const main = async () => {
  await createConnection()
  
  const schema = await buildSchema({ resolvers: [RegisterResolver] });
  const server = new ApolloServer({ schema });
  const app = express();
  await server.start();
  server.applyMiddleware({ app });

  app.listen(5000, () => {
    console.log(`Escuchando desde port 5000`);
  });
};

main();

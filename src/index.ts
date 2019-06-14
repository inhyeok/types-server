import "reflect-metadata";
import * as express from "express";
import * as config from "config";
import { Container } from "typedi";
import { createConnection, useContainer } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { initializeTransactionalContext } from "typeorm-transactional-cls-hooked";

const app = express();
const path = "/";
const port = config.get("port") || 4000;

initializeTransactionalContext();
useContainer(Container);

(async () => {
  try {
    await createConnection({
      ...config.get("database"),
      entities: [
        __dirname + "/model/entity/**/*.entity.ts",
      ],
    });

    const schema = await buildSchema({
      resolvers: [__dirname + "/resolver/**/*.resolver.ts"],
      container: Container,
    });

    const server = new ApolloServer({
      schema,
      context: (context) => context,
      // playground: true,
      playground: process.env.NODE_ENV !== "production",
    });

    server.applyMiddleware({ app, path });

    // Start the server
    app.listen({ port }, () => {
      console.log(`Server is running, GraphQL Playground available at http://localhost:${port}`);
    });
  }
  catch (err) {
    console.error(err);
  }
})();

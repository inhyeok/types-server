import "reflect-metadata";
import * as config from "config";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

const PORT = config.get("port") || 4000;

(async () => {
  try {
    await createConnection({
      ...config.get("database"),
      entities: [
        __dirname + "/model/entity/**/*.entity.ts"
      ],
    });

    const schema = await buildSchema({
      resolvers: [__dirname + "/resolver/**/*.resolver.ts"],
    });

    const server = new ApolloServer({
      schema,
      playground: true,
    });

    // Start the server
    const { url } = await server.listen(PORT);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
  }
  catch(err) {
    console.error(err);
  }
})();

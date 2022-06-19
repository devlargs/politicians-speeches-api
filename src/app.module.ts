import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { MongooseModule } from "@nestjs/mongoose";
import { PoliticianModule } from "./modules/politician/politician.module";
import { ConfigModule } from "@nestjs/config";
import { VERSION } from "./version";
import { GraphQLError } from "graphql";
import { SpeechModule } from "./modules/speech/speech.module";

console.log("==========================");
console.log(`Current Version: ${VERSION}`);
console.log("==========================");

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      cors: {
        origin: "*",
        credentials: true,
      },
      introspection: JSON.parse(process.env.INTROSPECTION),
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      buildSchemaOptions: {
        numberScalarMode: "integer",
      },
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError = {
          message: error?.message,
          name: error.name,
          code: error.extensions.code,
          error,
        };
        return graphQLFormattedError;
      },
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_URL, {
      autoIndex: true,
    }),
    PoliticianModule,
    SpeechModule,
  ],
})
export class AppModule {}

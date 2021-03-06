"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const mongoose_1 = require("@nestjs/mongoose");
const politician_module_1 = require("./modules/politician/politician.module");
const config_1 = require("@nestjs/config");
const version_1 = require("./version");
const speech_module_1 = require("./modules/speech/speech.module");
console.log("==========================");
console.log(`Current Version: ${version_1.VERSION}`);
console.log("==========================");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            graphql_1.GraphQLModule.forRoot({
                cors: {
                    origin: "*",
                    credentials: true,
                },
                introspection: JSON.parse(process.env.INTROSPECTION),
                driver: apollo_1.ApolloDriver,
                playground: true,
                autoSchemaFile: (0, path_1.join)(process.cwd(), "src/schema.gql"),
                sortSchema: true,
                buildSchemaOptions: {
                    numberScalarMode: "integer",
                },
                formatError: (error) => {
                    const graphQLFormattedError = {
                        message: error === null || error === void 0 ? void 0 : error.message,
                        name: error.name,
                        code: error.extensions.code,
                        error,
                    };
                    return graphQLFormattedError;
                },
            }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_CONNECTION_URL, {
                autoIndex: true,
            }),
            politician_module_1.PoliticianModule,
            speech_module_1.SpeechModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
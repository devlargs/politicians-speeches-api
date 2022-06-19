"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliticianModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const politician_model_1 = require("./politician.model");
const politician_service_1 = require("./politician.service");
const politician_resolver_1 = require("./politician.resolver");
let PoliticianModule = class PoliticianModule {
};
PoliticianModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: politician_model_1.Politician.name, schema: politician_model_1.PoliticianSchema },
            ]),
        ],
        providers: [politician_service_1.PoliticianService, politician_resolver_1.PoliticianResolver],
    })
], PoliticianModule);
exports.PoliticianModule = PoliticianModule;
//# sourceMappingURL=politician.module.js.map
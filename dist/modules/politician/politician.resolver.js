"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliticianResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("mongoose");
const politician_model_1 = require("./politician.model");
const politician_service_1 = require("./politician.service");
const politician_inputs_1 = require("./politician.inputs");
let PoliticianResolver = class PoliticianResolver {
    constructor(politicianService) {
        this.politicianService = politicianService;
    }
    async politician(_id) {
        return this.politicianService.getById(_id);
    }
    async politicians(filters) {
        return this.politicianService.list(filters);
    }
    async createPolitician(input) {
        return this.politicianService.create(input);
    }
    async deletePolitician(_id) {
        this.politicianService.delete(_id);
        return true;
    }
    async updatePolitician(input, id) {
        return this.politicianService.update(input, id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => politician_model_1.Politician),
    __param(0, (0, graphql_1.Args)("_id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], PoliticianResolver.prototype, "politician", null);
__decorate([
    (0, graphql_1.Query)(() => [politician_model_1.Politician]),
    __param(0, (0, graphql_1.Args)("filters", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [politician_inputs_1.ListPoliticianInput]),
    __metadata("design:returntype", Promise)
], PoliticianResolver.prototype, "politicians", null);
__decorate([
    (0, graphql_1.Mutation)(() => politician_model_1.Politician),
    __param(0, (0, graphql_1.Args)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [politician_inputs_1.CreatePoliticianInput]),
    __metadata("design:returntype", Promise)
], PoliticianResolver.prototype, "createPolitician", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)("id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], PoliticianResolver.prototype, "deletePolitician", null);
__decorate([
    (0, graphql_1.Mutation)(() => politician_model_1.Politician),
    __param(0, (0, graphql_1.Args)("input")),
    __param(1, (0, graphql_1.Args)("id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [politician_inputs_1.UpdatePoliticianInput, mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], PoliticianResolver.prototype, "updatePolitician", null);
PoliticianResolver = __decorate([
    (0, graphql_1.Resolver)(() => politician_model_1.Politician),
    __metadata("design:paramtypes", [politician_service_1.PoliticianService])
], PoliticianResolver);
exports.PoliticianResolver = PoliticianResolver;
//# sourceMappingURL=politician.resolver.js.map
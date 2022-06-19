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
exports.SpeechResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("mongoose");
const speech_model_1 = require("./speech.model");
const speech_service_1 = require("./speech.service");
const speech_inputs_1 = require("./speech.inputs");
const politician_model_1 = require("../politician/politician.model");
let SpeechResolver = class SpeechResolver {
    constructor(speechService) {
        this.speechService = speechService;
    }
    async speech(_id) {
        return this.speechService.getById(_id);
    }
    async speeches(filters) {
        return this.speechService.list(filters);
    }
    async createSpeech(input) {
        return this.speechService.create(input);
    }
    async politicians(speech) {
        await speech.populate({ path: "politicians", model: politician_model_1.Politician.name });
        return speech.politicians;
    }
    async updateSpeech(input, _id) {
        return this.speechService.updateOne(input, _id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => speech_model_1.Speech),
    __param(0, (0, graphql_1.Args)("_id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], SpeechResolver.prototype, "speech", null);
__decorate([
    (0, graphql_1.Query)(() => [speech_model_1.Speech]),
    __param(0, (0, graphql_1.Args)("filters", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [speech_inputs_1.ListSpeechInput]),
    __metadata("design:returntype", Promise)
], SpeechResolver.prototype, "speeches", null);
__decorate([
    (0, graphql_1.Mutation)(() => speech_model_1.Speech),
    __param(0, (0, graphql_1.Args)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [speech_inputs_1.CreateSpeechInput]),
    __metadata("design:returntype", Promise)
], SpeechResolver.prototype, "createSpeech", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [politician_model_1.Politician]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SpeechResolver.prototype, "politicians", null);
__decorate([
    (0, graphql_1.Mutation)(() => speech_model_1.Speech),
    __param(0, (0, graphql_1.Args)("input")),
    __param(1, (0, graphql_1.Args)("_id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [speech_inputs_1.UpdateSpeechInput, mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], SpeechResolver.prototype, "updateSpeech", null);
SpeechResolver = __decorate([
    (0, graphql_1.Resolver)(() => speech_model_1.Speech),
    __metadata("design:paramtypes", [speech_service_1.SpeechService])
], SpeechResolver);
exports.SpeechResolver = SpeechResolver;
//# sourceMappingURL=speech.resolver.js.map
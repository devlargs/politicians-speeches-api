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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSpeechInput = exports.ListSpeechInput = exports.CreateSpeechInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("mongoose");
let CreateSpeechInput = class CreateSpeechInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateSpeechInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateSpeechInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateSpeechInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], CreateSpeechInput.prototype, "politicians", void 0);
CreateSpeechInput = __decorate([
    (0, graphql_1.InputType)()
], CreateSpeechInput);
exports.CreateSpeechInput = CreateSpeechInput;
let ListSpeechInput = class ListSpeechInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], ListSpeechInput.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ListSpeechInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ListSpeechInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ListSpeechInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", Array)
], ListSpeechInput.prototype, "politicians", void 0);
ListSpeechInput = __decorate([
    (0, graphql_1.InputType)()
], ListSpeechInput);
exports.ListSpeechInput = ListSpeechInput;
let UpdateSpeechInput = class UpdateSpeechInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], UpdateSpeechInput.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateSpeechInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], UpdateSpeechInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateSpeechInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", Array)
], UpdateSpeechInput.prototype, "politicians", void 0);
UpdateSpeechInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateSpeechInput);
exports.UpdateSpeechInput = UpdateSpeechInput;
//# sourceMappingURL=speech.inputs.js.map
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
exports.ListPoliticianInput = exports.UpdatePoliticianInput = exports.CreatePoliticianInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("mongoose");
let CreatePoliticianInput = class CreatePoliticianInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreatePoliticianInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreatePoliticianInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreatePoliticianInput.prototype, "imageUrl", void 0);
CreatePoliticianInput = __decorate([
    (0, graphql_1.InputType)()
], CreatePoliticianInput);
exports.CreatePoliticianInput = CreatePoliticianInput;
let UpdatePoliticianInput = class UpdatePoliticianInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdatePoliticianInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdatePoliticianInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdatePoliticianInput.prototype, "imageUrl", void 0);
UpdatePoliticianInput = __decorate([
    (0, graphql_1.InputType)()
], UpdatePoliticianInput);
exports.UpdatePoliticianInput = UpdatePoliticianInput;
let ListPoliticianInput = class ListPoliticianInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], ListPoliticianInput.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ListPoliticianInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ListPoliticianInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ListPoliticianInput.prototype, "imageUrl", void 0);
ListPoliticianInput = __decorate([
    (0, graphql_1.InputType)()
], ListPoliticianInput);
exports.ListPoliticianInput = ListPoliticianInput;
//# sourceMappingURL=politician.inputs.js.map
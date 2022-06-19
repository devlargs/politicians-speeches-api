"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const speech_model_1 = require("./speech.model");
const speech_service_1 = require("./speech.service");
const speech_resolver_1 = require("./speech.resolver");
let SpeechModule = class SpeechModule {
};
SpeechModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: speech_model_1.Speech.name, schema: speech_model_1.SpeechSchema }]),
        ],
        providers: [speech_service_1.SpeechService, speech_resolver_1.SpeechResolver],
    })
], SpeechModule);
exports.SpeechModule = SpeechModule;
//# sourceMappingURL=speech.module.js.map
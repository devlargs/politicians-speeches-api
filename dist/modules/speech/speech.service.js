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
exports.SpeechService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const speech_model_1 = require("./speech.model");
let SpeechService = class SpeechService {
    constructor(speechModel) {
        this.speechModel = speechModel;
    }
    async create(input) {
        const isExisting = await this.speechModel.find({
            title: {
                $regex: input.title,
                $options: "i",
            },
        });
        if (isExisting.length) {
            throw new common_1.HttpException(`${input.title} is already existing`, common_1.HttpStatus.EXPECTATION_FAILED);
        }
        const createdSpeech = new this.speechModel(input);
        return createdSpeech.save();
    }
    getById(_id) {
        return this.speechModel.findById(_id).exec();
    }
    list(filters) {
        return this.speechModel.find(Object.assign({}, filters)).sort({ title: "ascending" });
    }
    delete(_id) {
        console.log(_id);
        return this.speechModel.deleteOne({ _id });
    }
    updateOne(input, _id) {
        return this.speechModel.findOneAndUpdate({ _id }, Object.assign({}, input), {
            new: true,
        });
    }
};
SpeechService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(speech_model_1.Speech.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SpeechService);
exports.SpeechService = SpeechService;
//# sourceMappingURL=speech.service.js.map
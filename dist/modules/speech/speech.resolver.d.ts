import { Schema as MongooseSchema } from "mongoose";
import { Speech, SpeechDocument } from "./speech.model";
import { SpeechService } from "./speech.service";
import { CreateSpeechInput, ListSpeechInput, UpdateSpeechInput } from "./speech.inputs";
import { Politician } from "../politician/politician.model";
export declare class SpeechResolver {
    private speechService;
    constructor(speechService: SpeechService);
    speech(_id: MongooseSchema.Types.ObjectId): Promise<Speech & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    speeches(filters?: ListSpeechInput): Promise<(Speech & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createSpeech(input: CreateSpeechInput): Promise<Speech & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    politicians(speech: SpeechDocument): Promise<MongooseSchema.Types.ObjectId[] | Politician[]>;
    updateSpeech(input: UpdateSpeechInput, _id: MongooseSchema.Types.ObjectId): Promise<Speech & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    deleteSpeech(_id: MongooseSchema.Types.ObjectId): Promise<boolean>;
}

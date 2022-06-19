/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model, Schema as MongooseSchema } from "mongoose";
import { Speech, SpeechDocument } from "./speech.model";
import { CreateSpeechInput, ListSpeechInput, UpdateSpeechInput } from "./speech.inputs";
export declare class SpeechService {
    private speechModel;
    constructor(speechModel: Model<SpeechDocument>);
    create(input: CreateSpeechInput): Promise<Speech & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getById(_id: MongooseSchema.Types.ObjectId): Promise<Speech & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    list(filters: ListSpeechInput): import("mongoose").Query<(Speech & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], Speech & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, SpeechDocument>;
    updateOne(input: UpdateSpeechInput, _id: MongooseSchema.Types.ObjectId): import("mongoose").Query<Speech & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, Speech & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, SpeechDocument>;
}

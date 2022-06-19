/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document, Schema as MongooseSchema } from "mongoose";
import { Politician } from "../politician/politician.model";
export declare class Speech {
    _id: MongooseSchema.Types.ObjectId;
    title: string;
    date: string;
    content: string;
    politicians: MongooseSchema.Types.ObjectId[] | Politician[];
}
export declare type SpeechDocument = Speech & Document;
export declare const SpeechSchema: MongooseSchema<Document<Speech, any, any>, import("mongoose").Model<Document<Speech, any, any>, any, any, any>, any, any>;

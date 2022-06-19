/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document, Schema as MongooseSchema } from "mongoose";
export declare class Politician {
    _id: MongooseSchema.Types.ObjectId;
    firstName: string;
    lastName: string;
    imageUrl: string;
}
export declare type PoliticianDocument = Politician & Document;
export declare const PoliticianSchema: MongooseSchema<Document<Politician, any, any>, import("mongoose").Model<Document<Politician, any, any>, any, any, any>, any, any>;

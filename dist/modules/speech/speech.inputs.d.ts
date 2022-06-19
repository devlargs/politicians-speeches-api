import { Schema as MongooseSchema } from "mongoose";
export declare class CreateSpeechInput {
    title: string;
    content: string;
    date: string;
    politicians: MongooseSchema.Types.ObjectId[];
}
export declare class ListSpeechInput {
    _id?: MongooseSchema.Types.ObjectId;
    title?: string;
    date?: string;
    content?: string;
    politicians: MongooseSchema.Types.ObjectId[];
}
export declare class UpdateSpeechInput {
    _id?: MongooseSchema.Types.ObjectId;
    title?: string;
    date?: number;
    content?: string;
    politicians: MongooseSchema.Types.ObjectId[];
}

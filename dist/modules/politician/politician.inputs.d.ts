import { Schema as MongooseSchema } from "mongoose";
export declare class CreatePoliticianInput {
    firstName: string;
    lastName: string;
    imageUrl: string;
}
export declare class UpdatePoliticianInput {
    firstName: string;
    lastName: string;
    imageUrl: string;
}
export declare class ListPoliticianInput {
    _id?: MongooseSchema.Types.ObjectId;
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
}

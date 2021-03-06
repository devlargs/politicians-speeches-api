import { Schema as MongooseSchema } from "mongoose";
import { Politician } from "./politician.model";
import { PoliticianService } from "./politician.service";
import { CreatePoliticianInput, ListPoliticianInput, UpdatePoliticianInput } from "./politician.inputs";
export declare class PoliticianResolver {
    private politicianService;
    constructor(politicianService: PoliticianService);
    politician(_id: MongooseSchema.Types.ObjectId): Promise<Politician & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    politicians(filters?: ListPoliticianInput): Promise<(Politician & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createPolitician(input: CreatePoliticianInput): Promise<Politician & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    deletePolitician(_id: MongooseSchema.Types.ObjectId): Promise<boolean>;
    updatePolitician(input: UpdatePoliticianInput, id: MongooseSchema.Types.ObjectId): Promise<Politician & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}

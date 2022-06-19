/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model, Schema as MongooseSchema } from "mongoose";
import { Politician, PoliticianDocument } from "./politician.model";
import { CreatePoliticianInput, ListPoliticianInput, UpdatePoliticianInput } from "./politician.inputs";
export declare class PoliticianService {
    private politicianModel;
    constructor(politicianModel: Model<PoliticianDocument>);
    create(input: CreatePoliticianInput): Promise<Politician & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getById(_id: MongooseSchema.Types.ObjectId): Promise<Politician & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(_id: MongooseSchema.Types.ObjectId): import("mongoose").Query<import("mongodb").DeleteResult, Politician & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, PoliticianDocument>;
    list(filters: ListPoliticianInput): import("mongoose").Query<(Politician & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], Politician & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, PoliticianDocument>;
    update(input: UpdatePoliticianInput, _id: MongooseSchema.Types.ObjectId): import("mongoose").Query<Politician & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, Politician & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, PoliticianDocument>;
}

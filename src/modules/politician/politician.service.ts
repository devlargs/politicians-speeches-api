import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema as MongooseSchema } from "mongoose";

import { Politician, PoliticianDocument } from "./politician.model";
import {
  CreatePoliticianInput,
  ListPoliticianInput,
  UpdatePoliticianInput,
} from "./politician.inputs";

@Injectable()
export class PoliticianService {
  constructor(
    @InjectModel(Politician.name)
    private politicianModel: Model<PoliticianDocument>,
  ) {}

  async create(input: CreatePoliticianInput) {
    const isExisting = await this.politicianModel.find({
      firstName: { $regex: input.firstName, $options: "i" },
      lastName: { $regex: input.lastName, $options: "i" },
    });

    if (!isExisting.length) {
      const response = new this.politicianModel(input);
      return response.save();
    }

    throw new HttpException(
      `${input.firstName} ${input.lastName} is already existing`,
      HttpStatus.EXPECTATION_FAILED,
    );
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.politicianModel.findById(_id).exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.politicianModel.deleteOne({ _id });
  }

  list(filters: ListPoliticianInput) {
    return this.politicianModel
      .find({ ...filters })
      .sort({ name: "ascending" });
  }

  update(input: UpdatePoliticianInput, _id: MongooseSchema.Types.ObjectId) {
    return this.politicianModel.findOneAndUpdate(
      { _id },
      { ...input },
      { new: true },
    );
  }
}

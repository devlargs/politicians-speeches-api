import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema as MongooseSchema } from "mongoose";

import { Speech, SpeechDocument } from "./speech.model";
import {
  CreateSpeechInput,
  ListSpeechInput,
  UpdateSpeechInput,
} from "./speech.inputs";

@Injectable()
export class SpeechService {
  constructor(
    @InjectModel(Speech.name) private speechModel: Model<SpeechDocument>,
  ) {}

  async create(input: CreateSpeechInput) {
    const isExisting = await this.speechModel.find({
      title: {
        $regex: input.title,
        $options: "i",
      },
    });

    if (isExisting.length) {
      throw new HttpException(
        `${input.title} is already existing`,
        HttpStatus.EXPECTATION_FAILED,
      );
    }

    const createdSpeech = new this.speechModel(input);
    return createdSpeech.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.speechModel.findById(_id).exec();
  }

  list(filters: ListSpeechInput) {
    return this.speechModel.find({ ...filters }).sort({ title: "ascending" });
  }

  updateOne(input: UpdateSpeechInput, _id: MongooseSchema.Types.ObjectId) {
    return this.speechModel.findOneAndUpdate(
      { _id },
      { ...input },
      {
        new: true,
      },
    );
  }
}

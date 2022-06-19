import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

import { Speech, SpeechDocument } from "./speech.model";
import { SpeechService } from "./speech.service";
import {
  CreateSpeechInput,
  ListSpeechInput,
  UpdateSpeechInput,
} from "./speech.inputs";
import { Politician } from "../politician/politician.model";

@Resolver(() => Speech)
export class SpeechResolver {
  constructor(private speechService: SpeechService) {}

  @Query(() => Speech)
  async speech(
    @Args("_id", { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.speechService.getById(_id);
  }

  @Query(() => [Speech])
  async speeches(
    @Args("filters", { nullable: true }) filters?: ListSpeechInput,
  ) {
    return this.speechService.list(filters);
  }

  @Mutation(() => Speech)
  async createSpeech(@Args("input") input: CreateSpeechInput) {
    return this.speechService.create(input);
  }

  @ResolveField(() => [Politician])
  async politicians(@Parent() speech: SpeechDocument) {
    await speech.populate({ path: "politicians", model: Politician.name });
    return speech.politicians;
  }

  @Mutation(() => Speech)
  async updateSpeech(
    @Args("input") input: UpdateSpeechInput,
    @Args("_id", { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.speechService.updateOne(input, _id);
  }
}

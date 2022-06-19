import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

import { Politician } from "./politician.model";
import { PoliticianService } from "./politician.service";
import {
  CreatePoliticianInput,
  ListPoliticianInput,
  UpdatePoliticianInput,
} from "./politician.inputs";

@Resolver(() => Politician)
export class PoliticianResolver {
  constructor(private politicianService: PoliticianService) {}

  @Query(() => Politician)
  async politician(
    @Args("_id", { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.politicianService.getById(_id);
  }

  @Query(() => [Politician])
  async politicians(
    @Args("filters", { nullable: true }) filters?: ListPoliticianInput,
  ) {
    return this.politicianService.list(filters);
  }

  @Mutation(() => Politician)
  async createPolitician(@Args("input") input: CreatePoliticianInput) {
    return this.politicianService.create(input);
  }

  @Mutation(() => Boolean)
  async deletePolitician(
    @Args("id", { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    this.politicianService.delete(_id);
    return true;
  }

  @Mutation(() => Politician)
  async updatePolitician(
    @Args("input") input: UpdatePoliticianInput,
    @Args("id", { type: () => String }) id: MongooseSchema.Types.ObjectId,
  ) {
    return this.politicianService.update(input, id);
  }
}

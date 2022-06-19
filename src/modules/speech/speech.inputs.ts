import { Field, InputType } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

@InputType()
export class CreateSpeechInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => String)
  date: string;

  @Field(() => [String])
  politicians: MongooseSchema.Types.ObjectId[];
}

@InputType()
export class ListSpeechInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  date?: string;

  @Field(() => String, { nullable: true })
  content?: string;

  @Field(() => String)
  politicians: MongooseSchema.Types.ObjectId[];
}

@InputType()
export class UpdateSpeechInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => Number, { nullable: true })
  date?: number;

  @Field(() => String, { nullable: true })
  content?: string;

  @Field(() => String)
  politicians: MongooseSchema.Types.ObjectId[];
}

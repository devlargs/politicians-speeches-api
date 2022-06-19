import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Field, ObjectType } from "@nestjs/graphql";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Politician } from "../politician/politician.model";

@ObjectType()
@Schema({ timestamps: true })
export class Speech {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({ unique: true })
  title: string;

  @Field(() => Number)
  @Prop()
  date: number;

  @Field(() => String)
  @Prop()
  content: string;

  @Field(() => [Politician])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Politician.name })
  politicians: MongooseSchema.Types.ObjectId[] | Politician[];
}

export type SpeechDocument = Speech & Document;

export const SpeechSchema = SchemaFactory.createForClass(Speech);

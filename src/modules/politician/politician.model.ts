import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Field, ObjectType } from "@nestjs/graphql";
import { Document, Schema as MongooseSchema } from "mongoose";

@ObjectType()
@Schema({ timestamps: true })
export class Politician {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({
    required: true,
    unique: true,
    index: {
      unique: true,
    },
  })
  firstName: string;

  @Field(() => String)
  @Prop()
  lastName: string;

  @Field(() => String)
  @Prop()
  imageUrl: string;
}

export type PoliticianDocument = Politician & Document;

export const PoliticianSchema = SchemaFactory.createForClass(Politician);

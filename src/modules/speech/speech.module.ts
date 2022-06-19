import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { Speech, SpeechSchema } from "./speech.model";
import { SpeechService } from "./speech.service";
import { SpeechResolver } from "./speech.resolver";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Speech.name, schema: SpeechSchema }]),
  ],
  providers: [SpeechService, SpeechResolver],
})
export class SpeechModule {}

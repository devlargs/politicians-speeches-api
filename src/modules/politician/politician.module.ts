import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { Politician, PoliticianSchema } from "./politician.model";
import { PoliticianService } from "./politician.service";
import { PoliticianResolver } from "./politician.resolver";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Politician.name, schema: PoliticianSchema },
    ]),
  ],
  providers: [PoliticianService, PoliticianResolver],
})
export class PoliticianModule {}

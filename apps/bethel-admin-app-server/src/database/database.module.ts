import { Module } from "@nestjs/common";
import { DatabaseService } from "./database.service";
import { DatabaseController } from "./database.controller";
import { DatabaseResolver } from "./database.resolver";

@Module({
  controllers: [DatabaseController],
  providers: [DatabaseService, DatabaseResolver],
  exports: [DatabaseService],
})
export class DatabaseModule {}

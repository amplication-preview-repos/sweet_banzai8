import { Module } from "@nestjs/common";
import { MappingService } from "./mapping.service";
import { MappingController } from "./mapping.controller";
import { MappingResolver } from "./mapping.resolver";

@Module({
  controllers: [MappingController],
  providers: [MappingService, MappingResolver],
  exports: [MappingService],
})
export class MappingModule {}

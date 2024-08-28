import { Module } from "@nestjs/common";
import { PhlebotomistService } from "./phlebotomist.service";
import { PhlebotomistController } from "./phlebotomist.controller";
import { PhlebotomistResolver } from "./phlebotomist.resolver";

@Module({
  controllers: [PhlebotomistController],
  providers: [PhlebotomistService, PhlebotomistResolver],
  exports: [PhlebotomistService],
})
export class PhlebotomistModule {}

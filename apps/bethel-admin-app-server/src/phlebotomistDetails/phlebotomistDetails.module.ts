import { Module } from "@nestjs/common";
import { PhlebotomistDetailsModuleBase } from "./base/phlebotomistDetails.module.base";
import { PhlebotomistDetailsService } from "./phlebotomistDetails.service";
import { PhlebotomistDetailsController } from "./phlebotomistDetails.controller";
import { PhlebotomistDetailsResolver } from "./phlebotomistDetails.resolver";

@Module({
  imports: [PhlebotomistDetailsModuleBase],
  controllers: [PhlebotomistDetailsController],
  providers: [PhlebotomistDetailsService, PhlebotomistDetailsResolver],
  exports: [PhlebotomistDetailsService],
})
export class PhlebotomistDetailsModule {}

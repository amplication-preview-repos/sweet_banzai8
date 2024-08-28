import { Module } from "@nestjs/common";
import { TestDetailsModuleBase } from "./base/testDetails.module.base";
import { TestDetailsService } from "./testDetails.service";
import { TestDetailsController } from "./testDetails.controller";
import { TestDetailsResolver } from "./testDetails.resolver";

@Module({
  imports: [TestDetailsModuleBase],
  controllers: [TestDetailsController],
  providers: [TestDetailsService, TestDetailsResolver],
  exports: [TestDetailsService],
})
export class TestDetailsModule {}

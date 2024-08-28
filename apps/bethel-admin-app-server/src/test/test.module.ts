import { Module } from "@nestjs/common";
import { TestService } from "./test.service";
import { TestController } from "./test.controller";
import { TestResolver } from "./test.resolver";

@Module({
  controllers: [TestController],
  providers: [TestService, TestResolver],
  exports: [TestService],
})
export class TestModule {}

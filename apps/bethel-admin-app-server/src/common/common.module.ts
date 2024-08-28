import { Module } from "@nestjs/common";
import { CommonService } from "./common.service";
import { CommonController } from "./common.controller";
import { CommonResolver } from "./common.resolver";

@Module({
  controllers: [CommonController],
  providers: [CommonService, CommonResolver],
  exports: [CommonService],
})
export class CommonModule {}

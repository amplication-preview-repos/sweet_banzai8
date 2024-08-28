import { Module } from "@nestjs/common";
import { AddressDetailsModuleBase } from "./base/addressDetails.module.base";
import { AddressDetailsService } from "./addressDetails.service";
import { AddressDetailsController } from "./addressDetails.controller";
import { AddressDetailsResolver } from "./addressDetails.resolver";

@Module({
  imports: [AddressDetailsModuleBase],
  controllers: [AddressDetailsController],
  providers: [AddressDetailsService, AddressDetailsResolver],
  exports: [AddressDetailsService],
})
export class AddressDetailsModule {}

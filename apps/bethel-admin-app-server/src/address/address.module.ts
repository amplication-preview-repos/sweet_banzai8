import { Module } from "@nestjs/common";
import { AddressService } from "./address.service";
import { AddressController } from "./address.controller";
import { AddressResolver } from "./address.resolver";

@Module({
  controllers: [AddressController],
  providers: [AddressService, AddressResolver],
  exports: [AddressService],
})
export class AddressModule {}

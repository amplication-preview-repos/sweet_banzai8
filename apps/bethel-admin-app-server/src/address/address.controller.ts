import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AddressService } from "./address.service";

@swagger.ApiTags("addresses")
@common.Controller("addresses")
export class AddressController {
  constructor(protected readonly service: AddressService) {}
}

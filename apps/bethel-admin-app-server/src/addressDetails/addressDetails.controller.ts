import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AddressDetailsService } from "./addressDetails.service";
import { AddressDetailsControllerBase } from "./base/addressDetails.controller.base";

@swagger.ApiTags("addressDetails")
@common.Controller("addressDetails")
export class AddressDetailsController extends AddressDetailsControllerBase {
  constructor(protected readonly service: AddressDetailsService) {
    super(service);
  }
}

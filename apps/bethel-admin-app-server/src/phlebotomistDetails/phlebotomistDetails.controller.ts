import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PhlebotomistDetailsService } from "./phlebotomistDetails.service";
import { PhlebotomistDetailsControllerBase } from "./base/phlebotomistDetails.controller.base";

@swagger.ApiTags("phlebotomistDetails")
@common.Controller("phlebotomistDetails")
export class PhlebotomistDetailsController extends PhlebotomistDetailsControllerBase {
  constructor(protected readonly service: PhlebotomistDetailsService) {
    super(service);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PhlebotomistService } from "./phlebotomist.service";

@swagger.ApiTags("phlebotomists")
@common.Controller("phlebotomists")
export class PhlebotomistController {
  constructor(protected readonly service: PhlebotomistService) {}
}

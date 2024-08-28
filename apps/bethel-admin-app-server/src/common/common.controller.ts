import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CommonService } from "./common.service";

@swagger.ApiTags("commons")
@common.Controller("commons")
export class CommonController {
  constructor(protected readonly service: CommonService) {}
}

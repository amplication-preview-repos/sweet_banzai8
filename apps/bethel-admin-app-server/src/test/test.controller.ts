import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TestService } from "./test.service";

@swagger.ApiTags("tests")
@common.Controller("tests")
export class TestController {
  constructor(protected readonly service: TestService) {}
}

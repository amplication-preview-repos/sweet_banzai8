import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TestDetailsService } from "./testDetails.service";
import { TestDetailsControllerBase } from "./base/testDetails.controller.base";

@swagger.ApiTags("testDetails")
@common.Controller("testDetails")
export class TestDetailsController extends TestDetailsControllerBase {
  constructor(protected readonly service: TestDetailsService) {
    super(service);
  }
}

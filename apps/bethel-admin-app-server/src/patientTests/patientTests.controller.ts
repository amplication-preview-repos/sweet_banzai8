import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PatientTestsService } from "./patientTests.service";
import { PatientTestsControllerBase } from "./base/patientTests.controller.base";

@swagger.ApiTags("patientTests")
@common.Controller("patientTests")
export class PatientTestsController extends PatientTestsControllerBase {
  constructor(protected readonly service: PatientTestsService) {
    super(service);
  }
}

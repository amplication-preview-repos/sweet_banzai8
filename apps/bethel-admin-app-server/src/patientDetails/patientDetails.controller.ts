import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PatientDetailsService } from "./patientDetails.service";
import { PatientDetailsControllerBase } from "./base/patientDetails.controller.base";

@swagger.ApiTags("patientDetails")
@common.Controller("patientDetails")
export class PatientDetailsController extends PatientDetailsControllerBase {
  constructor(protected readonly service: PatientDetailsService) {
    super(service);
  }
}

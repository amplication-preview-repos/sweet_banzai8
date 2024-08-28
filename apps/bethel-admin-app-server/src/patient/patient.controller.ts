import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PatientService } from "./patient.service";

@swagger.ApiTags("patients")
@common.Controller("patients")
export class PatientController {
  constructor(protected readonly service: PatientService) {}
}

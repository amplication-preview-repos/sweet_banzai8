import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PatientAppointmentsService } from "./patientAppointments.service";
import { PatientAppointmentsControllerBase } from "./base/patientAppointments.controller.base";

@swagger.ApiTags("patientAppointments")
@common.Controller("patientAppointments")
export class PatientAppointmentsController extends PatientAppointmentsControllerBase {
  constructor(protected readonly service: PatientAppointmentsService) {
    super(service);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AppointmentService } from "./appointment.service";

@swagger.ApiTags("appointments")
@common.Controller("appointments")
export class AppointmentController {
  constructor(protected readonly service: AppointmentService) {}
}

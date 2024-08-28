import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppointmentDetailsService } from "./appointmentDetails.service";
import { AppointmentDetailsControllerBase } from "./base/appointmentDetails.controller.base";

@swagger.ApiTags("appointmentDetails")
@common.Controller("appointmentDetails")
export class AppointmentDetailsController extends AppointmentDetailsControllerBase {
  constructor(protected readonly service: AppointmentDetailsService) {
    super(service);
  }
}

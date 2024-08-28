import * as graphql from "@nestjs/graphql";
import { AppointmentService } from "./appointment.service";

export class AppointmentResolver {
  constructor(protected readonly service: AppointmentService) {}
}

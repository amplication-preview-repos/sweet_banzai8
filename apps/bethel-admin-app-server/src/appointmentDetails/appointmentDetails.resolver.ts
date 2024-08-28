import * as graphql from "@nestjs/graphql";
import { AppointmentDetailsResolverBase } from "./base/appointmentDetails.resolver.base";
import { AppointmentDetails } from "./base/AppointmentDetails";
import { AppointmentDetailsService } from "./appointmentDetails.service";

@graphql.Resolver(() => AppointmentDetails)
export class AppointmentDetailsResolver extends AppointmentDetailsResolverBase {
  constructor(protected readonly service: AppointmentDetailsService) {
    super(service);
  }
}

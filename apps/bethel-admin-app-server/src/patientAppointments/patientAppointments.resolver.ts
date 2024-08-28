import * as graphql from "@nestjs/graphql";
import { PatientAppointmentsResolverBase } from "./base/patientAppointments.resolver.base";
import { PatientAppointments } from "./base/PatientAppointments";
import { PatientAppointmentsService } from "./patientAppointments.service";

@graphql.Resolver(() => PatientAppointments)
export class PatientAppointmentsResolver extends PatientAppointmentsResolverBase {
  constructor(protected readonly service: PatientAppointmentsService) {
    super(service);
  }
}

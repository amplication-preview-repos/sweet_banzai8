import * as graphql from "@nestjs/graphql";
import { PatientDetailsResolverBase } from "./base/patientDetails.resolver.base";
import { PatientDetails } from "./base/PatientDetails";
import { PatientDetailsService } from "./patientDetails.service";

@graphql.Resolver(() => PatientDetails)
export class PatientDetailsResolver extends PatientDetailsResolverBase {
  constructor(protected readonly service: PatientDetailsService) {
    super(service);
  }
}

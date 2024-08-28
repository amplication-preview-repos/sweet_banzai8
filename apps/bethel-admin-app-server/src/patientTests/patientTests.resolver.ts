import * as graphql from "@nestjs/graphql";
import { PatientTestsResolverBase } from "./base/patientTests.resolver.base";
import { PatientTests } from "./base/PatientTests";
import { PatientTestsService } from "./patientTests.service";

@graphql.Resolver(() => PatientTests)
export class PatientTestsResolver extends PatientTestsResolverBase {
  constructor(protected readonly service: PatientTestsService) {
    super(service);
  }
}

import * as graphql from "@nestjs/graphql";
import { PatientService } from "./patient.service";

export class PatientResolver {
  constructor(protected readonly service: PatientService) {}
}

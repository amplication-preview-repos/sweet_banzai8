import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PatientTestsServiceBase } from "./base/patientTests.service.base";

@Injectable()
export class PatientTestsService extends PatientTestsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

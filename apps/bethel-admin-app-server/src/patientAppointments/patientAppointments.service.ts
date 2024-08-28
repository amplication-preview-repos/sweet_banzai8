import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PatientAppointmentsServiceBase } from "./base/patientAppointments.service.base";

@Injectable()
export class PatientAppointmentsService extends PatientAppointmentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

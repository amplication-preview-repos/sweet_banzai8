import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppointmentDetailsServiceBase } from "./base/appointmentDetails.service.base";

@Injectable()
export class AppointmentDetailsService extends AppointmentDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

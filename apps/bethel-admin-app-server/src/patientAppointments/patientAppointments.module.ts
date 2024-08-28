import { Module } from "@nestjs/common";
import { PatientAppointmentsModuleBase } from "./base/patientAppointments.module.base";
import { PatientAppointmentsService } from "./patientAppointments.service";
import { PatientAppointmentsController } from "./patientAppointments.controller";
import { PatientAppointmentsResolver } from "./patientAppointments.resolver";

@Module({
  imports: [PatientAppointmentsModuleBase],
  controllers: [PatientAppointmentsController],
  providers: [PatientAppointmentsService, PatientAppointmentsResolver],
  exports: [PatientAppointmentsService],
})
export class PatientAppointmentsModule {}

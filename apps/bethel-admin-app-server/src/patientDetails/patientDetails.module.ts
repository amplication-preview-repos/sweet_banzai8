import { Module } from "@nestjs/common";
import { PatientDetailsModuleBase } from "./base/patientDetails.module.base";
import { PatientDetailsService } from "./patientDetails.service";
import { PatientDetailsController } from "./patientDetails.controller";
import { PatientDetailsResolver } from "./patientDetails.resolver";

@Module({
  imports: [PatientDetailsModuleBase],
  controllers: [PatientDetailsController],
  providers: [PatientDetailsService, PatientDetailsResolver],
  exports: [PatientDetailsService],
})
export class PatientDetailsModule {}

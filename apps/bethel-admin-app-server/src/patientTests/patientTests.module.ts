import { Module } from "@nestjs/common";
import { PatientTestsModuleBase } from "./base/patientTests.module.base";
import { PatientTestsService } from "./patientTests.service";
import { PatientTestsController } from "./patientTests.controller";
import { PatientTestsResolver } from "./patientTests.resolver";

@Module({
  imports: [PatientTestsModuleBase],
  controllers: [PatientTestsController],
  providers: [PatientTestsService, PatientTestsResolver],
  exports: [PatientTestsService],
})
export class PatientTestsModule {}

import { Module } from "@nestjs/common";
import { PatientService } from "./patient.service";
import { PatientController } from "./patient.controller";
import { PatientResolver } from "./patient.resolver";

@Module({
  controllers: [PatientController],
  providers: [PatientService, PatientResolver],
  exports: [PatientService],
})
export class PatientModule {}

import { Module } from "@nestjs/common";
import { AppointmentDetailsModuleBase } from "./base/appointmentDetails.module.base";
import { AppointmentDetailsService } from "./appointmentDetails.service";
import { AppointmentDetailsController } from "./appointmentDetails.controller";
import { AppointmentDetailsResolver } from "./appointmentDetails.resolver";

@Module({
  imports: [AppointmentDetailsModuleBase],
  controllers: [AppointmentDetailsController],
  providers: [AppointmentDetailsService, AppointmentDetailsResolver],
  exports: [AppointmentDetailsService],
})
export class AppointmentDetailsModule {}

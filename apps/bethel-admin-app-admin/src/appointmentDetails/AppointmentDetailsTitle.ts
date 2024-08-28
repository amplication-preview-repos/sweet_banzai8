import { AppointmentDetails as TAppointmentDetails } from "../api/appointmentDetails/AppointmentDetails";

export const APPOINTMENTDETAILS_TITLE_FIELD = "phoneNo";

export const AppointmentDetailsTitle = (
  record: TAppointmentDetails
): string => {
  return record.phoneNo?.toString() || String(record.id);
};

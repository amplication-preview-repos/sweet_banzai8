import { PatientAppointments as TPatientAppointments } from "../api/patientAppointments/PatientAppointments";

export const PATIENTAPPOINTMENTS_TITLE_FIELD = "appointment";

export const PatientAppointmentsTitle = (
  record: TPatientAppointments
): string => {
  return record.appointment?.toString() || String(record.id);
};

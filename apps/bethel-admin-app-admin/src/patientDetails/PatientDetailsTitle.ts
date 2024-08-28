import { PatientDetails as TPatientDetails } from "../api/patientDetails/PatientDetails";

export const PATIENTDETAILS_TITLE_FIELD = "patientName";

export const PatientDetailsTitle = (record: TPatientDetails): string => {
  return record.patientName?.toString() || String(record.id);
};

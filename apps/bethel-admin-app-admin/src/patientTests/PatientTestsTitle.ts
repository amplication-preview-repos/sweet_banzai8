import { PatientTests as TPatientTests } from "../api/patientTests/PatientTests";

export const PATIENTTESTS_TITLE_FIELD = "patient";

export const PatientTestsTitle = (record: TPatientTests): string => {
  return record.patient?.toString() || String(record.id);
};

import { SortOrder } from "../../util/SortOrder";

export type PatientAppointmentsOrderByInput = {
  appointment?: SortOrder;
  appointmentId?: SortOrder;
  appointmentRef?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  patient?: SortOrder;
  patientId?: SortOrder;
  patientRef?: SortOrder;
  updatedAt?: SortOrder;
};

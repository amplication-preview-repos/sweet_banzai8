import { SortOrder } from "../../util/SortOrder";

export type PatientDetailsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  patientAge?: SortOrder;
  patientGender?: SortOrder;
  patientId?: SortOrder;
  patientName?: SortOrder;
  patientPhoneNo?: SortOrder;
  updatedAt?: SortOrder;
};

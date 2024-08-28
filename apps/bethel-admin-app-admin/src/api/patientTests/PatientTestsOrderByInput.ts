import { SortOrder } from "../../util/SortOrder";

export type PatientTestsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  patient?: SortOrder;
  patientId?: SortOrder;
  patientRef?: SortOrder;
  test?: SortOrder;
  testId?: SortOrder;
  testRef?: SortOrder;
  updatedAt?: SortOrder;
};

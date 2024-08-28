import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PatientTestsWhereInput = {
  id?: StringFilter;
  patient?: StringNullableFilter;
  patientId?: StringNullableFilter;
  patientRef?: StringNullableFilter;
  test?: StringNullableFilter;
  testId?: StringNullableFilter;
  testRef?: StringNullableFilter;
};

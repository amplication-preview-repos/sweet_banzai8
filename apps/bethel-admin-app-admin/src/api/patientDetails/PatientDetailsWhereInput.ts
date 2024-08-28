import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PatientDetailsWhereInput = {
  id?: StringFilter;
  patientAge?: IntNullableFilter;
  patientGender?: StringNullableFilter;
  patientId?: IntNullableFilter;
  patientName?: StringNullableFilter;
  patientPhoneNo?: StringNullableFilter;
};

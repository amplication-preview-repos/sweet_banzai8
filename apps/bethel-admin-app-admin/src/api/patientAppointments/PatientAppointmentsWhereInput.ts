import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PatientAppointmentsWhereInput = {
  appointment?: StringNullableFilter;
  appointmentId?: StringNullableFilter;
  appointmentRef?: StringNullableFilter;
  id?: StringFilter;
  patient?: StringNullableFilter;
  patientId?: StringNullableFilter;
  patientRef?: StringNullableFilter;
};

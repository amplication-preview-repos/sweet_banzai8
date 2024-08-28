import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AppointmentDetailsWhereInput = {
  addressId?: IntNullableFilter;
  apptId?: IntNullableFilter;
  id?: StringFilter;
  phoneNo?: StringNullableFilter;
  plebId?: IntNullableFilter;
  status?: StringNullableFilter;
  time?: DateTimeNullableFilter;
  typeField?: StringNullableFilter;
};

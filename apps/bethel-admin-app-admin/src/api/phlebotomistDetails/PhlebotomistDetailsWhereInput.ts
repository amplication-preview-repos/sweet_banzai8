import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PhlebotomistDetailsWhereInput = {
  id?: StringFilter;
  plebBloodGroup?: StringNullableFilter;
  plebEmail?: StringNullableFilter;
  plebId?: IntNullableFilter;
  plebName?: StringNullableFilter;
  plebPhoneNo?: StringNullableFilter;
};

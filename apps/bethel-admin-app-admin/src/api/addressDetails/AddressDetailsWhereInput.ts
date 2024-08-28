import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AddressDetailsWhereInput = {
  addressId?: IntNullableFilter;
  id?: StringFilter;
  locationUrl?: StringNullableFilter;
  residenceText?: StringNullableFilter;
};

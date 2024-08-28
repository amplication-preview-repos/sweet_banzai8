import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TestDetailsWhereInput = {
  id?: StringFilter;
  testId?: IntNullableFilter;
  testName?: StringNullableFilter;
  testPrice?: FloatNullableFilter;
};

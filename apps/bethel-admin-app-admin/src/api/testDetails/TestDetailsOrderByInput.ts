import { SortOrder } from "../../util/SortOrder";

export type TestDetailsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  testId?: SortOrder;
  testName?: SortOrder;
  testPrice?: SortOrder;
  updatedAt?: SortOrder;
};

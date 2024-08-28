import { TestDetailsWhereInput } from "./TestDetailsWhereInput";
import { TestDetailsOrderByInput } from "./TestDetailsOrderByInput";

export type TestDetailsFindManyArgs = {
  where?: TestDetailsWhereInput;
  orderBy?: Array<TestDetailsOrderByInput>;
  skip?: number;
  take?: number;
};

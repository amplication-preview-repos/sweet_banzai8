import { PatientTestsWhereInput } from "./PatientTestsWhereInput";
import { PatientTestsOrderByInput } from "./PatientTestsOrderByInput";

export type PatientTestsFindManyArgs = {
  where?: PatientTestsWhereInput;
  orderBy?: Array<PatientTestsOrderByInput>;
  skip?: number;
  take?: number;
};

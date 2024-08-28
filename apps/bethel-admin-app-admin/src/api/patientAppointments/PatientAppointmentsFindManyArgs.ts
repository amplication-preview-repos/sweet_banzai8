import { PatientAppointmentsWhereInput } from "./PatientAppointmentsWhereInput";
import { PatientAppointmentsOrderByInput } from "./PatientAppointmentsOrderByInput";

export type PatientAppointmentsFindManyArgs = {
  where?: PatientAppointmentsWhereInput;
  orderBy?: Array<PatientAppointmentsOrderByInput>;
  skip?: number;
  take?: number;
};

import { AppointmentDetailsWhereInput } from "./AppointmentDetailsWhereInput";
import { AppointmentDetailsOrderByInput } from "./AppointmentDetailsOrderByInput";

export type AppointmentDetailsFindManyArgs = {
  where?: AppointmentDetailsWhereInput;
  orderBy?: Array<AppointmentDetailsOrderByInput>;
  skip?: number;
  take?: number;
};

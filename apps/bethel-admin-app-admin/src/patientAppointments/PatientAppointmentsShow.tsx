import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PatientAppointmentsShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Appointment" source="appointment" />
        <TextField label="AppointmentId" source="appointmentId" />
        <TextField label="appointmentRef" source="appointmentRef" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Patient" source="patient" />
        <TextField label="PatientId" source="patientId" />
        <TextField label="patientRef" source="patientRef" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

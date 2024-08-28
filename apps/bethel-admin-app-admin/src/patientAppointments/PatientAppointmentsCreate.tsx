import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PatientAppointmentsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Appointment" source="appointment" />
        <TextInput label="AppointmentId" source="appointmentId" />
        <TextInput label="appointmentRef" source="appointmentRef" />
        <TextInput label="Patient" source="patient" />
        <TextInput label="PatientId" source="patientId" />
        <TextInput label="patientRef" source="patientRef" />
      </SimpleForm>
    </Create>
  );
};

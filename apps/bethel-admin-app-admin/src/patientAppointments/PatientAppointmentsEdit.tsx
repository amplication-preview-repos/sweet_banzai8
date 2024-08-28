import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PatientAppointmentsEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Appointment" source="appointment" />
        <TextInput label="AppointmentId" source="appointmentId" />
        <TextInput label="appointmentRef" source="appointmentRef" />
        <TextInput label="Patient" source="patient" />
        <TextInput label="PatientId" source="patientId" />
        <TextInput label="patientRef" source="patientRef" />
      </SimpleForm>
    </Edit>
  );
};

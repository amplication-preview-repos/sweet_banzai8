import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const PatientDetailsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="patient_age" source="patientAge" />
        <TextField label="patient_gender" source="patientGender" />
        <TextField label="patient_id" source="patientId" />
        <TextField label="patient_name" source="patientName" />
        <TextField label="patient_phone_no" source="patientPhoneNo" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

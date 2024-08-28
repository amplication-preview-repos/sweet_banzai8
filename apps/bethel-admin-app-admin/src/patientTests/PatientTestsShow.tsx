import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const PatientTestsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Patient" source="patient" />
        <TextField label="PatientId" source="patientId" />
        <TextField label="patientRef" source="patientRef" />
        <TextField label="Test" source="test" />
        <TextField label="TestId" source="testId" />
        <TextField label="testRef" source="testRef" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

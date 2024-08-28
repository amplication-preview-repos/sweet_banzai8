import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PatientTestsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Patient" source="patient" />
        <TextInput label="PatientId" source="patientId" />
        <TextInput label="patientRef" source="patientRef" />
        <TextInput label="Test" source="test" />
        <TextInput label="TestId" source="testId" />
        <TextInput label="testRef" source="testRef" />
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PatientTestsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Patient" source="patient" />
        <TextInput label="PatientId" source="patientId" />
        <TextInput label="patientRef" source="patientRef" />
        <TextInput label="Test" source="test" />
        <TextInput label="TestId" source="testId" />
        <TextInput label="testRef" source="testRef" />
      </SimpleForm>
    </Edit>
  );
};

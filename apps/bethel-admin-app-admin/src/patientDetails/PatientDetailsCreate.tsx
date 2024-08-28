import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PatientDetailsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="patient_age" source="patientAge" />
        <TextInput label="patient_gender" source="patientGender" />
        <NumberInput step={1} label="patient_id" source="patientId" />
        <TextInput label="patient_name" source="patientName" />
        <TextInput label="patient_phone_no" source="patientPhoneNo" />
      </SimpleForm>
    </Create>
  );
};

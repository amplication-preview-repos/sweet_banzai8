import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PatientDetailsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="patient_age" source="patientAge" />
        <TextInput label="patient_gender" source="patientGender" />
        <NumberInput step={1} label="patient_id" source="patientId" />
        <TextInput label="patient_name" source="patientName" />
        <TextInput label="patient_phone_no" source="patientPhoneNo" />
      </SimpleForm>
    </Edit>
  );
};

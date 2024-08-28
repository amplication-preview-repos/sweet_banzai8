import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const TestDetailsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Test_id" source="testId" />
        <TextInput label="Test_name" source="testName" />
        <NumberInput label="Test_Price" source="testPrice" />
      </SimpleForm>
    </Edit>
  );
};

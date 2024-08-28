import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const TestDetailsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Test_id" source="testId" />
        <TextInput label="Test_name" source="testName" />
        <NumberInput label="Test_Price" source="testPrice" />
      </SimpleForm>
    </Create>
  );
};

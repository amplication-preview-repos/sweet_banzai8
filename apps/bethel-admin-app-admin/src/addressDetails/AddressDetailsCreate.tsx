import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const AddressDetailsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="address_id" source="addressId" />
        <TextInput label="location_url" source="locationUrl" />
        <TextInput label="residence_text" multiline source="residenceText" />
      </SimpleForm>
    </Create>
  );
};

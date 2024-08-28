import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const AddressDetailsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="address_id" source="addressId" />
        <TextInput label="location_url" source="locationUrl" />
        <TextInput label="residence_text" multiline source="residenceText" />
      </SimpleForm>
    </Edit>
  );
};

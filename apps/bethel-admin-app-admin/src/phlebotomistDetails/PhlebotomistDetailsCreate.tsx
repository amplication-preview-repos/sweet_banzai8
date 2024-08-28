import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const PhlebotomistDetailsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="pleb_blood_group" source="plebBloodGroup" />
        <TextInput label="pleb_email" source="plebEmail" type="email" />
        <NumberInput step={1} label="pleb_id" source="plebId" />
        <TextInput label="pleb_name" source="plebName" />
        <TextInput label="pleb_phone_no" source="plebPhoneNo" />
      </SimpleForm>
    </Create>
  );
};

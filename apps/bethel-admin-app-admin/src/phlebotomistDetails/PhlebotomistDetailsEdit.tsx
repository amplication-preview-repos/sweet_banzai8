import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const PhlebotomistDetailsEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="pleb_blood_group" source="plebBloodGroup" />
        <TextInput label="pleb_email" source="plebEmail" type="email" />
        <NumberInput step={1} label="pleb_id" source="plebId" />
        <TextInput label="pleb_name" source="plebName" />
        <TextInput label="pleb_phone_no" source="plebPhoneNo" />
      </SimpleForm>
    </Edit>
  );
};

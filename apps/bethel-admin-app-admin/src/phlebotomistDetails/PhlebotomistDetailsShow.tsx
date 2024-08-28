import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const PhlebotomistDetailsShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="pleb_blood_group" source="plebBloodGroup" />
        <TextField label="pleb_email" source="plebEmail" />
        <TextField label="pleb_id" source="plebId" />
        <TextField label="pleb_name" source="plebName" />
        <TextField label="pleb_phone_no" source="plebPhoneNo" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AppointmentDetailsEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="address_id" source="addressId" />
        <NumberInput step={1} label="appt_id" source="apptId" />
        <TextInput label="phone_no" source="phoneNo" />
        <NumberInput step={1} label="pleb_id" source="plebId" />
        <TextInput label="status" source="status" />
        <DateTimeInput label="time" source="time" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};

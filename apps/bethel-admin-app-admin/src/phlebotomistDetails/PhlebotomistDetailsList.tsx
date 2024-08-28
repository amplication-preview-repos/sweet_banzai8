import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PhlebotomistDetailsList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PhlebotomistDetailsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="pleb_blood_group" source="plebBloodGroup" />
        <TextField label="pleb_email" source="plebEmail" />
        <TextField label="pleb_id" source="plebId" />
        <TextField label="pleb_name" source="plebName" />
        <TextField label="pleb_phone_no" source="plebPhoneNo" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

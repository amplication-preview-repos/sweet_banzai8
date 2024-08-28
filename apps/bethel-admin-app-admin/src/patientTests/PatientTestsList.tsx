import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PatientTestsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PatientTestsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Patient" source="patient" />
        <TextField label="PatientId" source="patientId" />
        <TextField label="patientRef" source="patientRef" />
        <TextField label="Test" source="test" />
        <TextField label="TestId" source="testId" />
        <TextField label="testRef" source="testRef" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

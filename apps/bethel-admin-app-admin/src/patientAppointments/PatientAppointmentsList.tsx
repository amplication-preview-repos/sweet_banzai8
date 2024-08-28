import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PatientAppointmentsList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PatientAppointmentsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Appointment" source="appointment" />
        <TextField label="AppointmentId" source="appointmentId" />
        <TextField label="appointmentRef" source="appointmentRef" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Patient" source="patient" />
        <TextField label="PatientId" source="patientId" />
        <TextField label="patientRef" source="patientRef" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

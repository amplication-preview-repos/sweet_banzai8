import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PatientAppointmentsList } from "./patientAppointments/PatientAppointmentsList";
import { PatientAppointmentsCreate } from "./patientAppointments/PatientAppointmentsCreate";
import { PatientAppointmentsEdit } from "./patientAppointments/PatientAppointmentsEdit";
import { PatientAppointmentsShow } from "./patientAppointments/PatientAppointmentsShow";
import { PatientDetailsList } from "./patientDetails/PatientDetailsList";
import { PatientDetailsCreate } from "./patientDetails/PatientDetailsCreate";
import { PatientDetailsEdit } from "./patientDetails/PatientDetailsEdit";
import { PatientDetailsShow } from "./patientDetails/PatientDetailsShow";
import { PhlebotomistDetailsList } from "./phlebotomistDetails/PhlebotomistDetailsList";
import { PhlebotomistDetailsCreate } from "./phlebotomistDetails/PhlebotomistDetailsCreate";
import { PhlebotomistDetailsEdit } from "./phlebotomistDetails/PhlebotomistDetailsEdit";
import { PhlebotomistDetailsShow } from "./phlebotomistDetails/PhlebotomistDetailsShow";
import { AppointmentDetailsList } from "./appointmentDetails/AppointmentDetailsList";
import { AppointmentDetailsCreate } from "./appointmentDetails/AppointmentDetailsCreate";
import { AppointmentDetailsEdit } from "./appointmentDetails/AppointmentDetailsEdit";
import { AppointmentDetailsShow } from "./appointmentDetails/AppointmentDetailsShow";
import { TestDetailsList } from "./testDetails/TestDetailsList";
import { TestDetailsCreate } from "./testDetails/TestDetailsCreate";
import { TestDetailsEdit } from "./testDetails/TestDetailsEdit";
import { TestDetailsShow } from "./testDetails/TestDetailsShow";
import { PatientTestsList } from "./patientTests/PatientTestsList";
import { PatientTestsCreate } from "./patientTests/PatientTestsCreate";
import { PatientTestsEdit } from "./patientTests/PatientTestsEdit";
import { PatientTestsShow } from "./patientTests/PatientTestsShow";
import { AddressDetailsList } from "./addressDetails/AddressDetailsList";
import { AddressDetailsCreate } from "./addressDetails/AddressDetailsCreate";
import { AddressDetailsEdit } from "./addressDetails/AddressDetailsEdit";
import { AddressDetailsShow } from "./addressDetails/AddressDetailsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Bethel Admin App"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PatientAppointments"
          list={PatientAppointmentsList}
          edit={PatientAppointmentsEdit}
          create={PatientAppointmentsCreate}
          show={PatientAppointmentsShow}
        />
        <Resource
          name="PatientDetails"
          list={PatientDetailsList}
          edit={PatientDetailsEdit}
          create={PatientDetailsCreate}
          show={PatientDetailsShow}
        />
        <Resource
          name="PhlebotomistDetails"
          list={PhlebotomistDetailsList}
          edit={PhlebotomistDetailsEdit}
          create={PhlebotomistDetailsCreate}
          show={PhlebotomistDetailsShow}
        />
        <Resource
          name="AppointmentDetails"
          list={AppointmentDetailsList}
          edit={AppointmentDetailsEdit}
          create={AppointmentDetailsCreate}
          show={AppointmentDetailsShow}
        />
        <Resource
          name="TestDetails"
          list={TestDetailsList}
          edit={TestDetailsEdit}
          create={TestDetailsCreate}
          show={TestDetailsShow}
        />
        <Resource
          name="PatientTests"
          list={PatientTestsList}
          edit={PatientTestsEdit}
          create={PatientTestsCreate}
          show={PatientTestsShow}
        />
        <Resource
          name="AddressDetails"
          list={AddressDetailsList}
          edit={AddressDetailsEdit}
          create={AddressDetailsCreate}
          show={AddressDetailsShow}
        />
      </Admin>
    </div>
  );
};

export default App;

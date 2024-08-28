import { Module } from "@nestjs/common";
import { PatientAppointmentsModule } from "./patientAppointments/patientAppointments.module";
import { PatientDetailsModule } from "./patientDetails/patientDetails.module";
import { PhlebotomistDetailsModule } from "./phlebotomistDetails/phlebotomistDetails.module";
import { AppointmentDetailsModule } from "./appointmentDetails/appointmentDetails.module";
import { TestDetailsModule } from "./testDetails/testDetails.module";
import { PatientTestsModule } from "./patientTests/patientTests.module";
import { AddressDetailsModule } from "./addressDetails/addressDetails.module";
import { AddressModule } from "./address/address.module";
import { AppointmentModule } from "./appointment/appointment.module";
import { CommonModule } from "./common/common.module";
import { DatabaseModule } from "./database/database.module";
import { MappingModule } from "./mapping/mapping.module";
import { PatientModule } from "./patient/patient.module";
import { PhlebotomistModule } from "./phlebotomist/phlebotomist.module";
import { TestModule } from "./test/test.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    PatientAppointmentsModule,
    PatientDetailsModule,
    PhlebotomistDetailsModule,
    AppointmentDetailsModule,
    TestDetailsModule,
    PatientTestsModule,
    AddressDetailsModule,
    AddressModule,
    AppointmentModule,
    CommonModule,
    DatabaseModule,
    MappingModule,
    PatientModule,
    PhlebotomistModule,
    TestModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}

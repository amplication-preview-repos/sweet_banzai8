import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { PatientAppointmentsController } from "../patientAppointments.controller";
import { PatientAppointmentsService } from "../patientAppointments.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  appointment: "exampleAppointment",
  appointmentId: "exampleAppointmentId",
  appointmentRef: "exampleAppointmentRef",
  createdAt: new Date(),
  id: "exampleId",
  patient: "examplePatient",
  patientId: "examplePatientId",
  patientRef: "examplePatientRef",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  appointment: "exampleAppointment",
  appointmentId: "exampleAppointmentId",
  appointmentRef: "exampleAppointmentRef",
  createdAt: new Date(),
  id: "exampleId",
  patient: "examplePatient",
  patientId: "examplePatientId",
  patientRef: "examplePatientRef",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    appointment: "exampleAppointment",
    appointmentId: "exampleAppointmentId",
    appointmentRef: "exampleAppointmentRef",
    createdAt: new Date(),
    id: "exampleId",
    patient: "examplePatient",
    patientId: "examplePatientId",
    patientRef: "examplePatientRef",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  appointment: "exampleAppointment",
  appointmentId: "exampleAppointmentId",
  appointmentRef: "exampleAppointmentRef",
  createdAt: new Date(),
  id: "exampleId",
  patient: "examplePatient",
  patientId: "examplePatientId",
  patientRef: "examplePatientRef",
  updatedAt: new Date(),
};

const service = {
  createPatientAppointments() {
    return CREATE_RESULT;
  },
  patientAppointmentsItems: () => FIND_MANY_RESULT,
  patientAppointments: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("PatientAppointments", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PatientAppointmentsService,
          useValue: service,
        },
      ],
      controllers: [PatientAppointmentsController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /patientAppointments", async () => {
    await request(app.getHttpServer())
      .post("/patientAppointments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /patientAppointments", async () => {
    await request(app.getHttpServer())
      .get("/patientAppointments")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /patientAppointments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/patientAppointments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /patientAppointments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/patientAppointments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /patientAppointments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/patientAppointments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/patientAppointments")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});

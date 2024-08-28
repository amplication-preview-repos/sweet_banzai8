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
import { AppointmentDetailsController } from "../appointmentDetails.controller";
import { AppointmentDetailsService } from "../appointmentDetails.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  addressId: 42,
  apptId: 42,
  createdAt: new Date(),
  id: "exampleId",
  phoneNo: "examplePhoneNo",
  plebId: 42,
  status: "exampleStatus",
  time: new Date(),
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  addressId: 42,
  apptId: 42,
  createdAt: new Date(),
  id: "exampleId",
  phoneNo: "examplePhoneNo",
  plebId: 42,
  status: "exampleStatus",
  time: new Date(),
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    addressId: 42,
    apptId: 42,
    createdAt: new Date(),
    id: "exampleId",
    phoneNo: "examplePhoneNo",
    plebId: 42,
    status: "exampleStatus",
    time: new Date(),
    typeField: "exampleTypeField",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  addressId: 42,
  apptId: 42,
  createdAt: new Date(),
  id: "exampleId",
  phoneNo: "examplePhoneNo",
  plebId: 42,
  status: "exampleStatus",
  time: new Date(),
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};

const service = {
  createAppointmentDetails() {
    return CREATE_RESULT;
  },
  appointmentDetailsItems: () => FIND_MANY_RESULT,
  appointmentDetails: ({ where }: { where: { id: string } }) => {
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

describe("AppointmentDetails", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AppointmentDetailsService,
          useValue: service,
        },
      ],
      controllers: [AppointmentDetailsController],
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

  test("POST /appointmentDetails", async () => {
    await request(app.getHttpServer())
      .post("/appointmentDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        time: CREATE_RESULT.time.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /appointmentDetails", async () => {
    await request(app.getHttpServer())
      .get("/appointmentDetails")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          time: FIND_MANY_RESULT[0].time.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /appointmentDetails/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/appointmentDetails"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /appointmentDetails/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/appointmentDetails"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        time: FIND_ONE_RESULT.time.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /appointmentDetails existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/appointmentDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        time: CREATE_RESULT.time.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/appointmentDetails")
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

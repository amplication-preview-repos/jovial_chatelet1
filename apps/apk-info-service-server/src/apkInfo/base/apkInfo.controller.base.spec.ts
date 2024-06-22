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
import { ApkInfoController } from "../apkInfo.controller";
import { ApkInfoService } from "../apkInfo.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationLabel: "exampleApplicationLabel",
  createdAt: new Date(),
  id: "exampleId",
  launchableActivity: "exampleLaunchableActivity",
  packageName: "examplePackageName",
  permissions: "examplePermissions",
  sdkVersion: 42,
  targetSdkVersion: 42,
  updatedAt: new Date(),
  versionCode: 42,
  versionName: "exampleVersionName",
};
const CREATE_RESULT = {
  applicationLabel: "exampleApplicationLabel",
  createdAt: new Date(),
  id: "exampleId",
  launchableActivity: "exampleLaunchableActivity",
  packageName: "examplePackageName",
  permissions: "examplePermissions",
  sdkVersion: 42,
  targetSdkVersion: 42,
  updatedAt: new Date(),
  versionCode: 42,
  versionName: "exampleVersionName",
};
const FIND_MANY_RESULT = [
  {
    applicationLabel: "exampleApplicationLabel",
    createdAt: new Date(),
    id: "exampleId",
    launchableActivity: "exampleLaunchableActivity",
    packageName: "examplePackageName",
    permissions: "examplePermissions",
    sdkVersion: 42,
    targetSdkVersion: 42,
    updatedAt: new Date(),
    versionCode: 42,
    versionName: "exampleVersionName",
  },
];
const FIND_ONE_RESULT = {
  applicationLabel: "exampleApplicationLabel",
  createdAt: new Date(),
  id: "exampleId",
  launchableActivity: "exampleLaunchableActivity",
  packageName: "examplePackageName",
  permissions: "examplePermissions",
  sdkVersion: 42,
  targetSdkVersion: 42,
  updatedAt: new Date(),
  versionCode: 42,
  versionName: "exampleVersionName",
};

const service = {
  createApkInfo() {
    return CREATE_RESULT;
  },
  apkInfos: () => FIND_MANY_RESULT,
  apkInfo: ({ where }: { where: { id: string } }) => {
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

describe("ApkInfo", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApkInfoService,
          useValue: service,
        },
      ],
      controllers: [ApkInfoController],
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

  test("POST /apkInfos", async () => {
    await request(app.getHttpServer())
      .post("/apkInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /apkInfos", async () => {
    await request(app.getHttpServer())
      .get("/apkInfos")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /apkInfos/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/apkInfos"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /apkInfos/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/apkInfos"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /apkInfos existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/apkInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/apkInfos")
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

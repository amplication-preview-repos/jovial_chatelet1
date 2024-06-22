import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApkInfoService } from "./apkInfo.service";
import { ApkInfoControllerBase } from "./base/apkInfo.controller.base";

@swagger.ApiTags("apkInfos")
@common.Controller("apkInfos")
export class ApkInfoController extends ApkInfoControllerBase {
  constructor(protected readonly service: ApkInfoService) {
    super(service);
  }
}

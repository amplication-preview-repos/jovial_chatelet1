import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ApkProcessorService } from "./apkprocessor.service";
import { ApkInfoResponse } from "../apkProcessor/ApkInfoResponse";

@swagger.ApiTags("apkProcessors")
@common.Controller("apkProcessors")
export class ApkProcessorController {
  constructor(protected readonly service: ApkProcessorService) {}

  @common.Post("/upload-apk")
  @swagger.ApiOkResponse({
    type: ApkInfoResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadApkAndGetInfo(
    @common.Body()
    body: string
  ): Promise<ApkInfoResponse> {
        return this.service.UploadApkAndGetInfo(body);
      }
}

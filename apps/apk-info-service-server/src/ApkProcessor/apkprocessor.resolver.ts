import * as graphql from "@nestjs/graphql";
import { ApkInfoResponse } from "../apkProcessor/ApkInfoResponse";
import { ApkProcessorService } from "./apkprocessor.service";

export class ApkProcessorResolver {
  constructor(protected readonly service: ApkProcessorService) {}

  @graphql.Mutation(() => ApkInfoResponse)
  async UploadApkAndGetInfo(
    @graphql.Args()
    args: string
  ): Promise<ApkInfoResponse> {
    return this.service.UploadApkAndGetInfo(args);
  }
}

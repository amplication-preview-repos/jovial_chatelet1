import { Injectable } from "@nestjs/common";
import { ApkInfoResponse } from "../apkProcessor/ApkInfoResponse";

@Injectable()
export class ApkProcessorService {
  constructor() {}
  async UploadApkAndGetInfo(args: string): Promise<ApkInfoResponse> {
    throw new Error("Not implemented");
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApkInfoServiceBase } from "./base/apkInfo.service.base";

@Injectable()
export class ApkInfoService extends ApkInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Module } from "@nestjs/common";
import { ApkInfoModuleBase } from "./base/apkInfo.module.base";
import { ApkInfoService } from "./apkInfo.service";
import { ApkInfoController } from "./apkInfo.controller";
import { ApkInfoResolver } from "./apkInfo.resolver";

@Module({
  imports: [ApkInfoModuleBase],
  controllers: [ApkInfoController],
  providers: [ApkInfoService, ApkInfoResolver],
  exports: [ApkInfoService],
})
export class ApkInfoModule {}

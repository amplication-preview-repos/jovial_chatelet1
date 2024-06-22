import { Module } from "@nestjs/common";
import { ApkProcessorService } from "./apkprocessor.service";
import { ApkProcessorController } from "./apkprocessor.controller";
import { ApkProcessorResolver } from "./apkprocessor.resolver";

@Module({
  controllers: [ApkProcessorController],
  providers: [ApkProcessorService, ApkProcessorResolver],
  exports: [ApkProcessorService],
})
export class ApkProcessorModule {}

import * as graphql from "@nestjs/graphql";
import { ApkInfoResolverBase } from "./base/apkInfo.resolver.base";
import { ApkInfo } from "./base/ApkInfo";
import { ApkInfoService } from "./apkInfo.service";

@graphql.Resolver(() => ApkInfo)
export class ApkInfoResolver extends ApkInfoResolverBase {
  constructor(protected readonly service: ApkInfoService) {
    super(service);
  }
}

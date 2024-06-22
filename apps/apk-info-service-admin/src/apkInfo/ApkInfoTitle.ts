import { ApkInfo as TApkInfo } from "../api/apkInfo/ApkInfo";

export const APKINFO_TITLE_FIELD = "packageName";

export const ApkInfoTitle = (record: TApkInfo): string => {
  return record.packageName?.toString() || String(record.id);
};

import { JsonValue } from "type-fest";

export type ApkInfo = {
  applicationLabel: string | null;
  createdAt: Date;
  icon: JsonValue;
  id: string;
  launchableActivity: string | null;
  packageName: string | null;
  permissions: string | null;
  sdkVersion: number | null;
  targetSdkVersion: number | null;
  updatedAt: Date;
  versionCode: number | null;
  versionName: string | null;
};

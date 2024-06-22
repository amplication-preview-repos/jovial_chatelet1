import { InputJsonValue } from "../../types";

export type ApkInfoCreateInput = {
  applicationLabel?: string | null;
  icon?: InputJsonValue;
  launchableActivity?: string | null;
  packageName?: string | null;
  permissions?: string | null;
  sdkVersion?: number | null;
  targetSdkVersion?: number | null;
  versionCode?: number | null;
  versionName?: string | null;
};

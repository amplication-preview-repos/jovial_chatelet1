import { SortOrder } from "../../util/SortOrder";

export type ApkInfoOrderByInput = {
  applicationLabel?: SortOrder;
  createdAt?: SortOrder;
  icon?: SortOrder;
  id?: SortOrder;
  launchableActivity?: SortOrder;
  packageName?: SortOrder;
  permissions?: SortOrder;
  sdkVersion?: SortOrder;
  targetSdkVersion?: SortOrder;
  updatedAt?: SortOrder;
  versionCode?: SortOrder;
  versionName?: SortOrder;
};

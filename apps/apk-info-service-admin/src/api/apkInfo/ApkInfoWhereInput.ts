import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ApkInfoWhereInput = {
  applicationLabel?: StringNullableFilter;
  icon?: JsonFilter;
  id?: StringFilter;
  launchableActivity?: StringNullableFilter;
  packageName?: StringNullableFilter;
  permissions?: StringNullableFilter;
  sdkVersion?: IntNullableFilter;
  targetSdkVersion?: IntNullableFilter;
  versionCode?: IntNullableFilter;
  versionName?: StringNullableFilter;
};

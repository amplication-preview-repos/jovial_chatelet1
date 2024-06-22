import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ApkInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="applicationLabel" source="applicationLabel" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="icon" source="icon" />
        <TextField label="ID" source="id" />
        <TextField label="launchableActivity" source="launchableActivity" />
        <TextField label="packageName" source="packageName" />
        <TextField label="permissions" source="permissions" />
        <TextField label="sdkVersion" source="sdkVersion" />
        <TextField label="targetSdkVersion" source="targetSdkVersion" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="versionCode" source="versionCode" />
        <TextField label="versionName" source="versionName" />
      </SimpleShowLayout>
    </Show>
  );
};

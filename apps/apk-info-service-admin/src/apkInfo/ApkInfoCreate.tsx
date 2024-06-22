import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ApkInfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="applicationLabel" source="applicationLabel" />
        <div />
        <TextInput label="launchableActivity" source="launchableActivity" />
        <TextInput label="packageName" source="packageName" />
        <TextInput label="permissions" multiline source="permissions" />
        <NumberInput step={1} label="sdkVersion" source="sdkVersion" />
        <NumberInput
          step={1}
          label="targetSdkVersion"
          source="targetSdkVersion"
        />
        <NumberInput step={1} label="versionCode" source="versionCode" />
        <TextInput label="versionName" source="versionName" />
      </SimpleForm>
    </Create>
  );
};

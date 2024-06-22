import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ApkInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"APKInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

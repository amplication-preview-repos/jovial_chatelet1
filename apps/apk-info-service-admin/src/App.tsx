import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ApkInfoList } from "./apkInfo/ApkInfoList";
import { ApkInfoCreate } from "./apkInfo/ApkInfoCreate";
import { ApkInfoEdit } from "./apkInfo/ApkInfoEdit";
import { ApkInfoShow } from "./apkInfo/ApkInfoShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"APK Info Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ApkInfo"
          list={ApkInfoList}
          edit={ApkInfoEdit}
          create={ApkInfoCreate}
          show={ApkInfoShow}
        />
      </Admin>
    </div>
  );
};

export default App;

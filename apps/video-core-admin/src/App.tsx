import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CameraList } from "./camera/CameraList";
import { CameraCreate } from "./camera/CameraCreate";
import { CameraEdit } from "./camera/CameraEdit";
import { CameraShow } from "./camera/CameraShow";
import { VideoSegmentList } from "./videoSegment/VideoSegmentList";
import { VideoSegmentCreate } from "./videoSegment/VideoSegmentCreate";
import { VideoSegmentEdit } from "./videoSegment/VideoSegmentEdit";
import { VideoSegmentShow } from "./videoSegment/VideoSegmentShow";
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
        title={"video-core"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Camera"
          list={CameraList}
          edit={CameraEdit}
          create={CameraCreate}
          show={CameraShow}
        />
        <Resource
          name="VideoSegment"
          list={VideoSegmentList}
          edit={VideoSegmentEdit}
          create={VideoSegmentCreate}
          show={VideoSegmentShow}
        />
      </Admin>
    </div>
  );
};

export default App;

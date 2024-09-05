import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CAMERA_TITLE_FIELD } from "./CameraTitle";

export const CameraShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="rtspUrl" source="rtspUrl" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="VideoSegment"
          target="cameraId"
          label="VideoSegments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Camera"
              source="camera.id"
              reference="Camera"
            >
              <TextField source={CAMERA_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="duration" source="duration" />
            <TextField label="ID" source="id" />
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="videoPath" source="videoPath" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

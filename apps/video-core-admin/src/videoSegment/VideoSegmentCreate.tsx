import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CameraTitle } from "../camera/CameraTitle";

export const VideoSegmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="camera.id" reference="Camera" label="Camera">
          <SelectInput optionText={CameraTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="duration" source="duration" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="videoPath" source="videoPath" />
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CameraTitle } from "../camera/CameraTitle";

export const VideoSegmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="camera.id" reference="Camera" label="Camera">
          <SelectInput optionText={CameraTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="duration" source="duration" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="videoPath" source="videoPath" />
      </SimpleForm>
    </Edit>
  );
};

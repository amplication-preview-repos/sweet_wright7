import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VideoSegmentTitle } from "../videoSegment/VideoSegmentTitle";

export const CameraEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="rtspUrl" source="rtspUrl" />
        <ReferenceArrayInput
          source="videoSegments"
          reference="VideoSegment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VideoSegmentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

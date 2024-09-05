import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VideoSegmentTitle } from "../videoSegment/VideoSegmentTitle";

export const CameraCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};

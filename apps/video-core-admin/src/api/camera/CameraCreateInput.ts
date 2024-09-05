import { VideoSegmentCreateNestedManyWithoutCamerasInput } from "./VideoSegmentCreateNestedManyWithoutCamerasInput";

export type CameraCreateInput = {
  name?: string | null;
  rtspUrl?: string | null;
  videoSegments?: VideoSegmentCreateNestedManyWithoutCamerasInput;
};

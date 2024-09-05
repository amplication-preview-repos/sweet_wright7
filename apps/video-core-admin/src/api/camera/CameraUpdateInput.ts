import { VideoSegmentUpdateManyWithoutCamerasInput } from "./VideoSegmentUpdateManyWithoutCamerasInput";

export type CameraUpdateInput = {
  name?: string | null;
  rtspUrl?: string | null;
  videoSegments?: VideoSegmentUpdateManyWithoutCamerasInput;
};

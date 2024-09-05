import { CameraWhereUniqueInput } from "../camera/CameraWhereUniqueInput";

export type VideoSegmentUpdateInput = {
  camera?: CameraWhereUniqueInput | null;
  duration?: number | null;
  timestamp?: Date | null;
  videoPath?: string | null;
};

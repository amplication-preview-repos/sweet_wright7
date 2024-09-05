import { CameraWhereUniqueInput } from "../camera/CameraWhereUniqueInput";

export type VideoSegmentCreateInput = {
  camera?: CameraWhereUniqueInput | null;
  duration?: number | null;
  timestamp?: Date | null;
  videoPath?: string | null;
};

import { Camera } from "../camera/Camera";

export type VideoSegment = {
  camera?: Camera | null;
  createdAt: Date;
  duration: number | null;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
  videoPath: string | null;
};

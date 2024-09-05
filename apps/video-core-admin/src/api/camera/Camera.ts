import { VideoSegment } from "../videoSegment/VideoSegment";

export type Camera = {
  createdAt: Date;
  id: string;
  name: string | null;
  rtspUrl: string | null;
  updatedAt: Date;
  videoSegments?: Array<VideoSegment>;
};

import { VideoSegment as TVideoSegment } from "../api/videoSegment/VideoSegment";

export const VIDEOSEGMENT_TITLE_FIELD = "videoPath";

export const VideoSegmentTitle = (record: TVideoSegment): string => {
  return record.videoPath?.toString() || String(record.id);
};

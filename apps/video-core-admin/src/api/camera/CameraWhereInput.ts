import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VideoSegmentListRelationFilter } from "../videoSegment/VideoSegmentListRelationFilter";

export type CameraWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  rtspUrl?: StringNullableFilter;
  videoSegments?: VideoSegmentListRelationFilter;
};

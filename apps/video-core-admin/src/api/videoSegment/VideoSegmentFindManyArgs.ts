import { VideoSegmentWhereInput } from "./VideoSegmentWhereInput";
import { VideoSegmentOrderByInput } from "./VideoSegmentOrderByInput";

export type VideoSegmentFindManyArgs = {
  where?: VideoSegmentWhereInput;
  orderBy?: Array<VideoSegmentOrderByInput>;
  skip?: number;
  take?: number;
};

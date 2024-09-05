import { SortOrder } from "../../util/SortOrder";

export type VideoSegmentOrderByInput = {
  cameraId?: SortOrder;
  createdAt?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  videoPath?: SortOrder;
};

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VideoSegmentService } from "./videoSegment.service";
import { VideoSegmentControllerBase } from "./base/videoSegment.controller.base";

@swagger.ApiTags("videoSegments")
@common.Controller("videoSegments")
export class VideoSegmentController extends VideoSegmentControllerBase {
  constructor(protected readonly service: VideoSegmentService) {
    super(service);
  }
}

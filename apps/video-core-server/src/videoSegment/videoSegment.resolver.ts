import * as graphql from "@nestjs/graphql";
import { VideoSegmentResolverBase } from "./base/videoSegment.resolver.base";
import { VideoSegment } from "./base/VideoSegment";
import { VideoSegmentService } from "./videoSegment.service";

@graphql.Resolver(() => VideoSegment)
export class VideoSegmentResolver extends VideoSegmentResolverBase {
  constructor(protected readonly service: VideoSegmentService) {
    super(service);
  }
}

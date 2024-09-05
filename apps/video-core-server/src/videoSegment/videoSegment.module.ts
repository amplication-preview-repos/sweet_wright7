import { Module } from "@nestjs/common";
import { VideoSegmentModuleBase } from "./base/videoSegment.module.base";
import { VideoSegmentService } from "./videoSegment.service";
import { VideoSegmentController } from "./videoSegment.controller";
import { VideoSegmentResolver } from "./videoSegment.resolver";

@Module({
  imports: [VideoSegmentModuleBase],
  controllers: [VideoSegmentController],
  providers: [VideoSegmentService, VideoSegmentResolver],
  exports: [VideoSegmentService],
})
export class VideoSegmentModule {}

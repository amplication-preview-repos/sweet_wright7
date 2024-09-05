import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VideoSegmentServiceBase } from "./base/videoSegment.service.base";

@Injectable()
export class VideoSegmentService extends VideoSegmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

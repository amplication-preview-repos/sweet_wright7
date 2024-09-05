/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { VideoSegment } from "./VideoSegment";
import { VideoSegmentCountArgs } from "./VideoSegmentCountArgs";
import { VideoSegmentFindManyArgs } from "./VideoSegmentFindManyArgs";
import { VideoSegmentFindUniqueArgs } from "./VideoSegmentFindUniqueArgs";
import { CreateVideoSegmentArgs } from "./CreateVideoSegmentArgs";
import { UpdateVideoSegmentArgs } from "./UpdateVideoSegmentArgs";
import { DeleteVideoSegmentArgs } from "./DeleteVideoSegmentArgs";
import { Camera } from "../../camera/base/Camera";
import { VideoSegmentDto } from "../VideoSegmentDto";
import { VideoSegmentService } from "../videoSegment.service";
@graphql.Resolver(() => VideoSegment)
export class VideoSegmentResolverBase {
  constructor(protected readonly service: VideoSegmentService) {}

  async _videoSegmentsMeta(
    @graphql.Args() args: VideoSegmentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [VideoSegment])
  async videoSegments(
    @graphql.Args() args: VideoSegmentFindManyArgs
  ): Promise<VideoSegment[]> {
    return this.service.videoSegments(args);
  }

  @graphql.Query(() => VideoSegment, { nullable: true })
  async videoSegment(
    @graphql.Args() args: VideoSegmentFindUniqueArgs
  ): Promise<VideoSegment | null> {
    const result = await this.service.videoSegment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => VideoSegment)
  async createVideoSegment(
    @graphql.Args() args: CreateVideoSegmentArgs
  ): Promise<VideoSegment> {
    return await this.service.createVideoSegment({
      ...args,
      data: {
        ...args.data,

        camera: args.data.camera
          ? {
              connect: args.data.camera,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => VideoSegment)
  async updateVideoSegment(
    @graphql.Args() args: UpdateVideoSegmentArgs
  ): Promise<VideoSegment | null> {
    try {
      return await this.service.updateVideoSegment({
        ...args,
        data: {
          ...args.data,

          camera: args.data.camera
            ? {
                connect: args.data.camera,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => VideoSegment)
  async deleteVideoSegment(
    @graphql.Args() args: DeleteVideoSegmentArgs
  ): Promise<VideoSegment | null> {
    try {
      return await this.service.deleteVideoSegment(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Camera, {
    nullable: true,
    name: "camera",
  })
  async getCamera(
    @graphql.Parent() parent: VideoSegment
  ): Promise<Camera | null> {
    const result = await this.service.getCamera(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => VideoSegmentDto)
  async CreateVideoSegment(
    @graphql.Args()
    args: VideoSegmentDto
  ): Promise<VideoSegmentDto> {
    return this.service.CreateVideoSegment(args);
  }

  @graphql.Query(() => [VideoSegmentDto])
  async GetVideoSegments(
    @graphql.Args("args")
    args: string
  ): Promise<VideoSegmentDto[]> {
    return this.service.GetVideoSegments(args);
  }
}
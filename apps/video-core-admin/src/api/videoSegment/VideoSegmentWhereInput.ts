import { CameraWhereUniqueInput } from "../camera/CameraWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VideoSegmentWhereInput = {
  camera?: CameraWhereUniqueInput;
  duration?: IntNullableFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  videoPath?: StringNullableFilter;
};

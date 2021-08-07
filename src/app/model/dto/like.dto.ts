import {LikeTypeEnum} from '../enum/like-type.enum';

export class LikeDto {
  userId?: string;
  targetId?: string;
  type?: LikeTypeEnum;
}

import {UserSocialInfoDto} from './user-social-info.dto';
import {PoIdentityType} from '../type/po-identity.type';

export class CommentDto {
  id?: PoIdentityType;
  content?: string;
  targetId?: PoIdentityType;
  commenter?: UserSocialInfoDto;
  commenterId?: PoIdentityType;
  createdTime?: string;

  replyList?: CommentDto[];
  repliedUser?: UserSocialInfoDto;
  repliedUserId?: PoIdentityType;
  repliedTargetId?: PoIdentityType;

  likeCount?: number;
  viewCount?: number;
  isLiked?: boolean;
}

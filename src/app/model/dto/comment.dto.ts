import {UserSocialInfoDto} from './user-social-info.dto';

export class CommentDto {
  id?: string;
  content?: string;
  targetId?: string;
  commenter?: UserSocialInfoDto;
  creator?: string;
  createdTime?: string;

  replyList?: CommentDto[];
  repliedUser?: UserSocialInfoDto;
  repliedUserId?: string;
  repliedTargetId?: string;

  likeCount?: string;
  isLiked?: boolean;
}

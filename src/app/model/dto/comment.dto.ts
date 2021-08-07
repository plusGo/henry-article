import {UserSocialInfoDto} from './user-social-info.dto';

export class CommentDto {
  id?: string;
  content?: string;
  targetId?: string;
  commenter?: UserSocialInfoDto;
  commenterId?: string;
  createdTime?: string;

  replyList?: CommentDto[];
  repliedUser?: UserSocialInfoDto;
  repliedUserId?: string;
  repliedTargetId?: string;

  likeCount?: number;
  viewCount?: number;
  isLiked?: boolean;
}

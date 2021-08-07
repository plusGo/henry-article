import {NzSafeAny} from 'ng-zorro-antd/core/types';
import {ArticleCategoryEnum} from '../enum/article-category.enum';
import {UserSocialInfoDto} from './user-social-info.dto';

export class ArticleBriefDto {
  id?: string;
  title?: string;
  tags?: string[];
  briefContent?: string;
  headImageId?: string;
  category?: ArticleCategoryEnum;
  modifiedTime?: NzSafeAny;

  likeCount?: number;
  viewCount?: number;
  commentCount?: number;
  isLiked?: boolean;
  author?: UserSocialInfoDto;
  authorId?: string;
}

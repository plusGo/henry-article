import {NzSafeAny} from 'ng-zorro-antd/core/types';
import {ArticleCategoryEnum} from '../enum/article-category.enum';
import {UserSocialInfoDto} from './user-social-info.dto';
import {PoIdentityType} from '../type/po-identity.type';

export class ArticleBriefDto {
  id?: PoIdentityType;
  title?: string;
  tags?: string[];
  briefContent?: string;
  headImageId?: PoIdentityType;
  category?: ArticleCategoryEnum;
  modifiedTime?: NzSafeAny;

  likeCount?: number;
  viewCount?: number;
  commentCount?: number;
  isLiked?: boolean;
  author?: UserSocialInfoDto;
  authorId?: PoIdentityType;
}

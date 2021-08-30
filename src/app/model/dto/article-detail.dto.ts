import {NzSafeAny} from 'ng-zorro-antd/core/types';
import {ArticleCategoryEnum} from '../enum/article-category.enum';
import {UserSocialInfoDto} from './user-social-info.dto';
import {PoIdentityType} from '../type/po-identity.type';

export class ArticleDetailDto {
  id?: PoIdentityType;
  title?: string;
  tags?: string[];
  markContent?: string;
  headImageId?: PoIdentityType;
  category?: ArticleCategoryEnum;

  readCount?: number;
  likeCount?: number;
  isLiked?: boolean;
  creator?: PoIdentityType;
  author?: UserSocialInfoDto;
  modifiedTime?: NzSafeAny;
}

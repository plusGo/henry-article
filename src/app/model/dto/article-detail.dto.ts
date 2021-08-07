import {NzSafeAny} from 'ng-zorro-antd/core/types';
import {ArticleCategoryEnum} from '../enum/article-category.enum';
import {UserSocialInfoDto} from './user-social-info.dto';

export class ArticleDetailDto {
  id?: string;
  title?: string;
  tags?: string[];
  markContent?: string;
  headImageId?: string;
  category?: ArticleCategoryEnum;

  readCount?: number;
  likeCount?: number;
  isLiked?: boolean;
  creator?: string;
  author?: UserSocialInfoDto;
  modifiedTime?: NzSafeAny;
}

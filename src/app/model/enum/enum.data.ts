import {ArticleCategoryData} from './article-category.enum';
import {LikeTypeData} from './like-type.enum';
import {NzSafeAny} from 'ng-zorro-antd/core/types';

export const ENUM_DATA: { [key: string]: NzSafeAny } = {
  ArticleCategoryEnum: ArticleCategoryData,
  LikeTypeData: LikeTypeData
};

import {PoIdentityType} from '../type/po-identity.type';

export interface ArticleCreateRequest {
  title: string;
  markContent: string;
  category: string;
  tags: string;
  headImageId: PoIdentityType;
  briefContent: string;
}

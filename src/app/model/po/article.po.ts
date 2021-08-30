import {PoIdentityType} from '../type/po-identity.type';

export class ArticlePo {
  id?: PoIdentityType;
  title?: string;
  markContent?: string;
  briefContent?: string;
  category: string;
  tags?: string;
  headImageId?: PoIdentityType;
}

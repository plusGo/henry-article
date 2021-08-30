import {PoIdentityType} from '../type/po-identity.type';

export interface CommentRequest {
  content?: string;
  targetId?: PoIdentityType;
  repliedUsersId?: PoIdentityType;
  repliedTargetId?: PoIdentityType;
}

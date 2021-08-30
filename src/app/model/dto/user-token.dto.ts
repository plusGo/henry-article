import {AuthToken} from '../../../../projects/auth/src/lib/auth-token.model';
import {PoIdentityType} from '../type/po-identity.type';

export interface UserTokenDto extends AuthToken {
  userId?: PoIdentityType;
  email?: string;
  nickName?: string;
}

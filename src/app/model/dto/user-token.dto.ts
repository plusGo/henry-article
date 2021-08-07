import {AuthToken} from '../../../../projects/auth/src/lib/auth-token.model';

export interface UserTokenDto extends AuthToken {
  userId?: string;
  email?: string;
  nickName?: string;
}

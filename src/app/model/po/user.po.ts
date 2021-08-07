import {BaseEntityPo} from './base-entity.po';

export interface UserPo extends BaseEntityPo {
  nickName?: string;
  email?: string;
  password?: string;
}

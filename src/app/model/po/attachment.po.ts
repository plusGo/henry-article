import {BaseEntityPo} from './base-entity.po';
import {PoIdentityType} from '../type/po-identity.type';

export interface AttachmentPo extends BaseEntityPo {
  id?: PoIdentityType;
  name?: string;
}

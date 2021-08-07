import {NzSafeAny} from 'ng-zorro-antd/core/types';

export interface CommonResponseDto {
  status?: 200 | 400;
  message?: string;
  data?: NzSafeAny;
}

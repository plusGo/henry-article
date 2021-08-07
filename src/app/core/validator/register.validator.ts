import {Observable} from 'rxjs';
import {ErrorData} from '@delon/form/src/errors';
import {SFValue} from '@delon/form/src/interface';
import {ValidatorReg} from '../constant/validator-reg.const';
import {RegisterService} from '../service/biz/auth/register.service';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class RegisterValidator {


  constructor(private registerService: RegisterService) {
  }

  static nickNameValidator(value: SFValue): ErrorData[] | Observable<ErrorData[]> {
    value = value?.trim();
    if (!ValidatorReg.中文_字母_数字_下划线.test(value)) {
      return [{keyword: 'nickName', message: '请输入中文、字母、数字和下划线'}]
    }
    return [];
  }

  emailValidator(async = true): (value: SFValue) => ErrorData[] | Observable<ErrorData[]> {
    return (value: SFValue): ErrorData[] | Observable<ErrorData[]> => {
      value = value?.trim();
      if (!ValidatorReg.邮箱.test(value)) {
        return [{keyword: 'email', message: '请输入正确的邮箱'}]
      }
      if (!async) {
        return [];
      }
      return this.registerService.emailExists(value).pipe(map(response => {
        if (response.status === 200) {
          return [];
        } else {
          return [{keyword: 'email', message: '邮箱已存在'}];
        }
      }));
    };
  }

}

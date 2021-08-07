import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserPo} from '../../../../model/po/user.po';
import {EmailRegisterRequest} from '../../../../model/request/email-register.request';
import {HttpPlusClient} from 'ng-http-plus';
import {CommonResponseDto} from '../../../../model/dto/common-response.dto';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public emailRegister(emailRegisterRequest: EmailRegisterRequest): Observable<UserPo> {
    return HttpPlusClient.builder()
      .url('/article-server/auth/register/email')
      .body(emailRegisterRequest)
      .post();
  }

  emailExists(email: string): Observable<CommonResponseDto> {
    return HttpPlusClient.builder()
      .url(`/article-server/auth/register/email/${email}`)
      .get();
  }
}

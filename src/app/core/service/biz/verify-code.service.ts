import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CommonResponseDto} from '../../../model/dto/common-response.dto';
import {HttpPlusClient} from 'ng-http-plus';

@Injectable({
  providedIn: 'root'
})
export class VerifyCodeService {

  sendEmailVerifyCode(email: string): Observable<CommonResponseDto> {
    return HttpPlusClient.builder()
      .url(`/article-server/verifyCode/email/${email}`)
      .post();
  }
}

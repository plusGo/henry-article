import {Injectable} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {Router} from '@angular/router';
import {EmailPasswordRequest} from '../../../../model/request/email-password.request';
import {Observable} from 'rxjs';
import {UserTokenDto} from '../../../../model/dto/user-token.dto';
import {HttpPlusClient} from 'ng-http-plus';

@Injectable({
  providedIn: 'root'
})
export class SsoLoginService {


  constructor(private router: Router) {
  }

  redirectToSSOLogin(): void {
    window.location.href = `${environment.redirectUri}?redirectUri=${this.generateRedirectUri()}&clientId=${environment.clientId}`;
  }

  private generateRedirectUri(): string {
    return encodeURIComponent(`${environment.ssoLoginUri}?redirectUri=${encodeURIComponent(this.router.url)}`);
  }

  ssoLogin(code:string): Observable<UserTokenDto> {
    return HttpPlusClient.builder()
      .url('/article-server/login/sso')
      .params({code})
      .post();
  }
}

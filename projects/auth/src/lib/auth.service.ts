import {Injectable} from '@angular/core';
import {AuthToken} from './auth-token.model';
import {BehaviorSubject} from 'rxjs';
import {StorageService} from '../../../storage/src/lib/storage.service';

@Injectable()
export class AuthService {
  private static LOCAL_AUTH_TOKEN_KEY = 'LOCAL_AUTH_TOKEN_KEY';
  authToken$ = new BehaviorSubject<AuthToken>(null);

  constructor() {
    if (this.isLogin()) {
      this.authToken$.next(this.getToken());
    }
  }

  freshToken<T extends AuthToken>(token: T): void {
    if (typeof token !== 'object') {
      return;
    }
    token = {...token, $createTime: new Date().getTime()};
    StorageService.session().saveObj(AuthService.LOCAL_AUTH_TOKEN_KEY, token);
    this.authToken$.next(token);
  }

  getToken<T extends AuthToken>(): T {
    const authToken = this.authToken$.getValue() || StorageService.session().getObj<AuthToken>(AuthService.LOCAL_AUTH_TOKEN_KEY);
    return (authToken) as T;
  }

  isLogin(): boolean {
    return !!this.getToken()?.$createTime;
  }

  logout(): void {
    StorageService.session().remove(AuthService.LOCAL_AUTH_TOKEN_KEY);
    this.authToken$.next(null);
  }
}

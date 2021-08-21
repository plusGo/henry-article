import {Component} from '@angular/core';
import {HttpPlusConfig} from 'ng-http-plus';
import {LoginService} from './core/service/biz/auth/login.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {AuthService} from '../../projects/auth/src/lib/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private loginService: LoginService,
              private authService: AuthService,
              private modalService: NzModalService) {
    HttpPlusConfig.builder()
      .baseUrl('')
      .addInterceptor({
        request: (req) => {
          const token = this.authService.getJwt();

          if (!token) {
            return req;

          }
          return req.clone({headers: req.headers.set(AuthService.AUTHORIZATION, token)});
        },
        response: (res) => {
          const token = (res as any).headers.get(AuthService.AUTHORIZATION);
          if (token) {
            this.authService.setJwt(token);
          }
        }
      }).addResponseInterceptor((res) => {
        if (res.status === 401 || res.status === 403) {
          this.loginService.openLoginModal();
        }
        if (res.status === 500) {
          this.modalService.create({
            nzTitle: '系统错误',
            nzContent: `
            详细日志：${JSON.stringify(res.error)}
            `,
            nzMaskClosable: false,
            nzCancelText: null,
          })
        }
        return res;
      }
    );
  }
}

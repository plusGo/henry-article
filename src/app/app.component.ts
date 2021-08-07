import {Component} from '@angular/core';
import {HttpPlusConfig} from 'ng-http-plus';
import {LoginService} from './core/service/biz/auth/login.service';
import {NzModalService} from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static AUTHORIZATION = 'Authorization';

  constructor(private loginService: LoginService,
              private modalService: NzModalService) {
    HttpPlusConfig.builder()
      .baseUrl('')
      .addInterceptor({
        request: (req) => {
          const token = window.sessionStorage.getItem(AppComponent.AUTHORIZATION);
          if (!token) {
            return req;

          }
          return req.clone({headers: req.headers.set(AppComponent.AUTHORIZATION, token)});
        },
        response: (res) => {
          const token = (res as any).headers.get(AppComponent.AUTHORIZATION);
          if (token) {
            window.sessionStorage.setItem(AppComponent.AUTHORIZATION, token);
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

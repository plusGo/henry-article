import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {AuthService} from '../../../../projects/auth/src/lib/auth.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {LoginService} from '../../core/service/biz/auth/login.service';

/**
 * 当用户未登录时，点击宿主组件，会提醒用户未登录
 */
@Directive({
  selector: '[appLoginCheck]'
})
export class LoginCheckDirective {
  @Output()
  afterAuthCheck = new EventEmitter<MouseEvent>();

  constructor(private authService: AuthService,
              private loginService: LoginService,
              private modalService: NzModalService) {

  }

  @HostListener('click', ['$event'])
  onElementRefClick(event: MouseEvent): boolean {
    if (this.authService.isLogin()) {
      this.afterAuthCheck.emit(event);
      return true;
    } else {

      this.modalService.confirm({
        nzTitle: '提示',
        nzContent: '您需要登录后才可评论',
        nzOkText: '前往登录',
        nzOnOk: () => {
          this.loginService.openLoginModal();
        },
        nzCancelText: '暂不评论'
      });
      return false;
    }
  }

}

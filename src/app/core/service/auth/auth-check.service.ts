import {Injectable} from '@angular/core';
import {AuthService} from '../../../../../projects/auth/src/lib/auth.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {LoginComponent} from '../../../share/component/login/login.component';
import {ModalWidthConstant} from '../../constant/modal-width.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthCheckService {

  constructor(private authService: AuthService,
              private modalService: NzModalService) {
  }

  run(func: () => void): void {
    if (this.authService.isLogin()) {
      func();
    } else {
      this.modalService.create({
        nzTitle: '登录',
        nzContent: LoginComponent,
        nzWidth: ModalWidthConstant.SMALL_WIDTH,
        nzFooter: null
      })
    }
  }
}

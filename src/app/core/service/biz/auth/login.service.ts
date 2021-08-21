import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient} from 'ng-http-plus';
import {UserTokenDto} from '../../../../model/dto/user-token.dto';
import {EmailPasswordRequest} from '../../../../model/request/email-password.request';
import {NzModalRef, NzModalService} from 'ng-zorro-antd/modal';
import {LoginComponent} from '../../../../share/component/login/login.component';
import {ModalWidthConstant} from '../../../constant/modal-width.constant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  modalRef: NzModalRef;

  constructor(private modalService: NzModalService) {
  }

  openLoginModal(): void {
    if (this.modalRef) {
      return;
    }
    this.modalRef = this.modalService.create({
      nzTitle: '登录',
      nzContent: LoginComponent,
      nzWidth: ModalWidthConstant.SMALL_WIDTH,
      nzFooter: null
    });
    this.modalRef.afterClose.subscribe(() => {
      this.modalRef = null;
    })
  }

  emailPasswordLogin(request: EmailPasswordRequest): Observable<UserTokenDto> {
    return HttpPlusClient.builder()
      .url('/article-server/auth/login/email/password')
      .body(request)
      .post();
  }

}

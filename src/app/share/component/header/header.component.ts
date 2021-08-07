import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd/modal';
import {RegisterComponent} from '../register/register.component';
import {ModalWidthConstant} from '../../../core/constant/modal-width.constant';
import {UserTokenDto} from '../../../model/dto/user-token.dto';
import {AuthService} from '../../../../../projects/auth/src/lib/auth.service';
import {AuthCheckService} from '../../../core/service/auth/auth-check.service';
import {Router} from '@angular/router';
import {LoginService} from '../../../core/service/biz/auth/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class HeaderComponent implements OnInit {
  token: UserTokenDto;

  constructor(private modalService: NzModalService,
              private changeDetectorRef: ChangeDetectorRef,
              private authCheckService: AuthCheckService,
              private router: Router,
              private loginService: LoginService,
              private authService: AuthService) {
    this.authService.authToken$.subscribe(token => {
      this.token = token;
      this.changeDetectorRef.markForCheck();
    })
  }

  ngOnInit(): void {
  }

  openRegister() {
    this.modalService.create({
      nzTitle: '注册',
      nzContent: RegisterComponent,
      nzWidth: ModalWidthConstant.SMALL_WIDTH,
      nzFooter: null
    })
  }

  openLogin() {
    this.loginService.openLoginModal();
  }

  createArticle(): void {
    this.authCheckService.run(() => {
      this.router.navigate(['/editor/drafts/new']);
    });
  }

  logout(): void {
    this.authService.logout();
  }

  navigateToUserCenter(): void {
    this.router.navigate([`/user/${this.token.userId}`]);
  }
}

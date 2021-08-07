import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SFComponent, SFSchema, SFStringWidgetSchema} from '@delon/form';
import {Subject} from 'rxjs';
import {RegisterValidator} from '../../../core/validator/register.validator';
import {NzModalRef} from 'ng-zorro-antd/modal';
import {NzMessageService} from 'ng-zorro-antd/message';
import {PasswordService} from '../../../core/service/biz/password.service';
import {LoginService} from '../../../core/service/biz/auth/login.service';
import {AuthService} from '../../../../../projects/auth/src/lib/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  schema: SFSchema;

  state = {
    submiting: false,
    registering: false
  };

  @ViewChild(SFComponent)
  formRef: SFComponent;

  private readonly destroy$ = new Subject<void>();

  constructor(private registerValidator: RegisterValidator,
              private loginService: LoginService,
              private modalRef: NzModalRef,
              private authService: AuthService,
              private messageService: NzMessageService) {
    this.schema = {
      properties: {
        email: {
          type: 'string',
          title: '邮箱',
          maxLength: 255,
          ui: {
            placeholder: '请输入您的邮箱',
            validator: this.registerValidator.emailValidator(false)
          } as SFStringWidgetSchema
        },
        password: {
          type: 'string',
          title: '密码',
          maxLength: 255,
          ui: {
            type: 'password',
            placeholder: '请输入您的密码'
          } as SFStringWidgetSchema
        },
      },
      required: ['email', 'password']
    };
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  login(): void {
    const value = {
      ...this.formRef.value,
      password: PasswordService.encrypt(this.formRef.value.password)
    };
    this.state.submiting = true;
    this.loginService.emailPasswordLogin(value).subscribe((token) => {
      this.messageService.success('登录成功');
      this.modalRef.close(true);
      this.state.submiting = false;
      this.authService.freshToken(token);
    }, () => this.state.submiting = false)
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../../../../../../projects/auth/src/lib/auth.service';
import {UserTokenDto} from '../../../../../model/dto/user-token.dto';
import {SFComponent, SFSchema, SFStringWidgetSchema} from '@delon/form';
import {RegisterValidator} from '../../../../../core/validator/register.validator';
import {NzUploadFile} from 'ng-zorro-antd/upload';
import {AttachmentService} from '../../../../../core/service/biz/attachment.service';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-user-setting-profile',
  templateUrl: './user-setting-profile.component.html',
  styleUrls: ['./user-setting-profile.component.scss']
})
export class UserSettingProfileComponent implements OnInit {
  userToken: UserTokenDto;
  schema: SFSchema;

  loadingState = {
    uploading: false,
    submiting: false,
  };

  @ViewChild(SFComponent) formRf: SFComponent;

  constructor(private authService: AuthService,
              private messageService: NzMessageService,
              private attachmentService: AttachmentService) {
    this.userToken = this.authService.getToken();
  }

  ngOnInit(): void {
    this.schema = {
      properties: {
        avatarId: {
          type: 'string',
          ui: {
            hidden: true
          }
        },
        nickName: {
          type: 'string',
          title: '昵称',
          maxLength: 16,
          minLength: 4,
          ui: {
            placeholder: '请输入您的昵称',
            validator: RegisterValidator.nickNameValidator
          } as SFStringWidgetSchema
        },
        email: {
          type: 'string',
          title: '邮箱',
          maxLength: 255,
          ui: {
            placeholder: '请输入您的邮箱',
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
      required: ['nickName', 'email', 'password', 'verifyCode']
    };
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.loadingState.uploading = true;
    this.attachmentService.uploadSingle(file).subscribe(res => {
      this.messageService.success('上传成功');
      this.formRf.setValue('/avatarId', res.id);
      this.loadingState.uploading = false;
    }, () => this.loadingState.uploading = false);
    return false;
  };
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DelonFormModule} from '@delon/form';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {HeaderComponent} from './component/header/header.component';
import {RouterModule} from '@angular/router';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {RegisterComponent} from './component/register/register.component';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {AttachmentImgPipe} from './pipe/attachment-img.pipe';
import {LoginComponent} from './component/login/login.component';
import {AuthImgComponent} from './component/auth-img/auth-img.component';
import {ArticleListBriefComponent} from './component/article-list-brief/article-list-brief.component';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';
import {ArticleTagRenderComponent} from './component/article-tag-render/article-tag-render.component';
import {UserAvatarComponent} from './component/user-avatar/user-avatar.component';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzEmptyModule} from 'ng-zorro-antd/empty';
import {ArticleCommentEditorComponent} from './component/article-comment-editor/article-comment-editor.component';
import {EnumLabelPipe} from './pipe/enum-label.pipe';
import {LikeCountComponent} from './component/like-count/like-count.component';
import {LoginCheckDirective} from './directive/login-check.directive';


export const ZORRO_MODULES = [
  NzButtonModule,
  NzMenuModule,
  NzInputModule,
  NzIconModule,
  NzDropDownModule,
  NzPopoverModule,
  NzFormModule,
  NzAvatarModule,
  NzSelectModule,
  NzUploadModule,
  NzTagModule,
  NzEmptyModule,
  NzSpinModule,
  NzSkeletonModule
];
export const COMPONENTS = [
  HeaderComponent,
  RegisterComponent,
  AuthImgComponent,
  LoginComponent,
  ArticleListBriefComponent,
  ArticleTagRenderComponent,
  UserAvatarComponent,
  ArticleCommentEditorComponent,
  LikeCountComponent
];
export const PIPES = [AttachmentImgPipe, EnumLabelPipe];
export const DIRECTIVES = [LoginCheckDirective];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DelonFormModule,
    RouterModule,
    ...ZORRO_MODULES
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    DelonFormModule,
    ...ZORRO_MODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  entryComponents: [RegisterComponent, LoginComponent]
})
export class ShareModule {
}

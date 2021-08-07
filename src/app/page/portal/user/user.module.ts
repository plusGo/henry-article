import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {ShareModule} from '../../../share/share.module';
import {RouterModule} from '@angular/router';
import {UserSettingComponent} from './user-setting/user-setting.component';
import {UserSettingProfileComponent} from './user-setting/user-setting-profile/user-setting-profile.component';


@NgModule({
  declarations: [
    UserComponent,
    UserSettingComponent,
    UserSettingProfileComponent,
  ],
  imports: [
    ShareModule,
    RouterModule.forChild([
      {path: ':id', component: UserComponent},
      {
        path: 'setting', component: UserSettingComponent, children: [
          {path: 'profile', component: UserSettingProfileComponent}
        ]
      }
    ])
  ]
})
export class UserModule {
}

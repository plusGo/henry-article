import {NgModule} from '@angular/core';
import {DelonFormModule} from '@delon/form';
import {HttpClientPlusModule} from 'ng-http-plus';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {AuthModule} from '../../../projects/auth/src/lib/auth.module';

const CORE_ZORRO_MODULES = [NzMessageModule];

@NgModule({
  declarations: [],
  imports: [
    HttpClientPlusModule,
    DelonFormModule.forRoot(),
    AuthModule.forRoot(),
    ...CORE_ZORRO_MODULES
  ],
  providers: []
})
export class CoreModule {
}

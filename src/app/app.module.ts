import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './app.route';
import {CoreModule} from './core/core.module';
import {NormalModule} from './normal/normal.module';
import {ShareModule} from './share/share.module';
import {AppScrollService} from './core/service/common/app-scroll.service';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    NormalModule,
    ShareModule,
    RouterModule.forRoot(ROUTER_CONFIG, {
      useHash: false
    })
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private appScrollService: AppScrollService) {
    this.appScrollService.init();
  }
}

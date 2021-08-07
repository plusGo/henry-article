import {ModuleWithProviders, NgModule} from '@angular/core';
import {AuthService} from './auth.service';


@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<{}> {
    return {
      ngModule: AuthModule,
      providers: [
        {provide: AuthService, useClass: AuthService}
      ]
    }
  }
}

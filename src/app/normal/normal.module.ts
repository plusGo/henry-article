import {NgModule} from '@angular/core';
import {ShareModule} from '../share/share.module';
import {LayoutComponent} from './layout/layout.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LayoutComponent, LoginComponent],
  imports: [
    ShareModule,
  ]
})
export class NormalModule {
}

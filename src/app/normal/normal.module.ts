import {NgModule} from '@angular/core';
import {ShareModule} from '../share/share.module';
import {LayoutComponent} from './layout/layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    ShareModule,
  ]
})
export class NormalModule {
}

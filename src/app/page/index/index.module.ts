import {NgModule} from '@angular/core';
import {IndexComponent} from './index.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    ShareModule,
    RouterModule.forChild([
      {path: '', component: IndexComponent}
    ])
  ]
})
export class IndexModule {
}

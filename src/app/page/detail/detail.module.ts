import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailComponent} from './detail.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {MarkdownModuleModule} from '../../../../projects/markdown/src/lib/markdown-module.module';
import { CommentListComponent } from './comment-list/comment-list.component';


@NgModule({
  declarations: [
    DetailComponent,
    CommentListComponent
  ],
  imports: [
    ShareModule,
    RouterModule.forChild([
      {path: ':id', component: DetailComponent}
    ]),
    MarkdownModuleModule
  ]
})
export class DetailModule {
}

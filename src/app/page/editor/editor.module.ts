import {NgModule} from '@angular/core';
import {EditorComponent} from './editor.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {MarkdownModuleModule} from '../../../../projects/markdown/src/lib/markdown-module.module';


@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    ShareModule,
    MarkdownModuleModule,
    RouterModule.forChild([
      {path: ':mode/:articleId', component: EditorComponent}
    ])
  ]
})
export class EditorModule {
}

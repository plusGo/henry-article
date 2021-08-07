import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-article-tag-render',
  templateUrl: './article-tag-render.component.html',
  styleUrls: ['./article-tag-render.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class ArticleTagRenderComponent {
  @Input()
  mode: 'text' | 'tag' = 'text';

  @Input()
  tagCodes: string[] = [];

  constructor() {
  }


}

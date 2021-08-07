import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit, SimpleChanges,
  ViewChild
} from '@angular/core';
import {Editor, Viewer} from 'bytemd';
import breaks from '@bytemd/plugin-breaks';
import footnotes from '@bytemd/plugin-footnotes';
import frontmatter from '@bytemd/plugin-frontmatter';
// import gemoji from '@bytemd/plugin-gemoji';
import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight';
import math from '@bytemd/plugin-math';
import mediumZoom from '@bytemd/plugin-medium-zoom';
import mermaid from '@bytemd/plugin-mermaid'
import highlightStyle from '../plugin/highlight.plugin';
import gfm_zh_Hans from '@bytemd/plugin-gfm/lib/locales/zh_Hans.json';
import math_zh_Hans from '@bytemd/plugin-math/lib/locales/zh_Hans.json';
import mermaid_zh_Hans from '@bytemd/plugin-mermaid/lib/locales/zh_Hans.json';

@Component({
  selector: 'app-md-viewer',
  templateUrl: './markdown-viewer.component.html',
  styleUrls: ['./markdown-viewer.component.scss'],
  preserveWhitespaces: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownViewerComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('bytemdHost', {static: true}) hostRef: ElementRef;

  @Input()
  markContent: string;

  viewer: Viewer;

  constructor() {
  }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
  }

  private renderMarkDown(markContent: string) {
    const plugins = [breaks(),
      gfm({locale: gfm_zh_Hans}),
      footnotes(),
      highlight(),
      math({locale: math_zh_Hans}),
      mediumZoom(),
      mermaid({locale: mermaid_zh_Hans}),
      frontmatter(),
      highlightStyle()];
    this.viewer = new Viewer({
      target: this.hostRef.nativeElement,
      props: {
        plugins,
        value: markContent,
      },
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.markContent && this.markContent) {
      this.renderMarkDown(this.markContent);
    }
  }
}

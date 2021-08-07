import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Editor} from 'bytemd';
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
import {AttachmentService} from '../../../../../src/app/core/service/biz/attachment.service';
import {map} from 'rxjs/operators';
import zh_Hans from 'bytemd/lib/locales/zh_Hans.json';
import gfm_zh_Hans from '@bytemd/plugin-gfm/lib/locales/zh_Hans.json';
import math_zh_Hans from '@bytemd/plugin-math/lib/locales/zh_Hans.json';
import mermaid_zh_Hans from '@bytemd/plugin-mermaid/lib/locales/zh_Hans.json';

@Component({
  selector: 'app-md-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss'],
  preserveWhitespaces: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('bytemdHost') hostRef: ElementRef;
  editor: Editor;

  markContent: string;

  constructor(private attachmentService: AttachmentService) {
  }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    const plugins = [breaks(),
      gfm({locale: gfm_zh_Hans}),
      footnotes(),
      highlight(),
      math({locale: math_zh_Hans}),
      mediumZoom(),
      mermaid({locale: mermaid_zh_Hans}),
      frontmatter(),
      highlightStyle()];

    this.editor = new Editor({
      target: this.hostRef.nativeElement,
      locale: zh_Hans,
      props: {
        plugins,
        locale: zh_Hans,
        placeholder: '...',
        uploadImages: (files: File[]) => {
          return this.attachmentService.upload(files).pipe(
            map(res => res.map(item => {
                return {
                  url: `/article-server/attachments/download/${item.id}`,
                  alt: item.name,
                  title: item.name,
                }
              })
            )
          ).toPromise();
        }
      },
    });

    this.editor.$on('change', (e) => {
      this.markContent = e.detail.value;
      this.editor.$set({value: e.detail.value});
    });
  }

  getBriefContent(length: number): string {
    return this.hostRef.nativeElement.querySelector('.markdown-body').textContent?.substring(0, length);
  }

  getMarkContent(): string {
    return this.markContent;
  }

  reset(): void {
    this.editor.$set({value: ''});
  }
}

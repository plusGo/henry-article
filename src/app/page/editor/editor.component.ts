import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
// import * as bytemd from 'bytemd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzUploadFile} from 'ng-zorro-antd/upload';
import {AttachmentService} from '../../core/service/biz/attachment.service';
import {NzMessageService} from 'ng-zorro-antd/message';
import {MarkdownEditorComponent} from '../../../../projects/markdown/src/lib/markdown-editor/markdown-editor.component';
import {PortalArticleService} from '../../core/service/biz/portal/portal-article.service';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  loadingState = {
    uploading: false,
    submiting: false,
  };

  @ViewChild('editor') editor: MarkdownEditorComponent;

  constructor(private fb: FormBuilder,
              private messageService: NzMessageService,
              private router: Router,
              private modalService: NzModalService,
              private portalArticleService: PortalArticleService,
              private attachmentService: AttachmentService) {
    this.form = this.fb.group({
      title: [null, [Validators.required]],
      markContent: null,
      briefContent: [null, [Validators.required]],
      category: [null, [Validators.required]],
      tags: [null, [Validators.required]],
      headImageId: null
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.loadingState.uploading = true;
    this.attachmentService.uploadSingle(file).subscribe(res => {
      this.messageService.success('上传成功');
      this.form.patchValue({headImageId: res.id});
      this.loadingState.uploading = false;

    }, () => this.loadingState.uploading = false);
    return false;
  };

  submit(): void {
    const data = {
      ...this.form.value,
      markContent: this.editor.getMarkContent(),
      tags: this.form.value.tags.join(',')
    };
    this.loadingState.submiting = true;
    this.portalArticleService.add(data).subscribe(id => {
      this.loadingState.submiting = false;
      this.modalService.create({
        nzTitle: '发布成功',
        nzOkText: "前往查看",
        nzCancelText: "再来一篇",
        nzOnOk: () => this.router.navigate([`/detail/${id}`]),
        nzOnCancel: () => {
          this.form.reset({});
          this.editor.reset();
        }
      });
    }, () => this.loadingState.submiting = false);
  }

  onVisibleChange(visible: boolean) {
    if (visible) {
      const briefContent = this.editor.getBriefContent(100);
      this.form.controls.briefContent.setValue(briefContent);
    }
  }
}

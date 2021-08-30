import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {PortalCommentService} from '../../../core/service/biz/portal/portal-comment.service';
import {NzMessageService} from 'ng-zorro-antd/message';
import {PoIdentityType} from '../../../model/type/po-identity.type';

export interface CommentEditorEvent {
  id: PoIdentityType;
  repliedTargetId: PoIdentityType;
}

@Component({
  selector: 'app-article-comment-editor',
  templateUrl: './article-comment-editor.component.html',
  styleUrls: ['./article-comment-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class ArticleCommentEditorComponent implements OnInit {
  loading = false;
  commentVal: string;

  @Input()
  targetId: PoIdentityType;

  @Input()
  repliedUsersId: PoIdentityType;

  @Input()
  repliedTargetId: PoIdentityType;

  @Output()
  stateChange = new EventEmitter<CommentEditorEvent>();

  constructor(private portalCommentService: PortalCommentService,
              private changeDetectorRef: ChangeDetectorRef,
              private messageService: NzMessageService) {
  }

  ngOnInit(): void {
  }

  doComment(): void {
    this.loading = true;
    const request = {
      content: this.commentVal,
      targetId: this.targetId,
      repliedTargetId: this.repliedTargetId,
      repliedUsersId: this.repliedUsersId,
    };
    this.portalCommentService.comment(request).subscribe((id) => {
      this.loading = false;
      this.messageService.success('评论成功');
      this.commentVal = '';
      this.stateChange.emit({
        id,
        repliedTargetId: this.repliedTargetId
      });
      this.changeDetectorRef.markForCheck();
    }, () => this.loading = false);
  }
}

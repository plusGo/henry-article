import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {CommentDto} from '../../../model/dto/comment.dto';
import {PortalCommentService} from '../../../core/service/biz/portal/portal-comment.service';
import {CommentEditorEvent} from '../../../share/component/article-comment-editor/article-comment-editor.component';
import {LikeCountEvent} from '../../../share/component/like-count/like-count.component';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class CommentListComponent implements OnInit {
  @Input()
  commentList: CommentDto[] = [];

  @Input()
  articleId: string;

  editableComment: CommentDto;
  repliedTargetId: string;
  repliedUsersId: string;

  constructor(private portalCommentService: PortalCommentService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  onCommentChange(event: CommentEditorEvent): void {
    this.portalCommentService.getById(event.id).subscribe(comment => {
      if (event.repliedTargetId) {
        const destComment = this.commentList.find(item => item.id === event.repliedTargetId);
        if (destComment) {
          destComment.replyList = [comment, ...destComment.replyList];
        }
      } else {
        this.commentList = [comment, ...this.commentList];
      }
      this.changeDetectorRef.markForCheck();
    });
  }

  toggleEditorDisplay(comment: CommentDto): void {
    this.editableComment = this.editableComment?.id === comment ? null : comment;
    if (this.editableComment) {
      this.repliedUsersId = this.editableComment.commenter.id;
      if (this.editableComment.repliedTargetId) {
        this.repliedTargetId = this.editableComment.repliedTargetId;
      } else {
        this.repliedTargetId = this.editableComment.id;
      }
    }
  }

  onLikeChange(event: LikeCountEvent, item: CommentDto) {
    item.likeCount = event.count;
    item.isLiked = event.isLiked;
    this.changeDetectorRef.markForCheck();
  }
}

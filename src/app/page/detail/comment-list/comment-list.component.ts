import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommentDto} from '../../../model/dto/comment.dto';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  onCommentChange(targetId: string): void {

  }

  toggleEditorDisplay(comment: CommentDto): void {
    this.editableComment = this.editableComment?.id === comment ? null : comment;
    if (this.editableComment) {
      this.repliedUsersId = this.editableComment.commenter.id;
      if (this.editableComment.repliedTargetId) {
        this.repliedTargetId = this.editableComment.repliedTargetId;
      } else {
        debugger
        this.repliedTargetId = this.editableComment.id;
      }
    }
  }
}

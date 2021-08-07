import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ArticleBriefDto} from '../../../model/dto/article-brief.dto';
import {NzMessageService} from 'ng-zorro-antd/message';
import {PortalLikeService} from '../../../core/service/biz/portal/portal-like.service';
import {LikeTypeEnum} from '../../../model/enum/like-type.enum';
import {AuthService} from '../../../../../projects/auth/src/lib/auth.service';
import {LoginService} from '../../../core/service/biz/auth/login.service';
import {LikeCountEvent} from '../like-count/like-count.component';

@Component({
  selector: 'app-article-list-brief',
  templateUrl: './article-list-brief.component.html',
  styleUrls: ['./article-list-brief.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class ArticleListBriefComponent implements OnInit {
  @Input()
  articleBrief: ArticleBriefDto;

  loadingState = {
    likeLoading: false
  };

  constructor(private messageService: NzMessageService,
              private changeDetectorRef: ChangeDetectorRef,
              private authService: AuthService,
              private loginService: LoginService,
              private likeService: PortalLikeService) {
  }

  ngOnInit(): void {
  }

  onLikeStateChange(event: LikeCountEvent) {
    this.articleBrief = {
      ...this.articleBrief,
      likeCount: event.count,
      isLiked: event.isLiked
    };
    this.changeDetectorRef.markForCheck();
  }
}

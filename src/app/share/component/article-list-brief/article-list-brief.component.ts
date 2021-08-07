import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ArticleBriefDto} from '../../../model/dto/article-brief.dto';
import {NzMessageService} from 'ng-zorro-antd/message';
import {PortalLikeService} from '../../../core/service/biz/portal/portal-like.service';
import {LikeTypeEnum} from '../../../model/enum/like-type.enum';
import {AuthService} from '../../../../../projects/auth/src/lib/auth.service';
import {LoginService} from '../../../core/service/biz/auth/login.service';

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

  toggleLike(event: MouseEvent): void {
    event.stopPropagation();

    if (!this.authService.isLogin()) {
      this.loginService.openLoginModal();
      return;
    }

    if (this.loadingState.likeLoading) {
      return;
    }

    this.loadingState.likeLoading = true;

    if (this.articleBrief.isLiked) {
      this.likeService.unLikeByCurrentUser(this.articleBrief.id, LikeTypeEnum.ARTICLE).subscribe(() => {
        this.loadingState.likeLoading = false;
        this.articleBrief.isLiked = false;
        this.articleBrief.likeCount--;
        this.changeDetectorRef.markForCheck();
      }, () => {
        this.loadingState.likeLoading = false;
        this.changeDetectorRef.markForCheck();
      })
    } else {
      this.likeService.likeByCurrentUser(this.articleBrief.id, LikeTypeEnum.ARTICLE).subscribe(() => {
        this.loadingState.likeLoading = false;
        this.articleBrief.isLiked = true;
        this.articleBrief.likeCount++;
        this.changeDetectorRef.markForCheck();
      }, () => {
        this.loadingState.likeLoading = false;
        this.changeDetectorRef.markForCheck();
      })
    }
  }
}

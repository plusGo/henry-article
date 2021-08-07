import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {LikeTypeEnum} from '../../../model/enum/like-type.enum';
import {AuthService} from '../../../../../projects/auth/src/lib/auth.service';
import {LoginService} from '../../../core/service/biz/auth/login.service';
import {PortalLikeService} from '../../../core/service/biz/portal/portal-like.service';

export interface LikeCountEvent {
  isLiked: boolean;
  targetId: string;
  count: number;
}

@Component({
  selector: 'app-like-count',
  templateUrl: './like-count.component.html',
  styleUrls: ['./like-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class LikeCountComponent implements OnInit {
  @Input()
  isLiked: boolean;

  @Input()
  targetId: string;

  @Input()
  count: number;

  @Output()
  onStateChange = new EventEmitter<LikeCountEvent>();

  loadingState = {
    likeLoading: false
  };

  constructor(private authService: AuthService,
              private likeService: PortalLikeService,
              private changeDetectorRef: ChangeDetectorRef,
              private loginService: LoginService) {
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

    if (this.isLiked) {
      this.likeService.unLikeByCurrentUser(this.targetId, LikeTypeEnum.ARTICLE).subscribe(() => {
        this.loadingState.likeLoading = false;
        this.onStateChange.emit({
          isLiked: false,
          targetId: this.targetId,
          count: --this.count
        });
        this.changeDetectorRef.markForCheck();
      }, () => {
        this.loadingState.likeLoading = false;
        this.changeDetectorRef.markForCheck();
      })
    } else {
      this.likeService.likeByCurrentUser(this.targetId, LikeTypeEnum.ARTICLE).subscribe(() => {
        this.loadingState.likeLoading = false;
        this.onStateChange.emit({
          isLiked: true,
          targetId: this.targetId,
          count: ++this.count
        });
        this.changeDetectorRef.markForCheck();
      }, () => {
        this.loadingState.likeLoading = false;
        this.changeDetectorRef.markForCheck();
      })
    }
  }

}

import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {ArticleBriefDto} from '../../model/dto/article-brief.dto';
import {fromEvent, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {PortalArticleService} from '../../core/service/biz/portal/portal-article.service';
import {AppScrollService} from '../../core/service/common/app-scroll.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit, OnDestroy {
  private static SCROLL_BOTTOM_threshold = 60;
  pageIndex = 0;
  articleBriefs: ArticleBriefDto[] = [];
  loadingState = {
    initial: true,
    loadingMore: false,
    loadingOver: false
  };

  private destroy$ = new Subject<void>();

  constructor(private portalArticleService: PortalArticleService,
              private changeDetectorRef: ChangeDetectorRef,
              private appScrollService: AppScrollService,
              private router: Router,
              private elementRef: ElementRef) {
  }


  ngOnInit(): void {
    this.loadMore(this.pageIndex);
  }

  ngAfterViewInit(): void {
    this.startListenScroll();
  }

  loadMore(index): void {
    this.loadingState.loadingMore = true;
    this.portalArticleService.findBriefList(index).subscribe(res => {
      this.loadingState.loadingMore = false;
      this.loadingState.initial = false;

      if (res.length < 10) {
        this.loadingState.loadingOver = true;
      }
      this.articleBriefs = [...this.articleBriefs, ...res];
    }, () => {
      this.loadingState.loadingMore = false;
    });
  }

  private startListenScroll(): void {
    this.appScrollService.scrollEvent$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(event => {
      if (!this.loadingState.loadingOver && event.scrollBottom < IndexComponent.SCROLL_BOTTOM_threshold) {
        this.pageIndex++;
        this.loadMore(this.pageIndex);
      }
    });

    fromEvent(this.elementRef.nativeElement, 'scroll').subscribe(e => {
      console.log(e);
    })
  }

  goToDetail(articleBrief: ArticleBriefDto): void {
    this.router.navigate([`/detail/${articleBrief.id}`])
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}

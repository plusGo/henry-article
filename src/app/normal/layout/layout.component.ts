import {Component, ElementRef, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AppScrollService} from '../../core/service/common/app-scroll.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnDestroy {
  private static VISIBLE_SCROLL_INSTANCE = 120;
  showHeader = true;
  private destroy$ = new Subject<void>();

  constructor(private hostElementRef: ElementRef,
              private appScrollService: AppScrollService) {
    this.appScrollService.scrollEvent$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(event => {
      if (event.scrollTop <= LayoutComponent.VISIBLE_SCROLL_INSTANCE) {
        this.showHeader = true;
      } else {
        this.showHeader = event.direction === 'up';
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}

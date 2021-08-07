import {EventEmitter, Injectable} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, throttleTime} from 'rxjs/operators';

export interface ScrollEvent {
  scrollTop: number; // 距离顶部的距离
  scrollBottom: number; // 距离底部的距离
  direction: 'down' | 'up';
}

@Injectable({providedIn: 'root'})
export class AppScrollService {
  scrollEvent$ = new EventEmitter<ScrollEvent>();

  private lastScrollTop: number = document.documentElement.scrollTop;

  constructor() {
  }

  init() {
    fromEvent(document, 'scroll')
      .pipe(debounceTime(200))
      .subscribe(() => {
        this.scrollEvent$.emit({
          scrollTop: document.documentElement.scrollTop,
          scrollBottom: document.documentElement.scrollHeight - document.documentElement.clientHeight - document.documentElement.scrollTop,
          direction: this.getDirection()
        })
      })
  }

  getDirection(): 'up' | 'down' {
    const direction = document.documentElement.scrollTop > this.lastScrollTop ? 'down' : 'up';
    this.lastScrollTop = document.documentElement.scrollTop;
    return direction;
  }
}

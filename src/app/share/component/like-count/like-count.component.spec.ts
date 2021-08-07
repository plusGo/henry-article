import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeCountComponent } from './like-count.component';

describe('LikeCountComponent', () => {
  let component: LikeCountComponent;
  let fixture: ComponentFixture<LikeCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

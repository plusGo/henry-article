import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListBriefComponent } from './article-list-brief.component';

describe('ArticleListBriefComponent', () => {
  let component: ArticleListBriefComponent;
  let fixture: ComponentFixture<ArticleListBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleListBriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTagRenderComponent } from './article-tag-render.component';

describe('ArticleTagRenderComponent', () => {
  let component: ArticleTagRenderComponent;
  let fixture: ComponentFixture<ArticleTagRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTagRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTagRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

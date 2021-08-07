import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleDetailDto} from '../../model/dto/article-detail.dto';
import {PortalArticleService} from '../../core/service/biz/portal/portal-article.service';
import {PortalCommentService} from '../../core/service/biz/portal/portal-comment.service';
import {CommentDto} from '../../model/dto/comment.dto';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  articleDetail: ArticleDetailDto;
  commentList: CommentDto[];

  loadingState = {
    loadingArticle: true,
    loadingComment: true
  };

  @HostBinding('class.portal-content-container') classBiding = true;

  constructor(private portalArticleService: PortalArticleService,
              private portalCommentService: PortalCommentService,
              private route: ActivatedRoute) {
    this.route.paramMap.subscribe(map => {
      const id = map.get('id');
      if (id) {
        this.loadData(id);
      }
    })
  }

  ngOnInit(): void {
  }

  loadData(id: string) {
    this.loadingState.loadingArticle = true;
    this.portalArticleService.getDetailById(id).subscribe(res => {
      this.articleDetail = res;
      this.loadingState.loadingArticle = false;
    }, () => {
      this.loadingState.loadingArticle = false;
    });

    this.loadingState.loadingComment = true;
    this.portalArticleService.findCommentList(id).subscribe(res => {
      this.commentList = res;
      this.loadingState.loadingComment = false;
    }, () => {
      this.loadingState.loadingComment = false;
    });
  }

  onCommentChange(targetId: string): void {

  }
}

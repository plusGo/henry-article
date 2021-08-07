import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient, HttpResponseType} from 'ng-http-plus';
import {ArticleBriefDto} from '../../../../model/dto/article-brief.dto';
import {ArticleDetailDto} from '../../../../model/dto/article-detail.dto';
import {CommentDto} from '../../../../model/dto/comment.dto';
import {ArticleCreateRequest} from '../../../../model/request/article-create.request';

@Injectable({providedIn: 'root'})
export class PortalArticleService {


  findBriefList(pageIndex = 0, pageSize = 10): Observable<ArticleBriefDto[]> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/articles`)
      .params({pageIndex: `${pageIndex}`, pageSize: `${pageSize}`})
      .get();
  }

  findCommentList(articleId: string, pageIndex = 0, pageSize = 20): Observable<CommentDto[]> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/articles/${articleId}/comments`)
      .params({pageIndex: `${pageIndex}`, pageSize: `${pageSize}`})
      .get();
  }

  getDetailById(id: string): Observable<ArticleDetailDto> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/articles/${id}`)
      .get();
  }

  add(article: ArticleCreateRequest): Observable<String> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/articles`)
      .body(article)
      .responseType(HttpResponseType.TEXT)
      .post();
  }
}

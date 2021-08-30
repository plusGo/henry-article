import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient} from 'ng-http-plus';
import {ArticlePo} from '../../../model/po/article.po';
import {JpaPageDto} from '../../../model/dto/jpa-page.dto';
import {ArticleBriefDto} from '../../../model/dto/article-brief.dto';
import {ArticleDetailDto} from '../../../model/dto/article-detail.dto';
import {PoIdentityType} from '../../../model/type/po-identity.type';

@Injectable({providedIn: 'root'})
export class ArticleService {


  save(article: ArticlePo): Observable<ArticlePo> {
    return HttpPlusClient.builder()
      .url(`/article-server/articles`)
      .body(article)
      .post();
  }

  findPage(): Observable<JpaPageDto<ArticlePo>> {
    return HttpPlusClient.builder()
      .url(`/article-server/articles/page`)
      .body({})
      .post();
  }

  findDetail(id: PoIdentityType): Observable<ArticleDetailDto> {
    return HttpPlusClient.builder()
      .url(`/article-server/articles/${id}`)
      .get();
  }

  findBriefList(pageIndex = 0, pageSize = 20): Observable<ArticleBriefDto[]> {
    return HttpPlusClient.builder()
      .url(`/article-server/articles/recommend`)
      .params({pageIndex: `${pageIndex}`, pageSize: `${pageSize}`})
      .get();
  }
}

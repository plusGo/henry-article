import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient, HttpResponseType} from 'ng-http-plus';
import {CommentDto} from '../../../../model/dto/comment.dto';
import {CommentRequest} from '../../../../model/request/comment.request';
import {PoIdentityType} from '../../../../model/type/po-identity.type';

@Injectable({providedIn: 'root'})
export class PortalCommentService {
  comment(request: CommentRequest): Observable<PoIdentityType> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/comments`)
      .body(request)
      .responseType(HttpResponseType.TEXT)
      .post();
  }

  getById(id: PoIdentityType): Observable<CommentDto> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/comments/${id}`)
      .get();
  }
}

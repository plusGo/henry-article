import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient, HttpResponseType} from 'ng-http-plus';
import {CommentDto} from '../../../../model/dto/comment.dto';
import {CommentRequest} from '../../../../model/request/comment.request';

@Injectable({providedIn: 'root'})
export class PortalCommentService {
  comment(request: CommentRequest): Observable<string> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/comments`)
      .body(request)
      .responseType(HttpResponseType.TEXT)
      .post();
  }

  getById(id: string): Observable<CommentDto> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/comments/${id}`)
      .get();
  }
}

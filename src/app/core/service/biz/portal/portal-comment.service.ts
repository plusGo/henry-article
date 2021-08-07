import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient} from 'ng-http-plus';

@Injectable({providedIn: 'root'})
export class PortalCommentService {
  comment(request): Observable<void> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/comments`)
      .body(request)
      .post();
  }
}

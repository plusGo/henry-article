import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient} from 'ng-http-plus';
import {LikeTypeEnum} from '../../../../model/enum/like-type.enum';

@Injectable({providedIn: 'root'})
export class PortalLikeService {

  likeByCurrentUser(targetId: string, likeType: LikeTypeEnum): Observable<void> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/likes`)
      .params({
        targetId, likeType
      })
      .post();
  }

  unLikeByCurrentUser(targetId: string, likeType: LikeTypeEnum): Observable<void> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/likes`)
      .params({
        targetId, likeType
      })
      .delete();
  }
}

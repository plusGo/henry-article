import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient} from 'ng-http-plus';
import {LikeTypeEnum} from '../../../../model/enum/like-type.enum';
import {PoIdentityType} from '../../../../model/type/po-identity.type';

@Injectable({providedIn: 'root'})
export class PortalLikeService {

  likeByCurrentUser(targetId: PoIdentityType, likeType: LikeTypeEnum): Observable<void> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/likes`)
      .params({
        targetId: `${targetId}`, likeType
      })
      .post();
  }

  unLikeByCurrentUser(targetId: PoIdentityType, likeType: LikeTypeEnum): Observable<void> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/likes`)
      .params({
        targetId: `${targetId}`, likeType
      })
      .delete();
  }
}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient, HttpResponseType} from 'ng-http-plus';
import {LikeDto} from '../../../model/dto/like.dto';
import {LikeTypeEnum} from '../../../model/enum/like-type.enum';

@Injectable({providedIn: 'root'})
export class LikeService {

  likeByCurrentUser(targetId: string, likeType: LikeTypeEnum): Observable<void> {
    return HttpPlusClient.builder()
      .url(`/article-server/likes`)
      .params({
        targetId, likeType
      })
      .post();
  }

  unLikeByCurrentUser(targetId: string, likeType: LikeTypeEnum): Observable<void> {
    return HttpPlusClient.builder()
      .url(`/article-server/likes`)
      .params({
        targetId, likeType
      })
      .delete();
  }

  save(like: LikeDto): Observable<void> {
    return HttpPlusClient.builder()
      .url(`/article-server/likes`)
      .body(like)
      .post();
  }

  delete(likeId: string): Observable<void> {
    return HttpPlusClient.builder()
      .url(`/article-server/likes`)
      .params({likeId})
      .delete();
  }

  count(targetId: string): Observable<number> {
    return HttpPlusClient.builder()
      .url(`/article-server/likes`)
      .responseType(HttpResponseType.TEXT)
      .get();
  }


}

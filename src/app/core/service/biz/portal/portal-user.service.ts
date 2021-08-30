import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient} from 'ng-http-plus';
import {UserInfoDto} from '../../../../model/dto/user-info.dto';
import {PoIdentityType} from '../../../../model/type/po-identity.type';

@Injectable({providedIn: 'root'})
export class PortalUserService {


  getUserInfo(userId: PoIdentityType): Observable<UserInfoDto> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/users/${userId}/info`)
      .get();
  }

  updateUserInfo(userInfo: UserInfoDto): Observable<void> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/users/info`)
      .body({})
      .post();
  }

}

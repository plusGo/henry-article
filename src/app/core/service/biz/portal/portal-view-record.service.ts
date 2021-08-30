import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient} from 'ng-http-plus';
import {PoIdentityType} from '../../../../model/type/po-identity.type';

@Injectable({providedIn: 'root'})
export class PortalViewRecordService {

  add(targetId: PoIdentityType): Observable<void> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/viewRecords`)
      .params({targetId: `${targetId}`})
      .post();
  }
}

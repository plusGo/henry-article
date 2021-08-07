import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient} from 'ng-http-plus';

@Injectable({providedIn: 'root'})
export class PortalViewRecordService {

  add(targetId: string): Observable<void> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/viewRecords`)
      .params({targetId})
      .post();
  }
}

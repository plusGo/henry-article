import {ElementRef, Pipe, PipeTransform} from '@angular/core';
import {AttachmentService} from '../../core/service/biz/attachment.service';
import {Observable, Subject} from 'rxjs';
import {NzSafeAny} from 'ng-zorro-antd/core/types';

@Pipe({
  name: 'attachmentImg'
})
export class AttachmentImgPipe implements PipeTransform {

  constructor(private attachmentService: AttachmentService,
              private elementRef: ElementRef) {
  }

  transform(attachmentId: string): Observable<string> {

    const result$ = new Subject<string | NzSafeAny>();
    this.attachmentService.download(attachmentId).subscribe(res => {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(res);
      fileReader.onload = (e) => {
        result$.next(e.target?.result);
      }
    });
    return result$.asObservable();
  }

}

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {AttachmentService} from '../../../core/service/biz/attachment.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {PoIdentityType} from '../../../model/type/po-identity.type';

@Component({
  selector: 'app-auth-img',
  templateUrl: './auth-img.component.html',
  styleUrls: ['./auth-img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class AuthImgComponent implements OnInit, OnChanges {
  @Input()
  attachmentId: PoIdentityType;

  src: SafeResourceUrl = null;

  constructor(private attachmentService: AttachmentService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.attachmentId && this.attachmentId) {
      this.load();
    }
  }

  private load(): void {
    this.attachmentService.base64(this.attachmentId).subscribe(base64 => {
      this.src = `data:image/png;base64,${base64}`;
      this.changeDetectorRef.markForCheck();
    });
  }
}

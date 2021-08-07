import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class UserAvatarComponent implements OnInit {
  @Input()
  userId: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}

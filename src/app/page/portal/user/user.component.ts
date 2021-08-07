import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @HostBinding('class.portal-content-container') classBiding = true;

  constructor() { }

  ngOnInit(): void {
  }

}

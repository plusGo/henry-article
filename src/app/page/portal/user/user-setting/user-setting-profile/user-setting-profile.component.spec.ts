import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingProfileComponent } from './user-setting-profile.component';

describe('UserSettingProfileComponent', () => {
  let component: UserSettingProfileComponent;
  let fixture: ComponentFixture<UserSettingProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSettingProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

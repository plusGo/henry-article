import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SsoLoginService} from '../../core/service/biz/auth/sso-login.service';
import {AuthService} from '../../../../projects/auth/src/lib/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router,
              private ssoLoginService:SsoLoginService) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(map =>{
      const code = map.get("code");
      const redirectUri = map.get('redirectUri');
      this.ssoLoginService.ssoLogin(code).subscribe(token =>{
        this.authService.freshToken(token);
        this.router.navigate([redirectUri]);
      });
    })
  }

}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AppComponent} from '../../../app.component';

@Injectable({providedIn: 'root'})
export class AuthLoginGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = window.sessionStorage.getItem(AppComponent.AUTHORIZATION);
    return !!token;
  }

}

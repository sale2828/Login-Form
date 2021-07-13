import { PATHS } from '../paths';
import { LoginService } from '../services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomepageGuardService implements CanActivate {

  constructor(private _router: Router, private userInfo: LoginService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userInfo.isUserLoggedIn()) {
      return true;
    }
    this._router.navigate([PATHS.LOGIN_FORM]);

    return false;
  }

}

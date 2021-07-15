import { PATHS } from '../../helpers/paths';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class LogInGuardService implements CanActivate {

  constructor(private _router: Router, private userInfo: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.userInfo.isUserLoggedIn()) {
      return true;
    } else {
      this._router.navigate([PATHS.HOMEPAGE]);
    }
    return false;
  }
}

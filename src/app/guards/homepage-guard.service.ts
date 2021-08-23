import { PATHS } from '../helpers/paths';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class HomepageGuardService implements CanActivate {

  constructor(
    private _router: Router,
    private authenticationService: AuthenticationService
    ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authenticationService.currentUserValue;
    if (!currentUser) {
      return true;
    }
    this._router.navigate([PATHS.HOMEPAGE]);

    return false;
  }

}

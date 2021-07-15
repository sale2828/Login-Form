import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ObjectDetailComponent } from '../object-detail/object-detail.component';


@Injectable({
  providedIn: 'root',
})
export class DirtycheckGuard implements CanDeactivate<ObjectDetailComponent> {
  canDeactivate(
    component: ObjectDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (component.canDeactivate()) {
      return true;
    } else {
      return confirm('You have unsaved changes. Do you really want to leave the page?');
    }
  }
}

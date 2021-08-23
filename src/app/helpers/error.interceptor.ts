import { Token } from './token';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, finalize, map, switchMap, take } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(catchError(err => {
      if (request.url.includes("refresh-token") || request.url.includes("login")) {
        if (request.url.includes("refresh-token")) {
          this.authenticationService.logout();
        }
        return throwError(err);
      }
      if (err.status !== 401) {
        return throwError(err);
      }
      if (this.refreshTokenInProgress) {
        console.log(" shouldnt be here");
        return this.refreshTokenSubject.pipe(
          filter(result => result != null),
          take(1),
          switchMap(() =>
            next.handle(this.addAuthenticationToken(request))
          ));
      }
      else {

        this.refreshTokenInProgress = true;
        this.refreshTokenSubject.next(null);
        return this.authenticationService.
          refreshToken().pipe(
            switchMap((user: any) => {
              this.refreshTokenInProgress = false;
              this.refreshTokenSubject.next(user);
              return next.handle(this.addAuthenticationToken(request));
            }),
             finalize(() => (this.refreshTokenInProgress = false)),
          );
      }
    }))
  }

  addAuthenticationToken(request: HttpRequest<any>) {

    const currentUser = this.authenticationService.currentUserValue;
    if (!currentUser.token) {
      return request;
    }
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${currentUser.token}`
      }
    });
  }

}




import { CommonComponent } from './../CommonComponent/common.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ObservableLike } from 'rxjs';
import { User } from 'src/helpers/user';
import { first, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { PATHS } from 'src/helpers/paths';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userSubject: BehaviorSubject<User>;
  // public currentUser!: BehaviorSubject<User>;
  // public currentUsername?: string;
  public user: Observable<User>;

  constructor(
    private http: HttpClient,
    private common: CommonComponent,
    private router: Router,
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') as any));
    this.user = this.userSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.userSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/home/login`, { username, password }, { withCredentials: true })
      .pipe(map(user => {
        //store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  // getUsername() {
  //   return this.http.post<any>(`${environment.apiUrl}/home/getcurrentuser`, null).pipe(map(user => {
  //     if (this.currentUserValue) {
  //       this.currentUser = new BehaviorSubject<User>(user);
  //       this.currentUsername = this.currentUser.value.username;
  //     }
  //     else {
  //       this.currentUsername = "anonymous";
  //     }
  //   }))
  // }
  // onInit() {
  //   this.common.unSubscribe();
  //   this.getUsername().pipe(first()).subscribe();
  // }

  logout() {
    //remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.userSubject.next(null as any);
    // if (this.currentUser.value) {
    //   this.currentUser.next(null as any);
    // }
    // this.currentUsername = "";
    this.router.navigate([PATHS.LOGIN_FORM]);
  }

  refreshToken() {
    return this.http.post<any>(`${environment.apiUrl}/home/refresh-token`, {}, { withCredentials: true }).pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.userSubject.next(user);
    }));
  }
}

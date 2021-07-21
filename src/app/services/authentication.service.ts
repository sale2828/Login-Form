import { CommonComponent } from './../CommonComponent/common.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/helpers/user';
import { first, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentTokenSubject: BehaviorSubject<User>;
  public currentUser!: BehaviorSubject<User>;
  public currentUsername?: string;

  constructor(
    private http: HttpClient,
    private common: CommonComponent,
    ) {
    this.currentTokenSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') as any));
  }

  public get currentUserValue(): User {
    return this.currentTokenSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/home/login`, { username, password })
      .pipe(map(user => {
        //store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user, ["token"]));
        this.currentTokenSubject.next(user);
      }));
  }

  getUsername() {
    return this.http.post<any>(`${environment.apiUrl}/home/getcurrentuser`, null).pipe(map(user => {
      if (this.currentUserValue) {
        this.currentUser = new BehaviorSubject<User>(user);
        this.currentUsername = this.currentUser.value.username;
      }
      else {
        this.currentUsername = "anonymous";
      }
    }))
  }
  onInit() {
    this.common.unSubscribe();
    this.getUsername().pipe(first()).subscribe();
  }

  logout() {
    //remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentTokenSubject.next(null as any);
    if (this.currentUser.value) {
      this.currentUser.next(null as any);
    }
    this.currentUsername = "";
  }
}

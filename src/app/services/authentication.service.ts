import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/helpers/user';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentTokenSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentTokenSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') as any));
    console.log(this.currentTokenSubject);
    this.currentUser = this.currentTokenSubject.asObservable();
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
        return user;
      }));
  }

  logout() {
    //remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentTokenSubject.next(null as any);
  }
}

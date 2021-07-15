import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUsername: string = '';
  private currentPassword: string = '';

  private isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    ) { }



  login(username: string, password: string): void {

    if (username == 'admin' && password == 'admin') {
      this.currentUsername = username;
      this.currentPassword = password;
      this.isLoggedIn = true;
      this.router.navigate(['homepage']);
      localStorage.setItem('loggedIn', '1');
      return;
    }
    this.isLoggedIn = false;
    localStorage.setItem('loggedIn', '');
    return;
  }


  logout(): void {
    this.currentUsername = '';
    this.currentPassword = '';
    this.isLoggedIn = false;
    this.router.navigate(['login_form']);
    localStorage.setItem('loggedIn', '');
    return;
  }

  checkOnRefresh(): void {
    if (localStorage.getItem('loggedIn')) {
      this.isLoggedIn = true;
      return;
    }
    this.isLoggedIn = false;
    return;
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}

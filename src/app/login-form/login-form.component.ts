import { ComponentCanDeactivate } from './../component-can-deactivate';
import { LoginService } from '../services/login.service';
import { Component, OnInit } from '@angular/core';
import { ɵROUTER_PROVIDERS } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [ɵROUTER_PROVIDERS],
})
export class LoginFormComponent implements OnInit, ComponentCanDeactivate {
  canDeactivate(): boolean {
    return !this.isDirty;
  }

  _username = '';
  _password = '';
  isDirty = false;

  constructor(private route: Router, private logIn: LoginService) {}

  ngOnInit(): void {}

  login(): void {
    this.logIn.login(this._username, this._password);
  }
}

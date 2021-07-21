import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
import { User } from 'src/helpers/user';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { PATHS } from 'src/helpers/paths';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  //dodati za ngif u htmlu
  currentUser?: User;

  title = 'Welcome';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
  }

logout() {
  this.authenticationService.logout();
  this.router.navigate([PATHS.LOGIN_FORM]);
}

}

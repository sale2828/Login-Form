import { CommonComponent } from './CommonComponent/common.component';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
import { User } from 'src/helpers/user';
import { Router } from '@angular/router';
import { PATHS } from 'src/helpers/paths';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  //dodati za ngif u htmlu
  currentUser?: User;
  user!: User;
  title = 'Welcome';

  constructor(
    public authenticationService: AuthenticationService,
    private common: CommonComponent,
    private router: Router,

  ) {
    this.authenticationService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.authenticationService.logout();
  }

  ngOnInit(): void {
    // this.authenticationService.onInit();
  }



  //   <div *ngIf= "authenticationService.currentUsername">
  //   <span style="float:right">{{authenticationService.currentUsername}}</span>
  // </div>


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.common.unSubscribe();
  }


}

import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit} from '@angular/core';
import { LoginService } from '../services/login.service';
import { ObjectService } from '../services/object.service';
import { Object } from '../../helpers/object';
import { Router } from '@angular/router';
import { PATHS } from 'src/helpers/paths';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  title = 'Homepage';
  objects: Object[] = [];
  selectedObject?: Object;


  constructor(
    private authenticationService: AuthenticationService,
    private objectService: ObjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }




  logout() {
    this.authenticationService.logout();
    this.router.navigate([PATHS.LOGIN_FORM]);
  }
}


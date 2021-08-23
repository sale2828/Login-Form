import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit} from '@angular/core';
import { Object } from '../helpers/object';
import { Router } from '@angular/router';
import { PATHS } from 'src/app/helpers/paths';


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
    private router: Router
  ) { }

  ngOnInit(): void {
  }




  logout() {
    this.authenticationService.logout();
  }
}


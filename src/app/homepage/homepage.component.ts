import { Component, OnInit} from '@angular/core';
import { LoginService } from '../services/login.service';
import { ObjectService } from '../services/object.service';
import { Object } from './../object';


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
    private logOut: LoginService,
    private objectService: ObjectService
  ) { }

  ngOnInit(): void {
    this.getObjects();
  }

  logout(): void {
    this.logOut.logout();
  }


  getObjects(): void {
    this.objectService.getObjects().subscribe(objects => this.objects = objects);
  }
}

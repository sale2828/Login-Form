import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-in-page',
  templateUrl: './logged-in-page.component.html',
  styleUrls: ['./logged-in-page.component.css']
})
export class LoggedInPageComponent implements OnInit {

  title = 'you have successfully logged in';
  constructor(
  ) { }

  ngOnInit(): void {
  }


}

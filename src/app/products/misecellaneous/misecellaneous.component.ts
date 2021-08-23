import { observable, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-misecellaneous',
  templateUrl: './misecellaneous.component.html',
  styleUrls: ['./misecellaneous.component.css']
})
export class MisecellaneousComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // var requestStream = of('https://api.github.com/users');
    // requestStream.subscribe(requestUrl => {
    //   var responseStream = new Observable(function (observer) {
    //     jQuery.getJSON(requestUrl)
    //       .done(response => { observer.next(response); })
    //       .fail((jqXHR, status, error) => { observer.error(error); })
    //       .always(() => { observer.complete(); });
    //   });
    //   responseStream.subscribe(response => {

    //   });
    // })
  }

}

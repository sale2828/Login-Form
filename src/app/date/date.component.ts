import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { DateTimeService } from '../services/date-time.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {


  _subIfTrue: Subject<any> = new Subject<any>();

  constructor(public dateTimeService: DateTimeService) { }




  ngOnInit() {
    this.loadDateTime();
  }

  loadDateTime() {
    this.unSubscribe();
    this.getDateTime().pipe(takeUntil(this._subIfTrue)).subscribe(() => { interval(1000).pipe(takeUntil(this._subIfTrue)).subscribe(() => { this.getDateTime().subscribe()}) });
  };


  private getDateTime(): Observable<any> {
    return this.dateTimeService.getCurrentDateTime().pipe(takeUntil(this._subIfTrue), map(data => {
      console.log(data);
      this.dateTimeService.setCurrentDateTime(data.dateTime);
    }));
  }



  unSubscribe() {
    this._subIfTrue.next();
    this._subIfTrue.complete();
    this._subIfTrue = new Subject<any>();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unSubscribe();
  }


}

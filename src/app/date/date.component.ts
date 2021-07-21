import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { DateTimeService } from '../services/date-time.service';
import { CommonComponent } from '../CommonComponent/common.component';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {


  _subIfTrue: Subject<any> = new Subject<any>();

  constructor(
    public dateTimeService: DateTimeService,
    private common: CommonComponent
    ) { }




  ngOnInit() {
    this.loadDateTime();
  }

  loadDateTime() {
    this.common.unSubscribe();
    this.getDateTime().pipe(takeUntil(this._subIfTrue)).subscribe(() => { interval(1000).pipe(takeUntil(this.common.subIfTrue)).subscribe(() => { this.getDateTime().subscribe()}) });
  };


  private getDateTime(): Observable<any> {
    return this.dateTimeService.getCurrentDateTime().pipe(takeUntil(this._subIfTrue), map(data => {
      this.dateTimeService.setCurrentDateTime(data.dateTime);
    }));
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.common.unSubscribe();
  }


}

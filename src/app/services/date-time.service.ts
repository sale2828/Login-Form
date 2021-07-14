import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor(private http: HttpClient) { }

 private currentDateTime: any;

  getCurrentDateTime(): Observable<any> {
    return this.http.get('https://localhost:44395/api/Date',);
  }

  setCurrentDateTime(date: any) {
    this.currentDateTime = date;
  }

  displayCurrentDateTime() {
    return this.currentDateTime;
  }

}




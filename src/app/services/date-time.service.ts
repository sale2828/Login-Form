import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor(private http: HttpClient) { }

 private currentDateTime: any;

  getCurrentDateTime(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/DateTime`);
  }

  setCurrentDateTime(date: any) {
    this.currentDateTime = date;
  }

  displayCurrentDateTime() {
    return this.currentDateTime;
  }

}




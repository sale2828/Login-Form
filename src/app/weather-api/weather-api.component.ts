import { Component, OnInit } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';
import { WeatherService } from '../services/weather.service';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.css']
})
export class WeatherApiComponent implements OnInit {

  _selectedCity: string = 'London';
  _subIfTrue: Subject<any> = new Subject<any>();
  count$: any;
  counter = 0;

  constructor(public weatherService: WeatherService) { }




  ngOnInit() {
    this.weatherService.WeatherData = {
      main: {},
      isDay: true
    };
    this.loadWeather();
  }

  loadWeather() {
    this.counter = 0;
    this.unSubscribe();
    this.getWeather(this._selectedCity).pipe(takeUntil(this._subIfTrue)).subscribe(() => {
      interval(10000*600).pipe(takeUntil(this._subIfTrue)).subscribe(
        () => {
          this.getWeather(this._selectedCity).subscribe();
          this.counter++;
        }
      );
    });
  }

  private getWeather(city: string): Observable<void> {

    return this.weatherService.getWeatherData(city)
      .pipe(takeUntil(this._subIfTrue), map(x => { this.weatherService.setWeatherData(x) }));

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

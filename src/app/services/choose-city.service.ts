import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChooseCityService {

  apiBaseUrl = 'https://localhost:4200'
  constructor() { }
}

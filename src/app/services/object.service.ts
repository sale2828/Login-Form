import { OBJECTS } from '../helpers/objects';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Object } from '../helpers/object';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor() { }

  getObjects(): Observable<Object[]> {
    const objects = of(OBJECTS)
    return objects;
  }

  getObject(id: number): Observable<Object> {

    const object = OBJECTS.find(h => h.id === id)!;
    return of(object);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeoCoordinates } from '../interfaces/geo-coordinates';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {

  constructor() { }

  get(): Observable<GeoCoordinates> {
    return new Observable(obs => {
      navigator.geolocation.getCurrentPosition(
        position => {
          let coordinates = {} as GeoCoordinates;
          coordinates.latitude = position.coords.latitude;
          coordinates.longitude = position.coords.longitude;
          obs.next(coordinates);
          obs.complete();
        },
        error => {
          obs.error(error);
        }
      );
    });
  }
}

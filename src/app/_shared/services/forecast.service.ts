import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Forecast } from '../interfaces/forecast';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private httpClient: HttpClient) { }

  byCoordinates(latitude: number, longitude: number) {
    const hourly = 'temperature_2m,precipitation';
    const currentWeather = true;
    const today = new Date().toISOString().split('T')[0];
    let envUrl = environment.production ? '/guide/' : environment.url;

    return this.httpClient.get<Forecast>(`${envUrl}?timezone=America%2FSao_Paulo&hourly=${hourly}&current_weather=${currentWeather}&start_date=${today}&end_date=${today}&latitude=${latitude}&longitude=${longitude}`)
  }
}

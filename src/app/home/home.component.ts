import { Component, OnInit } from '@angular/core';
import { Forecast } from '../_shared/interfaces/forecast';
import { GeoLocationService } from '../_shared/services/geo-location.service';
import { ForecastService } from '../_shared/services/forecast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  forecast: Forecast = {} as Forecast;
  today: Date = new Date();

  constructor(
    private geoLocationService: GeoLocationService,
    private forecastService: ForecastService
  ) { }

  ngOnInit(): void {
    this.geoPosition();
  }

  geoPosition() {
    this.geoLocationService.get().subscribe(position => {
      this.weatherByCoordinates(position.latitude, position.longitude);
    });
  }

  weatherByCoordinates(lat: number, long: number) {
    this.forecastService.byCoordinates(lat, long).subscribe(todayWeather => {
      this.forecast = todayWeather;
    });
  }

}

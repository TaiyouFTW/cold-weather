import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from '../../interfaces/forecast';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input() forecast: Forecast = {} as Forecast;

  constructor() { }

  ngOnInit(): void {
  }

}

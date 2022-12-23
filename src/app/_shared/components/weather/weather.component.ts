import { Component, Input, OnInit } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Forecast } from '../../interfaces/forecast';
import { IconService } from '../../services/icon.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input() forecast: Forecast = {} as Forecast;

  icon: string = '';

  hour: number = new Date().getDate();

  constructor(
    private iconService: IconService
  ) {
  }

  ngOnInit(): void {
  }

  getIcon() {
    this.icon = this.iconService.codeToIcon(this.forecast.current_weather.weathercode);
    return this.icon as IconName;
  }

}

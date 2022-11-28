import { Component, OnInit } from '@angular/core';
import { GeoCoordinates } from '../_shared/interfaces/geo-coordinates';
import { GeoLocationService } from '../_shared/services/geo-location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  coordinates: GeoCoordinates = {} as GeoCoordinates;

  constructor(private geoLocationService: GeoLocationService) { }

  ngOnInit(): void {
    this.geoLocationService.get().subscribe(position => {
      this.coordinates.latitude = position.latitude;
      this.coordinates.longitude = position.longitude;
    });
  }

}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CityData } from './city-data';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-city',
  imports: [],
  templateUrl: './city.html',
  styleUrl: './city.scss'
})
export class City {
  cities: CityData[] = [];

  constructor(http: HttpClient)
  {
    http.get<CityData[]>(environment.apiUrl + "api/cities").subscribe(result => {
      this.cities = result;
    });
  }
}

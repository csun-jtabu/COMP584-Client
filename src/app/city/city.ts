import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CityData } from './city-data';
import { environment } from '../../environments/environment';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city',
  imports: [AsyncPipe],
  templateUrl: './city.html',
  styleUrl: './city.scss'
})
export class City {
  cities$: Observable<CityData[]>;

  constructor(private http: HttpClient)
  {
    this.cities$ = http.get<CityData[]>(environment.apiUrl + "api/cities")
  }
}

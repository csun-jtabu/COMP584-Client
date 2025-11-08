import { Component } from '@angular/core';
import { CountryData } from './country-data';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './country.html',
  styleUrl: './country.scss'
})
export class Country {
  countries$: Observable<CountryData[]>;

  constructor(private http: HttpClient)
  {
    this.countries$ =http.get<CountryData[]>(environment.apiUrl + "api/countries")
  }
}

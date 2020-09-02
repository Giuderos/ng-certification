import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentConditions(location: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('zip', location);
    queryParams = queryParams.append('units', 'imperial');
    queryParams = queryParams.append('appid', '5a4b2d457ecbef9eb2a71e480b947604');
    return this.http.get('https://api.openweathermap.org/data/2.5/weather', {params: queryParams})
  }

  getForecast(location: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('zip', location);
    queryParams = queryParams.append('units', 'imperial');
    queryParams = queryParams.append('appid', '5a4b2d457ecbef9eb2a71e480b947604');
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast/daily', {params: queryParams})
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { WeatherCoordsModel } from '@app/models/WeatherModels';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  //Get specific city weather from API
  getWeather(city: string): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}/weather?q=${city}&appid=${environment.apiKey}&units=metric`
    );
  }

  //Get hourly forecast for a city from API
  getHourlyForecast(coords: WeatherCoordsModel): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${environment.apiKey}&exclude=current,minutely,daily,alerts&units=metric`
    );
  }
}

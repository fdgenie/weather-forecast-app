import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { WeatherCoordsModel, CityModel } from '@app/models/WeatherModels';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  //Get specific city weather from API
  getWeather(city: string): Observable<any> {
    return this.http
      .get(
        `${environment.baseUrl}/weather?q=${city}&appid=${environment.apiKey}&units=metric`
      )
      .pipe(
        map((city: CityModel) => {
          return {
            id: city.id,
            name: city.name,
            main: city.main,
            coord: city.coord,
            timezone: city.timezone,
            weather: city.weather,
            wind: city.wind,
          };
        })
      );
  }

  //Get hourly forecast for a city from API
  getHourlyForecast(coords: WeatherCoordsModel): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${environment.apiKey}&exclude=current,minutely,daily,alerts&units=metric`
    );
  }
}

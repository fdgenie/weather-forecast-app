import { Component, OnInit } from '@angular/core';
import { WeatherService } from '@app/services/weather.service';
import { forkJoin, Observable } from 'rxjs';
import { CityModel } from '@app/models/WeatherModels';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent implements OnInit {
  //Boolean to check if the user clicked the card
  flippedCard: boolean = false;
  cities: Array<CityModel> = [];

  constructor(private WeatherService: WeatherService) {}

  ngOnInit(): void {
    let athens = this.WeatherService.getWeather('Athens');
    let paris = this.WeatherService.getWeather('Paris');
    let amsterdam = this.WeatherService.getWeather('Amsterdam');
    let berlin = this.WeatherService.getWeather('Berlin');
    let london = this.WeatherService.getWeather('London');

    //Make the first subscription to get date
    this.subscriptToWeather([athens, paris, amsterdam, berlin, london]);

    //Make subscription every 60 seconds to refresh data
    setInterval(() => {
      this.subscriptToWeather([athens, paris, amsterdam, berlin, london]);
    }, 60000);
  }

  //The subscription to weather function
  subscriptToWeather(cities: Array<Observable<CityModel>>) {
    forkJoin(cities).subscribe((response) => {
      this.cities = response;
    });
  }
}

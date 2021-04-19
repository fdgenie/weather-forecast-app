import { Component, OnInit, Input } from '@angular/core';
import { CityModel } from '@app/models/WeatherModels';

@Component({
  selector: 'app-weather-front-card',
  templateUrl: './weather-front-card.component.html',
  styleUrls: ['./weather-front-card.component.css'],
})
export class WeatherFrontCardComponent implements OnInit {
  //Passing prop city
  @Input() city: CityModel;

  today: Date;
  icon: string;

  constructor() {}

  ngOnInit(): void {
    this.setDatetime();
    this.icon = `https://openweathermap.org/img/wn/${this.city.weather[0].icon}@2x.png`;
  }

  //Function to calculate the correct time according to UTC and city timezone
  setDatetime(): void {
    this.today = new Date();
    this.today.setHours(this.today.getUTCHours() + this.city.timezone / 3600);
  }

  //Function that calculate the average temperature
  averageTemp(maxTemp: number, minTemp: number): string {
    return ((maxTemp + minTemp) / 2).toFixed(0);
  }
}

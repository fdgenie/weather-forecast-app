import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '@app/services/weather.service';
import { CityModel, HourlyForecastModel } from '@app/models/WeatherModels';

@Component({
  selector: 'app-weather-back-card',
  templateUrl: './weather-back-card.component.html',
  styleUrls: ['./weather-back-card.component.css'],
})
export class WeatherBackCardComponent implements OnInit {
  @Input() city: CityModel;

  hourlyForecast: HourlyForecastModel;
  offset: number;
  today: Date;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.today = new Date();
    this.weatherService
      .getHourlyForecast(this.city.coord)
      .subscribe((response) => {
        this.hourlyForecast = response.hourly.splice(1, 7); //Get the forecast of the 7 next hours
        this.offset = response.timezone_offset;
        this.today.setHours(this.today.getUTCHours() + this.offset / 3600); //Set hours according to UTC and city offset
      });
  }

  //Function to set the Time of the table
  setTime(): Date {
    this.today.setHours(this.today.getHours() + 1);
    return this.today;
  }
}

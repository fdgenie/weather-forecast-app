export class CityModel {
  id: number;
  name: string;
  main: WeatherMainModel;
  coord: WeatherCoordsModel;
  timezone: number;
  weather: Array<WeatherWeatherModel>;
  wind: WeatherWindModel;
}

export class HourlyForecastModel {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pop: number;
  pressure: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: WeatherWeatherModel;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export class WeatherCoordsModel {
  lon: number;
  lat: number;
}

export class WeatherMainModel {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export class WeatherWeatherModel {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export class WeatherWindModel {
  deg: number;
  gust: number;
  speed: number;
}

import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'environments/environment';
import { CityModel } from '@app/models/WeatherModels';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpTestingController: HttpTestingController;

  const city: CityModel = {
    id: 264371,
    name: 'Athens',
    main: {
      temp_max: 16,
      temp_min: 14,
      feels_like: 16.55,
      humidity: 55,
      pressure: 1011,
      temp: 17.33,
    },
    coord: {
      lat: 37.9795,
      lon: 23.7162,
    },
    timezone: 10800,
    weather: [
      {
        description: 'few clouds',
        icon: '02d',
        id: 801,
        main: 'Clouds',
      },
    ],
    wind: {
      deg: 228,
      gust: 3.35,
      speed: 2.5,
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    });
    service = TestBed.inject(WeatherService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('retrieve weather of a city from the API with GET', () => {
    service.getWeather(city.name).subscribe((response) => {
      expect(response.id).toBe(city.id);
    });
    const request = httpTestingController.expectOne(
      `${environment.baseUrl}/weather?q=${city.name}&appid=${environment.apiKey}&units=metric`
    );

    expect(request.request.method).toBe('GET');
  });

  it('retrieve forecast of a city from the API with GET', () => {
    service.getHourlyForecast(city.coord).subscribe();

    const request = httpTestingController.expectOne(
      `${environment.baseUrl}/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${environment.apiKey}&exclude=current,minutely,daily,alerts&units=metric`
    );

    expect(request.request.method).toBe('GET');
  });
});

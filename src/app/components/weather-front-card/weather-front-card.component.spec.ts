import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityModel } from '@app/models/WeatherModels';
import { WeatherFrontCardComponent } from './weather-front-card.component';

describe('WeatherFrontCardComponent', () => {
  let component: WeatherFrontCardComponent;
  let fixture: ComponentFixture<WeatherFrontCardComponent>;
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherFrontCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFrontCardComponent);
    component = fixture.componentInstance;
    component.city = city;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('take two values and return the average', () => {
    const value = component.averageTemp(
      component.city.main.temp_max,
      component.city.main.temp_min
    );

    expect(value).toBe('15');
  });
});

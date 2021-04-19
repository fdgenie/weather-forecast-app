import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { WeatherCardComponent } from './weather-card.component';
import { By } from '@angular/platform-browser';
import { CityModel } from '@app/models/WeatherModels';

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;
  const cities: Array<CityModel> = [
    {
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
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherCardComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    component.cities = cities;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have the back class when flippedArray is false', () => {
    component.flippedArray = [false];
    fixture.detectChanges();

    let itemClasses = fixture.debugElement.query(By.css('.item')).classes;

    expect(itemClasses.back).toBeFalsy();
  });

  it('should have the back class when flippedArray is true', () => {
    component.flippedArray = [true];
    fixture.detectChanges();

    let itemClasses = fixture.debugElement.query(By.css('.item')).classes;

    expect(itemClasses.back).toBeTruthy();
  });
});

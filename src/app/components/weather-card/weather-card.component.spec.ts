import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { WeatherCardComponent } from './weather-card.component';
import { By } from '@angular/platform-browser';

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherCardComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
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

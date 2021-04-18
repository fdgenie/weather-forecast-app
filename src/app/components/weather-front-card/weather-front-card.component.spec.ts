import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFrontCardComponent } from './weather-front-card.component';

describe('WeatherFrontCardComponent', () => {
  let component: WeatherFrontCardComponent;
  let fixture: ComponentFixture<WeatherFrontCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherFrontCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFrontCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

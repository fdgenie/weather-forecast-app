import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherFrontCardComponent } from './components/weather-front-card/weather-front-card.component';
import { WeatherBackCardComponent } from './components/weather-back-card/weather-back-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherFrontCardComponent,
    WeatherBackCardComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { WeatherListComponent } from '../dev/weather/weather-list.component';
import { WeatherItemComponent } from '../dev/weather/weather-item.component';
import { WeatherItem } from '../dev/weather/weather-item';
import { WEATHER_ITEMS } from '../dev/weather/weather.data';
import { WeatherService } from '../dev/weather/weather.service';
import { WeatherSearchComponent } from'../dev/weather/weather-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    WeatherItemComponent,
    WeatherItem,
    WEATHER_ITEMS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

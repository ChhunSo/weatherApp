import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

import {CurrentWeather} from './current-weather';
import {Forecast} from './forecast';

@Injectable()
export class WeatherService {
	myWeather:CurrentWeather; 
	location
  constructor(private http: Http) { }

  // Grabs Geolocation for user's current position
  localWeather(){
  	return new Promise((res,rej)=>{
  		navigator.geolocation.getCurrentPosition((pos)=>{
  			this.location = pos.coords;
  			const lat = this.location.latitude;
  			const lon = this.location.longitude;
  			return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=10181d8d677b77b4f588186213875867&units=imperial`).map((response: Response)=>response.json()).toPromise().then(
  				(data)=> {
  					console.log(data);
  					this.myWeather = new CurrentWeather(data.name,data.main.temp,data.weather[0].icon,data.weather[0].description,data.main.temp_max,data.main.temp_min);
  					res(this.myWeather);
  				});
  		})
  	})
  }

  // City entered by User
  inputCityWeather(city: string){
  	return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=10181d8d677b77b4f588186213875867&units=imperial`)
  		.map((response: Response) => response.json());
  }

  // 5 day forcast
  fiveDayForecast(city:string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city},us&appid=10181d8d677b77b4f588186213875867&units=imperial&cnt=3`).map((response: Response) => response.json());
  }
}
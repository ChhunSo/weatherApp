import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './weather.data';

@Injectable()
export class WeatherService {
	constructor(private _http: Http) {

	}
	addWeatherItem(weatherItem: WeatherItem){
		WEATHER_ITEMS.push(weatherItem);
	}

	getWeatherItems(){
		return WEATHER_ITEMS;
	}
	
	serachWeatherData(cityName: string): Observable<any>{
		return this._http.get('api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=10181d8d677b77b4f588186213875867')
			.map(response => response.json())
			.catch(error => {
				console.error(error);
				return Observable.throw(error.json());
			});
	}
}
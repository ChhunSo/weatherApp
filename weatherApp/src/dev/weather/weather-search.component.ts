import { Component } from '@angular/core';

@Component({
	selector: 'my-weather-service',
	template: './weather-search.html'
})
export class WeatherSearchComponent {
	constructor(private _weatherService: WeatherService) {}

	onSubmit(form: ControlGroup){
		this._weatherService.searchWeatherData(form.value.location)
			.subscribe(
					data => {
						const weatherItem = new WeatherItem(data.name);
					}
				);
	}
}
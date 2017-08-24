import { Component, Input } from "@angular/core";
import { WeatherItem } from "./weather-item";

@Component({
	selector: 'weather-item', //Standard is to prefix selectors with 'my' to not interfere with packages,
	templateUrl: './weather-item.html',
	styleUrls: ['./weather-item.css'],

})

export class WeatherItemComponent {
	@Input('item') weatherItem: WeatherItem;

}
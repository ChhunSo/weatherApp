import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl} from '@angular/forms';
import {Forecast} from '../forecast';
import {WeatherService} from '../weather.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  forecastForm: FormGroup;
  cityForecast: Forecast[] = [];

  onSubmit(){
  	console.log(this.forecastForm);
  	this.weatherService.fiveDayForecast(this.forecastForm.value.forecastCity).subscribe(
  		(data) => {
  			console.log(data);
  			for (let i = 0; i < data.list.length; i++){
  				const temporary = new Forecast((data.list[i].dt * 1000), 
  																			 data.list[i].weather[0].icon,
  																			 data.list[i].weather[0].description,
  																			 data.list[i].temp.max,
  																			 data.list[i].temp.min);
  				this.cityForecast.push(temporary);
  			}
  			console.log(this.cityForecast);
  		});
  }

  ngOnInit() {
  	this.forecastForm = new FormGroup({
  		forecastCity: new FormControl('Hayward')
  	})
  }

}

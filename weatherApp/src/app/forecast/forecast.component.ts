import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  constructor() { }

  forecastForm: FormGroup

  ngOnInit() {
  	this.forecastForm = new FormGroup({
  		forecastCity: new FormControl('Hayward')
  	})
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
private result = null;
  constructor(private http:HttpClient) { }
  ngOnInit() {}
  consult(city){
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=bf8fe02fb5288ea367500fa2eab2fd09`)
    .subscribe(
      answer => {
        this.result = answer;
      }, 
      error => {
        console.error("Error");
        
      }
    );
  }
}

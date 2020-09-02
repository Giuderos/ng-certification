import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { Detail } from '../detail';

@Component({
  selector: 'app-location-forecast',
  templateUrl: './location-forecast.component.html',
  styleUrls: ['./location-forecast.component.css']
})
export class LocationForecastComponent implements OnInit {

  zipcode: string;
  forecast: Detail[] = [];
  date = new Date();
  isLoaded: boolean = false;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      paramMap => {
      this.zipcode = paramMap.get('zipcode');
      this.weatherService.getForecast(this.zipcode).subscribe(
        (response: any) => {
          for(let i = 0; i < 5; i++) {
            this.forecast[i] = new Detail(
              response.city.name, 
              response.list[i].weather[0].main,
              response.list[i].temp.day,
              response.list[i].temp.max,
              response.list[i].temp.min,
              this.date.setDate( this.date.getDate() + 1)
              );
          }
          this.isLoaded = true;
        })
      }
    )
  }
}
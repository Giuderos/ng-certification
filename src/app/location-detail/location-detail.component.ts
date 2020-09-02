import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../weather.service';
import { Detail } from '../detail';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {
  @Input() location: string;
  @Input() index: number;
  @Output() onRemove = new EventEmitter<number>();
  
  detail: Detail;
  isLoaded: boolean = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getCurrentConditions(this.location).subscribe(
      (response: any) => {
        this.detail = new Detail(
        response.name,
        response.weather[0].main,
        response.main.temp,
        response.main.temp_max,
        response.main.temp_min,
        new Date(response.dt).getDate())
        this.isLoaded = true
      }
    );
  }

  removeLocation() {
    this.onRemove.emit(this.index);
  }

}
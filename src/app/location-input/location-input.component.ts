import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.css']
})
export class LocationInputComponent implements OnInit {
  location: string;
  locationArray: string[];

  constructor() { }

  ngOnInit() {
    this.locationArray = localStorage.getItem('locations') ? JSON.parse(localStorage.getItem('locations')) : [];
  }

  addLocation() {
    this.locationArray.push(this.location);
    localStorage.setItem('locations', JSON.stringify(this.locationArray));
    this.location = '';
  }

  removeLocation(item: number) {
    this.locationArray.splice(item, 1);
    localStorage.setItem('locations', JSON.stringify(this.locationArray));
  }

}
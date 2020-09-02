import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { LocationInputComponent } from './location-input/location-input.component';
import { WeatherService } from './weather.service';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { LocationForecastComponent } from './location-forecast/location-forecast.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, LocationInputComponent, LocationDetailComponent, LocationForecastComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WeatherService]
})
export class AppModule { }

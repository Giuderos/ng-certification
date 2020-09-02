import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationInputComponent } from '../location-input/location-input.component';
import { LocationForecastComponent } from '../location-forecast/location-forecast.component';

const routes: Routes = [
  { path: 'forecast/:zipcode', component: LocationForecastComponent },
  { path: '', component: LocationInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
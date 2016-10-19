import angular from 'angular';
import { AirportSelectComponent } from './airport-select/airport-select.component';
import { FlightPageComponent } from './flight-page/flight-page.component';
import { DateWrapperComponent } from './date-wrapper/date-wrapper.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';

export default angular.module('app.components', [])
.component('airportSelect', AirportSelectComponent)
.component('flightPage', FlightPageComponent)
.component('dateWrapper', DateWrapperComponent)
.component('dateSelector', DateSelectorComponent)
.name;

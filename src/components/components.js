import angular from 'angular';
import { DateWrapperComponent } from './date-wrapper/date-wrapper.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { LocationPickerComponent } from './location-picker/location-picker.component';

export default angular.module('app.components', [])
.component('dateWrapper', DateWrapperComponent)
.component('dateSelector', DateSelectorComponent)
.component('locationPicker', LocationPickerComponent)
.name;

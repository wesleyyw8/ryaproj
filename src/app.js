import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import {
  CheapFlightService,
  AirportsService
} from './services';

angular.module('myApp', [
  uiRouter,
  Components
])
.service('AiportsService', AirportsService)
.service('CheapFlightService', CheapFlightService)
.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '',
      template: '<flight-page></flight-page>'
    });
});

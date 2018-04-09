import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import { HomeComponent } from './home/home.component';
import {
  CheapFlightService,
  AirportsService
} from './services';

angular.module('myApp', [
  uiRouter,
  Components
])
.component('homePage', HomeComponent)
.service('AiportsService', AirportsService)
.service('CheapFlightService', CheapFlightService)
.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '',
      template: '<home-page></home-page>'
    })
    .state('search', {
      url: '/search/{departure}/{arrival}/{dateDeparture}/{dateArrival}',
      template: '<div>Search!!! to be done!</div>'
    })
    .state('notFound', {
      url: 'notFound',
      template: '<div>Page not found</div>'
    })
    
  $urlRouterProvider.otherwise('/notFound');
});

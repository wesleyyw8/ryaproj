import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import {
  CheapFlightService,
  AirportsService
} from './services';

angular.module('myApp', [
  uiRouter,
  Components
])
.component('homePage', HomeComponent)
.component('searchResults', SearchResultsComponent)
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
      template: '<search-results></search-results>'
    })
    .state('notFound', {
      url: 'notFound',
      template: '<div>Page not found</div>'
    })
    //http://localhost:3000/#!/search/123/123/123/123
  $urlRouterProvider.otherwise('/notFound');
});

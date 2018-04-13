import { getCheapFlights } from 'Services/cheapflights.service';
import { FLIGHTS_URL } from 'Enums';
import moment from 'moment';

export default function SearchResultsController($scope, $stateParams, $timeout, $location) {
  'ngInject';
  $scope.params = {
    arrival: $stateParams.arrival,
    dateArrival: $stateParams.dateArrival,
    dateDeparture: $stateParams.dateDeparture,
    departure: $stateParams.departure
  }
  
  getCheapFlights($scope.params).then(data => {
    $timeout(() => {
      $scope.flightList = data;
      $scope.$apply();
    })
  });

  $scope.formatHour = value => 
    moment(new Date(value)).format('HH:MM')

  $scope.formatPrice = value =>
    Math.round(value).toFixed(2)
  
  $scope.goToPreviousPage = () => {
    window.history.back();
  }
}
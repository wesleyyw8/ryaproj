import { getCheapFlights } from 'Services/cheapflights.service';
import { FLIGHTS_URL } from 'Enums';

export default function SearchResultsController($scope, $stateParams) {
  'ngInject';
  // console.log($stateParams.arrival, $stateParams.dateArrival, $stateParams.dateDeparture, $stateParams.departure);
  const params = {
    arrival: $stateParams.arrival,
    dateArrival: $stateParams.dateArrival,
    dateDeparture: $stateParams.dateDeparture,
    departure: $stateParams.departure
  }
  
  //$scope.flightList = {A: 3};
  getCheapFlights(params).then(data => {
    $scope.flightList = data;
    console.log($scope.flightList);
  });
}
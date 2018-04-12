import { getAirports } from '../services/airports.service.js';

export default function HomeController($scope, $location) {
  'ngInject';

  let flightData = {};
  const filterSugestions = (value) => {
    return flightData.airports.filter((data) => {
      return data.name.toLowerCase().startsWith(value.toLowerCase()) || 
      data.iataCode.toLowerCase().startsWith(value.toLowerCase());
    });
  }

  getAirports().then(data => {
    flightData = data;
  });

  const loadArrivalDataSearch = (iata = '') => {
    const arrivalAirportsCodes = flightData.routes[iata];
    if (arrivalAirportsCodes) {
      $scope.$ctrl.arrivalData.originalSuggestions = flightData.airports.filter(item => arrivalAirportsCodes.indexOf(item.iataCode) > -1);
      $scope.$ctrl.arrivalData.suggestions = [...$scope.$ctrl.arrivalData.originalSuggestions];
      $scope.$ctrl.arrivalData.dropdownVisible = $scope.$ctrl.arrivalData.suggestions.length > 0;
    }
  }

  const filterArrivalList = value => {
    $scope.$ctrl.arrivalData.suggestions = filterSugestions(value, $scope.$ctrl.arrivalData.originalSuggestions);
  };

  $scope.$ctrl.departureData = {
    onSelect: value => {
      loadArrivalDataSearch(value.iataCode);
      $scope.$ctrl.departureData.value = value.name;
    },
    value: '',
    onFocus: () => {},
    suggestions: [],
    dropdownVisible: true,
    onChange: value => {
      $scope.$ctrl.departureData.suggestions = filterSugestions(value);
    },
    placeholder: 'Enter departure airport...'
  }

  $scope.$ctrl.arrivalData = {
    onSelect: value => {
      $scope.$ctrl.arrivalData.value = value.name;
      $scope.$ctrl.arrivalData.dropdownVisible = false;
    },
    value: '',
    onFocus: () => {
      $scope.$ctrl.arrivalData.dropdownVisible = true;
    },
    suggestions: [],
    dropdownVisible: false,
    onChange: value => {
      filterArrivalList(value);
    },
    placeholder: 'Enter arrival airport...'
  }

  $scope.$ctrl.goSearch = () => {
    if ($scope.$ctrl.startDate &&
      $scope.$ctrl.endDate &&
      $scope.$ctrl.departureData.value &&
      $scope.$ctrl.arrivalData.value) {
      $location.path(`/search/${$scope.$ctrl.departureData.value}/${$scope.$ctrl.arrivalData.value}/${$scope.$ctrl.startDate}/${$scope.$ctrl.endDate}`);
    }
  }
}
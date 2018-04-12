import { getAirports } from 'Services/airports.service';
import moment from 'moment';

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
      $scope.$ctrl.departureData.selectedItem = value;
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
      $scope.$ctrl.arrivalData.selectedItem = value;
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

  const formatDate = value => 
    moment(value.toLocaleDateString(), 'DD/MM/YYYY').format('YYYY-MM-DD');

  $scope.$ctrl.goSearch = () => {
    if ($scope.$ctrl.startDate &&
      $scope.$ctrl.endDate &&
      $scope.$ctrl.departureData.selectedItem.iataCode &&
      $scope.$ctrl.arrivalData.selectedItem.iataCode) {      
        $location.path(`/search/${$scope.$ctrl.departureData.selectedItem.iataCode}/${$scope.$ctrl.arrivalData.selectedItem.iataCode}/${formatDate($scope.$ctrl.startDate)}/${formatDate($scope.$ctrl.endDate)}`);
    }
  }
}
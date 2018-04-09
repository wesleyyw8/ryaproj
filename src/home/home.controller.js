import { AiportsService } from '../services/airports.service.js';

export default function HomeController($scope) {
  'ngInject';

  const filterSugestions = value => {
    return AiportsService().airports.filter((data) => {
      return data.name.toLowerCase().startsWith(value.toLowerCase()) || 
      data.iataCode.toLowerCase().startsWith(value.toLowerCase());
    });
  }





  $scope.$ctrl.goSearch = () => {
    console.log('qweqewqewqe');
  }


  const loadArrivalDataSearch = (iata = '') => {
    const arrivalAirportsCodes = AiportsService().routes[iata];
    if (arrivalAirportsCodes) {
      $scope.$ctrl.arrivalData.suggestions = AiportsService().airports.filter(item => arrivalAirportsCodes.indexOf(item.iataCode) > -1);
      $scope.$ctrl.arrivalData.dropdownVisible = $scope.$ctrl.arrivalData.suggestions.length > 0;
    }
  }

  $scope.$ctrl.departureData = {
    onSelect: value => {
      loadArrivalDataSearch(value.iataCode)
    },
    onFocus: () => {},
    suggestions: [],
    dropdownVisible: true,
    onChange: value => {
      $scope.$ctrl.departureData.suggestions = filterSugestions(value);
    }
  }

  $scope.$ctrl.arrivalData = {
    onSelect: () => {},
    onFocus: () => {},
    suggestions: loadArrivalDataSearch(),
    dropdownVisible: false,
    onChange: () => {
      console.log('123123!!!');
    }
  }
}
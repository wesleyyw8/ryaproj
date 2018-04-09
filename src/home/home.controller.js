export default function HomeController($scope) {
  'ngInject';

  $scope.$ctrl.goSearch = () => {
    console.log('qweqewqewqe');
  }

  $scope.$ctrl.departureData = {
    onSelect: () => {},
    onFocus: () => {},
    suggestions: []
  }

  $scope.$ctrl.arrivalData = {
    onSelect: () => {},
    onFocus: () => {},
    suggestions: []
  }
}
export default function LocationPickerController($scope, $timeout) {
  'ngInject';

  $timeout(() => {
    console.log($scope.$ctrl.connectorCtrl);
  }, 0);

  $scope.onKeyUp = (event) => {
    //console.log($scope.value);
  }
  
  $scope.onBlur = (event) => {

  }
  $scope.onFocus = (event) => {

  }
  $scope.inputThrottle = (value) => {
    console.log(value);
  }
};
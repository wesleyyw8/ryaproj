export default function LocationPickerController($scope, $timeout) {
  'ngInject';

  $scope.onKeyUp = (event) => {
    //console.log($scope.value);
  }
  
  $scope.onBlur = (event) => {

  }
  $scope.onFocus = (event) => {

  }
  $scope.inputThrottle = (value) => {
    $scope.$ctrl.connectorCtrl.setValue(value);
    //console.log($scope.$ctrl.connectorCtrl.getSuggestions());
  }

  $scope.onClickLocationSelect = (ev, item) => {
    $scope.$ctrl.connectorCtrl.setValue(value);
  }

  $scope.$watch(() => {
    return $scope.$ctrl.connectorCtrl.getSuggestions();
  }, (newVal) => {
    if (newVal) {
      $scope.list = newVal;
    }
  })
  $scope.dropdownVisible = true;
};
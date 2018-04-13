export default function LocationPickerController($scope, $timeout) {
  'ngInject';

  $scope.onBlur = () => {
    $timeout(() => {
      $scope.$ctrl.data.dropdownVisible = false;
    }, 400)
  }
}
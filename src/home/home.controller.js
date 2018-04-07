import { departureCtrl } from 'Components/location-picker/departure.js';
import { returnCtrl } from 'Components/location-picker/return.js';

export default function HomeController($scope) {
  $scope.departureCtrl = departureCtrl;
  // AiportsService().then((data) => {
  //   scope.list = {
  //     airports: data.airports,
  //     routes: data.routes
  //   };
  // });
}
import template from './home.component.html';
import './home.component.scss';
import controller from './home.controller.js';

export const HomeComponent = {
  template,
  controller
};
controller.$inject = ["$scope"];
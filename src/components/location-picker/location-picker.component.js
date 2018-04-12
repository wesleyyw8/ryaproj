import template from './location-picker.component.html';
import controller from './location-picker.controller';
import css from './location-picker.component.scss';

export const LocationPickerComponent = {
  bindings: {
    data: '=',
  },
  template,
  controller,
  css
};

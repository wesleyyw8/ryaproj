import { AiportsService } from 'Services/airports.service.js';

export const departureCtrl = () => {
  const airportData = AiportsService();
  let suggestions;
  let valueWrittenByUser = '';
  let dropdownVisible = false;
  const filterSugestions = value => {
    return airportData.airports.filter((data) => {
      return data.name.toLowerCase().startsWith(value.toLowerCase()) || 
      data.iataCode.toLowerCase().startsWith(value.toLowerCase());
    });
  }

  const setValue = value => {
    valueWrittenByUser = value;
    if (value.length > 1) {
      suggestions = filterSugestions(value)
      suggestions.length > 0 ? dropdownVisible = true : dropdownVisible = false;
    }
  }

  const getSuggestions = () => {
    return suggestions;
  }

  const getDropDownIsVisible = () => {
    return dropdownVisible;
  }

  return {
    getSuggestions,
    valueWrittenByUser,
    setValue
  }
};
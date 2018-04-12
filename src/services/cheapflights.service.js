import { FLIGHTS_URL } from 'Enums';

let cachedData;

export const getCheapFlights = param => {
  if (!cachedData) {
    return fetch(`${FLIGHTS_URL}/from/${param.departure}/to/${param.arrival}/${param.dateDeparture}/${param.dateArrival}/250/unique/?limit=15&offset-0`)
      .then(data => data.json())
      .then(data => 
        cachedData = data.flights
      );
  }
  return Promise.resolve(cachedData);
};
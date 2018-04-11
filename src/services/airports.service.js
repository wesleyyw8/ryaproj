import { FLIGHT_BOOKING_SELECTOR_URL } from 'Enums';

let cachedData;
export const getAirports = () => {
  if (!cachedData) {
    return fetch(FLIGHT_BOOKING_SELECTOR_URL)
      .then(data => data.json())
      .then(data =>
        cachedData = {
          routes: data.routes,
          airports: data.airports
        }
      );
  }
  return Promise.resolve(cachedData);
};


export const test = 'awd';
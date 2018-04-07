import { FLIGHT_BOOKING_SELECTOR_URL } from 'Enums';

export const AiportsService = () =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", FLIGHT_BOOKING_SELECTOR_URL);
    xhr.onload = () => {
      resolve(JSON.parse(xhr.responseText));
    }
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
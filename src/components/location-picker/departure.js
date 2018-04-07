import { AiportsService } from 'Services/airports.service.js';

export const departureCtrl = {
  a: 3,
  list: AiportsService().then((data) => {
    return {
      airports: data.airports,
      routes: data.routes
    };
  })
}
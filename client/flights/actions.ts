import { createAction } from 'redux-actions';
import { Flight } from './model';
import flightsApi from './api/mockApi';

import {
  GET_FLIGHTS
} from './constants/ActionTypes';


const getFlights = createAction<any, string[], string >(
    GET_FLIGHTS, 
    (city, date) => flightsApi.getFlights(city, date)
); 


export {
  getFlights,
}

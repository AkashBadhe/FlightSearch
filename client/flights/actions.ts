import { createAction } from 'redux-actions';
import { Flight } from './model';
import flightsApi from './api/mockApi';

import {
  GET_FLIGHTS,
  UPDATE_CITY_FILTER,
  UPDATE_DATE_FILTER
} from './constants/ActionTypes';


const getFlights = createAction<any, string[], string>(
  GET_FLIGHTS,
  (city, date) => flightsApi.getFlights(city, date)
);

const updateCityFilter = createAction<any, string[]>(
  UPDATE_CITY_FILTER,
  (cities) => cities
);

const updateDateFilter = createAction<any, Date>(
  UPDATE_DATE_FILTER,
  (date) => date
);


export {
  getFlights,
  updateCityFilter,
  updateDateFilter
}

import { handleActions, Action } from 'redux-actions';
import { Flight, IState } from './model';

let moment = require("moment");
if ("default" in moment) {
    moment = moment["default"];
}

import {
  GET_FLIGHTS,
  UPDATE_CITY_FILTER,
  UPDATE_DATE_FILTER
} from './constants/ActionTypes';

const initialState: IState = {
  flights: [],
  filteredFlights: [],
  loading: false,
  selectedCities: [],
  selectedDate: ''
};

export default handleActions<IState, Flight>({

  ["GET_FLIGHTS_PENDING"]: (state: IState, action: Action<Flight>): IState => {
    return {
      ...state,
      flights: state.flights,
      filteredFlights: state.flights,
      loading: true,
    }
  },

  ["GET_FLIGHTS_FULFILLED"]: (state: IState, action: Action<any>): IState => {
    return {
      ...state,
      flights: action.payload.data,
      filteredFlights: state.flights,
      loading: false
    }
  },

  [UPDATE_CITY_FILTER]: (state: IState, action: Action<any>): IState => {
    return {
      ...state,
      selectedCities: action.payload,
      filteredFlights: action.payload.length ? state.flights.filter((flight) =>{
        return action.payload.filter(city => {
          return city.value == flight.fromCity || city.value == flight.toCity
        }).length
      }) : state.flights
    }
  },

  [UPDATE_DATE_FILTER]: (state: IState, action: Action<any>): IState => {
    return {
      ...state,
      selectedDate: action.payload,
      filteredFlights: state.filteredFlights.filter((flight) =>{
        return moment(action.payload).isSameOrAfter(flight.departure);
      })
    }
  },

}, initialState);

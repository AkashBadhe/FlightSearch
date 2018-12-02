import { handleActions, Action } from 'redux-actions';

import { Flight, IState } from './model';
import {
  GET_FLIGHTS,
  UPDATE_CITY_FILTER
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
}, initialState);

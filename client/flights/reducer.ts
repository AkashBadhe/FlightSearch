import { handleActions, Action } from 'redux-actions';

import { Flight, IState } from './model';
import {
  ADD_FLIGHT,
  DELETE_FLIGHT,
  EDIT_FLIGHT,
  COMPLETE_FLIGHT,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from './constants/ActionTypes';

const initialState: IState = {
  flights: [],
  loading: false
};

export default handleActions<IState, Flight>({

  ["GET_FLIGHTS_PENDING"]: (state: IState, action: Action<Flight>): IState => {
    return {
      flights: state.flights,
      loading: true
    }
  },

  ["GET_FLIGHTS_FULFILLED"]: (state: IState, action: Action<any>): IState => {
    return {
      flights: action.payload.data,
      loading: false
    }
  },

  ["ADD_FLIGHT_PENDING"]: (state: IState, action: Action<Flight>): IState => {
    return {
      flights: state.flights,
      loading: true
    }
  },

  ["ADD_FLIGHT_FULFILLED"]: (state: IState, action: Action<Flight>): IState => {
    return {
      flights: [{
        id: state.flights.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: action.payload.completed,
        text: action.payload.text,
      }, ...state.flights],
      loading: false
    }
  },
  

  [DELETE_FLIGHT]: (state: IState, action: Action<Flight>): IState => {
    return {
      flights: state.flights.filter(todo =>
        todo.id !== action.payload.id
      ),
      loading: false
    };
  },

  [EDIT_FLIGHT]: (state: IState, action: Action<Flight>): IState => {
    return {
      flights: state.flights.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      )
    }
  },

  [COMPLETE_FLIGHT]: (state: IState, action: Action<Flight>): IState => {
    return {
      flights: state.flights.map(todo =>
        todo.id === action.payload.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )
    };
  },

  [COMPLETE_ALL]: (state: IState, action: Action<Flight>): IState => {
    const areAllMarked = state.flights.every(todo => todo.completed);
    return {
      flights: state.flights.map(todo => ({ ...todo,
        completed: !areAllMarked
      }))
    }
  },

  [CLEAR_COMPLETED]: (state: IState, action: Action<Flight>): IState => {
    return {
      flights: state.flights.filter(todo => todo.completed === false)
    }
  }
}, initialState);

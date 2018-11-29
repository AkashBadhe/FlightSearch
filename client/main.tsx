 import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, Store, createStore, compose } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import * as asyncInitialState from 'redux-async-initial-state';
import toDoApi from './flights/api/mockApi';
import Promise from "ts-promise";


import App from './main/components/App';
import rootReducer from './main/reducer';

const initialState = {};

const loadStore = (currentState) => {
  return new Promise(resolve => {
	toDoApi.getFlights().then((data)=>{
		resolve({...currentState, flights: {flights: data, loading: false}});
	});
  });
}

const store: Store<any> = createStore(rootReducer, 
	compose(applyMiddleware(asyncInitialState.middleware(loadStore), 
		thunkMiddleware,
  		promiseMiddleware(), 
  		logger
  	)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
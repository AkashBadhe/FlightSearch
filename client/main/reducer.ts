import { combineReducers } from 'redux';

import flights from '../flights';
import * as asyncInitialState from 'redux-async-initial-state';

const rootReducer = asyncInitialState.outerReducer(combineReducers({
  flights,
  asyncInitialState: asyncInitialState.innerReducer,
}));

export default rootReducer;

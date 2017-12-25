import { combineReducers } from 'redux';

import todos from '../todos';
import * as asyncInitialState from 'redux-async-initial-state';

const rootReducer = asyncInitialState.outerReducer(combineReducers({
  todos,
  asyncInitialState: asyncInitialState.innerReducer,
}));

export default rootReducer;

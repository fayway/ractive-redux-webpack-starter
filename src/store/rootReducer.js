import { combineReducers } from 'redux';
import counter from 'modules/counter/reducers';

export const rootReducer = combineReducers({
  counter,
});
import { combineReducers } from 'redux';
import counter from 'modules/counter/reducers';

export const appReducer = combineReducers({
  counter,
});

export const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

import store from 'store/appStore';
import { INCREMENT, DECREMENT } from './constants';

export const createIncrementAction = () => {
  store.dispatch({ type: INCREMENT});
};

export const createDecrementAction = () => {
  store.dispatch({ type: DECREMENT});
};
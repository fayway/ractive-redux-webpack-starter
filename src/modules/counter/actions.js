export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const createIncrementAction = () => {
  return { type: INCREMENT};
};

export const createDecrementAction = () => {
  return { type: DECREMENT};
};
import { INCREMENT, DECREMENT } from 'modules/counter/constants';
import { createIncrementAction, createDecrementAction } from 'modules/counter/actions';

describe('Counter Actions Creator', () => {
  describe('#createIncrementAction()', () => {
    it('should dispatch and action with type INCREMENT', () => {
      createIncrementAction();
      expect(store.dispatch.withArgs({ type: INCREMENT }).calledOnce).to.be.true;
    });
  });
  describe('#createDecrementAction()', () => {
    it('should dispatch and action with type DECREMENT', () => {
      createDecrementAction();
      expect(store.dispatch.withArgs({ type: DECREMENT }).calledOnce).to.be.true;
    });
  });
});

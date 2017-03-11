import { describe, beforeEach, afterEach, it } from 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';

import store from 'store/appStore';
import { createIncrementAction, createDecrementAction } from 'modules/counter/actions';
import { INCREMENT, DECREMENT } from 'modules/counter/constants';

describe('Counter', () => {
  beforeEach(() => {
    sinon.stub(store, 'dispatch');
  });
  afterEach(() => {
    store.dispatch.restore();
  });
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
import { describe, it } from 'mocha';
import { expect } from 'chai';

import { createIncrementAction, createDecrementAction } from './actions';
import { INCREMENT, DECREMENT } from './actions';

describe('Counter Actions', () => {
  describe('#createIncrementAction()', () => {
    it('should return an action with type INCREMENT', () => {
      expect(createIncrementAction().type).to.equal(INCREMENT);
    });
  });
  describe('#createDecrementAction()', () => {
    it('should return an action with type DECREMENT', () => {
      expect(createDecrementAction().type).to.equal(DECREMENT);
    });
  });
});
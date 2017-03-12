import { describe, beforeEach, afterEach, it } from 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import Ractive from 'ractive';

import CounterComponent from '../CounterComponent';
import * as actions from '../actions';


describe('Counter Component', () => {

  before(()=>{
    Ractive.DEBUG = false;
    this.container = document.createElement('div');
  });

  describe('A click on Increment button', () => {
    it('should call #createIncrementAction function', (done) => {
      sinon.spy(actions, 'createIncrementAction');
      new CounterComponent({
        el: this.container ,
        oncomplete() {
          const incButton = this.find('[role=inc]');
          incButton.click();
          expect(actions.createIncrementAction.calledOnce).to.be.true;
          actions.createIncrementAction.restore();
          done();
        }
      });
    });
  });

  describe('A click on Decrement button', () => {
    it('should call #createDecrementAction function', (done) => {
      sinon.spy(actions, 'createDecrementAction');
      new CounterComponent({
        el: this.container ,
        oncomplete() {
          const decButton = this.find('[role=dec]');
          decButton.click();
          expect(actions.createDecrementAction.calledOnce).to.be.true;
          actions.createDecrementAction.restore();
          done();
        }
      });
    });
  });

  describe('A click on Increment/Decrement buttons', () => {
    it('should update the value of the displayed count', (done) => {
      new CounterComponent({
        el: this.container ,
        oncomplete() {
          const incButton = this.find('[role=inc]');
          const decButton = this.find('[role=dec]');
          const count = this.find('[role=count]');
          //
          expect(count.textContent).to.equal('0');
          incButton.click();
          expect(count.textContent).to.equal('1');
          incButton.click();
          incButton.click();
          expect(count.textContent).to.equal('3');
          decButton.click();
          expect(count.textContent).to.equal('2');
          decButton.click();
          decButton.click();
          expect(count.textContent).to.equal('0');
          decButton.click();
          expect(count.textContent).to.equal('-1');
          done();
        }
      });
    });
  });

});
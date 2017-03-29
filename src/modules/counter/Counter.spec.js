import {describe, it, before, after, beforeEach, afterEach} from 'mocha';
import {expect} from 'chai';
import sinon from 'sinon';
import Ractive from 'ractive';

import store from 'store/appStore';
import CounterComponent from './Counter';
import {createIncrementAction, createDecrementAction} from './actions';

describe('Counter Component', () => {

  before(() => {
    Ractive.DEBUG = false;
    Ractive.components.NodeRoute = Ractive.extend({template: '{{yield}}'});

    this.container = document.createElement('div');
  });

  after(() => {
    this.container.remove();
  });

  describe('Clicks/Actions Bindings', () => {

    beforeEach(() => {
      sinon.stub(store, 'dispatch');
    });

    afterEach(() => {
      store.dispatch.restore();
    });

    describe('A click on Increment button', () => {
      it('should dispatch createIncrementAction', (done) => {
        new CounterComponent({
          el: this.container,
          data(){
            return {
              active: true,
            };
          },
          oncomplete() {
            const incButton = this.find('[role=inc]');
            incButton.click();
            expect(store.dispatch.withArgs(createIncrementAction()).calledOnce).to.be.true;
            done();
          }
        });
      });
    });

    describe('A click on Decrement button', () => {
      it('should dispatch createDecrementAction', (done) => {
        new CounterComponent({
          el: this.container,
          data(){
            return {
              active: true,
            };
          },
          oncomplete() {
            const decButton = this.find('[role=dec]');
            decButton.click();
            expect(store.dispatch.withArgs(createDecrementAction()).calledOnce).to.be.true;
            done();
          }
        });
      });
    });
  });

  describe('Displayed Count value', () => {
    it('should be updated according to Inc/Dec clicks', (done) => {
      new CounterComponent({
        el: this.container,
        data(){
          return {
            active: true,
          };
        },
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
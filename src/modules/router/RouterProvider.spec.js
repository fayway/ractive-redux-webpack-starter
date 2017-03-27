import {describe, it, before, after, beforeEach, afterEach} from 'mocha';
import {expect} from 'chai';
import sinon from 'sinon';
import Ractive from 'ractive';

import RouterProvider from './RouterProvider';

describe('RouterProvider', () => {

  before(() => {
    Ractive.DEBUG = false;

    this.fakeRouter = {
      callbacks: [],
      addListener(callback){
        this.callbacks.push(callback);
      },
      removeListener(callback){
        this.callbacks = this.callbacks.filter(cb => cb !== callback);
      },
      start(){
      },
      notify() {
        this.callbacks.map(cb => cb());
      }
    };

    this.container = document.createElement('div');
  });

  after(() => {
    this.container.remove();
  });

  beforeEach(() => {
    sinon.spy(this.fakeRouter, 'addListener');
    sinon.spy(this.fakeRouter, 'removeListener');
    sinon.spy(this.fakeRouter, 'start');
  });

  afterEach(() => {
    this.fakeRouter.addListener.restore();
    this.fakeRouter.removeListener.restore();
    this.fakeRouter.start.restore();
  });

  it('should listen to route change and start the router', (done) => {
    new Ractive({
      el: this.container,
      components: {
        RouterProvider
      },
      data: {
        router: this.fakeRouter
      },
      template: `<RouterProvider router={{router}}></RouterProvider>`,
      oncomplete: () => {
        expect(this.fakeRouter.addListener.calledOnce).to.be.true;
        expect(this.fakeRouter.start.calledOnce).to.be.true;
        done();
      }
    })
  });

  it('should remove the added listener during teardown', (done) => {
    new Ractive({
      el: this.container,
      template: `<div></div>`,
      oncomplete: () => {
        expect(this.fakeRouter.removeListener.calledOnce).to.be.true;
        done();
      }
    })
  });

});
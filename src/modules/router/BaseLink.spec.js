import {describe, it, before, after, beforeEach, afterEach} from 'mocha';
import {expect} from 'chai';
import Ractive from 'ractive';
import sinon from 'sinon';
import RouterProvider from './RouterProvider';

import BaseLink from './BaseLink';
Ractive.DEBUG = false;

describe('BaseLink', () => {

  let container, fakeRouter;

  before(() => {
    container = document.createElement('div');
    fakeRouter = {
      callbacks: [],
      buildPath() {
        return '/path/to/home';
      },
      isActive() {},
      addListener(callback){
        this.callbacks.push(callback);
      },
      removeListener(callback){
        this.callbacks = this.callbacks.filter(cb => cb !== callback);
      },
      notify(state) {
        this.callbacks.map(cb => cb(state));
      },
      start() {
      }
    };
  });

  after(() => {
    container.remove();
  });

  beforeEach(() => {
    sinon.spy(fakeRouter, 'buildPath');
    sinon.spy(fakeRouter, 'addListener');
    sinon.spy(fakeRouter, 'removeListener');
  });

  afterEach(() => {
    fakeRouter.buildPath.restore();
    fakeRouter.addListener.restore();
    fakeRouter.removeListener.restore();
  });

  it('should render a valid active anchor tag with the right href and class', (done) => {
    sinon.stub(fakeRouter, 'isActive').returns(true);
    new Ractive({
      el: container,
      data: {
        router: fakeRouter
      },
      components: {
        RouterProvider,
        BaseLink
      },
      template: `
        <RouterProvider router="{{router}}">
          <BaseLink routeName="home" className="bob" activeClassName="highlight">Home</BaseLink>
        </RouterProvider>`,
      oninit(){
        fakeRouter.start();
      },
      oncomplete(){
        try {
          const link = this.find('a');

          //Assert path and initial class
          expect(fakeRouter.buildPath.withArgs('home').calledOnce).to.be.true;
          expect(link.href).to.equal('/#/path/to/home');
          expect(link.getAttribute('class')).to.equal('bob');
          //Fake navigation to 'home'
          expect(fakeRouter.addListener.called).to.be.true;
          fakeRouter.notify({name: 'home'});
          //Assert router.isActive was called
          expect(fakeRouter.isActive.withArgs('home').calledOnce).to.be.true;
          //Assert link class contains the activeClassName
          expect(link.getAttribute('class')).to.contains('bob');
          expect(link.getAttribute('class')).to.contains('highlight');

          done();
        } catch (e) {
          done(e);
        } finally {
          fakeRouter.isActive.restore();
        }
      }
    });

  });

  it('should render a valid inactive anchor tag with the right href and class', (done) => {
    sinon.stub(fakeRouter, 'isActive').returns(false);
    new Ractive({
      el: container,
      data: {
        router: fakeRouter
      },
      components: {
        RouterProvider,
        BaseLink
      },
      template: `
        <RouterProvider router="{{router}}">
          <BaseLink routeName="home">Home</BaseLink>
        </RouterProvider>`,
      oncomplete(){
        try {
          const link = this.find('a');
          //Assert path and initial class
          expect(fakeRouter.buildPath.withArgs('home').calledOnce).to.be.true;
          expect(link.href).to.equal('/#/path/to/home');
          expect(link.getAttribute('class')).to.be.null;
          //Fake navigation to 'home'
          expect(fakeRouter.addListener.called).to.be.true;
          fakeRouter.notify({name: 'about'});
          //Assert router.isActive was called
          expect(fakeRouter.isActive.withArgs('home').calledOnce).to.be.true;
          //Assert link class contains the activeClassName
          expect(link.getAttribute('class')).to.be.null;
          done();
        } catch (e) {
          done(e);
        } finally {
          fakeRouter.isActive.restore();
        }
      }
    });

  });

  it('should remove route change listener when teared down', (done) => {
    new Ractive({
      el: container,
      template: '',
      oncomplete(){
        try {
          expect(fakeRouter.removeListener.called).to.be.true;
          done();
        } catch (e) {
          done(e)
        }
      }
    });
  });

  it('should throw an error if not placed inside a RouterProvider Component', (done) => {
    try {
      new Ractive({
        el: container,
        components: {
          BaseLink
        },
        template: `
          <div>
            <BaseLink routeName="home" className="bob" activeClassName="highlight">Home</BaseLink>
          </div>`,
      });
    } catch (e) {
      done();
    }
  });

});
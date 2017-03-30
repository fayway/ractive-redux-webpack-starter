import {describe, it, before, after, beforeEach, afterEach} from 'mocha';
import {expect} from 'chai';
import Ractive from 'ractive';

import NodeRoute from './NodeRoute';

describe('NodeRoute', () => {

  before(() => {
    Ractive.DEBUG = false;
    this.container = document.createElement('div');
  });

  after(() => {
    this.container.remove();
  });

  it('should by default not display its content', (done) => {
    new Ractive({
      el: this.container,
      components: {
        NodeRoute
      },
      template: `<NodeRoute><div id="content"></div></NodeRoute>`,
      oncomplete(){
        expect(this.find('#content')).to.be.undefined;
        done();
      }
    })
  });

  it('should display its content only if route matches the routeName param', (done) => {
    new Ractive({
      el: this.container,
      components: {
        NodeRoute
      },
      template: `<NodeRoute routeNode="home"><div id="content"></div></NodeRoute>`,
      oncomplete(){
        expect(this.find('#content')).to.be.undefined;
        //
        this.set('route', {name: 'bob'});
        expect(this.find('#content')).to.be.undefined;
        //
        this.set('route', {name: 'home'});
        expect(this.find('#content')).to.be.ok;
        done();
      }
    })
  });
});
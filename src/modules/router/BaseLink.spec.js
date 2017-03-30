import {describe, it, before, after, beforeEach, afterEach} from 'mocha';
import {expect} from 'chai';
import Ractive from 'ractive';
import createRouter from './createRouter';
import RouterProvider from './RouterProvider';

import BaseLink from './BaseLink';

describe('BaseLink', () => {

  before(() => {
    Ractive.DEBUG = false;
    this.container = document.createElement('div');
    this.router = createRouter([{name: 'home', path: '/welcome', default: true}], true);
  });

  after(() => {
    this.container.remove();
  });

  it('should render a valid anchor tag with the right href and class', (done) => {
    new Ractive({
      el: this.container,
      data: {
        router: this.router
      },
      components: {
        RouterProvider,
        BaseLink
      },
      template: `
        <RouterProvider router="{{router}}">
          <BaseLink routeName="home" linkClassName="bob">Home</BaseLink>
        </RouterProvider>`,
      oninit(){
      },
      oncomplete(){
        //this.get('router').navigate('home');
        //console.log('HTML', this.toHTML());
        //this.get('router').navigate('home');
        let link = this.find('a');
        //console.log('LINK', link.href);
        expect(link.href).to.equal('/#/welcome');
        done();
      }
    });

  });
});
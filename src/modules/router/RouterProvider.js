import Ractive from 'ractive';

import createRouter from './createRouter';
import './NodeRoute';

export default Ractive.extend({
  data() {
    return {
      route: null
    };
  },
  template: `
      {{>content}}
  `,
  oninit() {
    console.log('RouterProvider Init');

    this.router = createRouter(this.get('routes'), 'home', true);

    this.router.addListener((toState) => {
      this.set('route', toState);
    });
  },
  oncomplete(){
    console.log('RouterProvider Complete');

    this.router.start();
  }
});
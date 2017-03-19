import Ractive from 'ractive';

import createRouter from './createRouter';

import CounterComponent from 'modules/counter/Counter';
import AboutComponent from 'modules/about/About';

export default Ractive.extend({
  components: {
    CounterComponent,
    AboutComponent
  },
  data() {
    return {
      route: null
    };
  },
  template: `
      <CounterComponent routeNode="home" route="{{route}}"></CounterComponent>
      <AboutComponent routeNode="about" route="{{route}}"></AboutComponent>
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
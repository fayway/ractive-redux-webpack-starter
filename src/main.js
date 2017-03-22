import Ractive from 'ractive';
import RouterProvider from 'modules/router/RouterProvider';
import Menu from 'modules/router/Menu';
import CounterComponent from 'modules/counter/Counter';
import AboutComponent from 'modules/about/About';

import routes from './routes';

import 'hack/dist/hack.css';
import 'hack/dist/dark.css';

Ractive.DEBUG = __IS_DEV__;

new Ractive({
  el: '#root',
  components: {
    RouterProvider,
    Menu,
    CounterComponent,
    AboutComponent
  },
  data() {
    return {
      routes
    };
  },
  template: `
    <div class="main container">
      <h1>Ractive Redux Sandbox</h1>
      <Menu></Menu>
      <RouterProvider routes="{{routes}}">
        <CounterComponent routeNode="home"></CounterComponent>
        <AboutComponent routeNode="about"></AboutComponent>
      </RouterProvider>
    </div>
  `,
});
import Ractive from 'ractive';
import RouterProvider from 'modules/router/RouterProvider';
import Menu from 'modules/menu/Menu';
import CounterComponent from 'modules/counter/Counter';
import AboutComponent from 'modules/about/About';

import routes from './routes';
import createRouter from 'modules/router/createRouter';

export default Ractive.extend({
  components: {
    RouterProvider,
    Menu,
    CounterComponent,
    AboutComponent
  },
  data() {
    return {
      router: createRouter(routes, true)
    };
  },
  template: `
    <div class="main container">
      <h1>Ractive Redux Sandbox</h1>
      <RouterProvider router="{{router}}">
        <Menu></Menu>
        <CounterComponent routeNode="home"></CounterComponent>
        <AboutComponent routeNode="about"></AboutComponent>
      </RouterProvider>
    </div>
  `,
});
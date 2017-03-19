import Ractive from 'ractive';
import RouterProvider from 'modules/router/RouterProvider';
import Menu from 'modules/router/Menu';

import routes from './routes';

import 'hack/dist/hack.css';
import 'hack/dist/dark.css';

Ractive.DEBUG = __IS_DEV__;

new Ractive({
  el: '#root',
  components: {
    RouterProvider,
    Menu
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
      <RouterProvider routes="{{routes}}"></RouterProvider>
    </div>
  `,
});
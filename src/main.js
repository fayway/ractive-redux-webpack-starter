import Ractive from 'ractive';
import CounterComponent from 'modules/counter/CounterComponent';

import 'hack/dist/hack.css';
import 'hack/dist/dark.css';

new Ractive({
  el: '#root',
  components: {
    CounterComponent,
  },
  template: `
    <div class="main container">
      <h1>Ractive Redux Sandbox</h1>
      <CounterComponent></CounterComponent>
    </div>
  `,
});
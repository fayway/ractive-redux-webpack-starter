import Ractive from 'ractive';
import store from 'store/appStore';
import {createIncrementAction, createDecrementAction} from './actions';

export default Ractive.extend({
  template: `
    {{#if active}}
    <div class="card">
      <header class="card-header">Counter Module</header>
      <div class="card-content">
        <div class="inner">
            <h4>Count: <span role="count">{{count}}</span></h4>
            <button on-click="@this.inc()" role="inc" class="btn btn-success">Increment</button>
            <button on-click="@this.dec()" role="dec" class="btn btn-error">Decrement</button>
        </div>
      </div>
    </div>
    {{/if}}
    `,
  data(){
    return {
      active: false,
      count: 0
    };
  },
  oninit() {
    console.log('Counter Init');

    this.observe('route', (route) => {
      this.set('active', route && route.name.indexOf(this.get('routeNode')) === 0);
    });

    this.storeUnsbscribe = store.subscribe(() => {
      this.set('count', store.getState().counter);
    });
  },
  inc(){
    store.dispatch(createIncrementAction());
  },
  dec(){
    store.dispatch(createDecrementAction());
  },
  oncomplete() {
    console.log('Counter Complete');
  },
  onteardown() {
    this.storeUnsbscribe();
  },
});
import Ractive from 'ractive';
import store from 'store/appStore';
import {createIncrementAction, createDecrementAction} from './actions';

export default Ractive.extend({
  template: `
    <NodeRoute>
      <div class="card">
        <header class="card-header">Home (Counter Module)</header>
        <div class="card-content">
          <div class="inner">
              <h4>Count: <span role="count">{{count}}</span></h4>
              <button on-click="@this.inc()" role="inc" class="btn btn-success">Increment</button>
              <button on-click="@this.dec()" role="dec" class="btn btn-error">Decrement</button>
          </div>
        </div>
      </div>
    </NodeRoute>
    `,
  data(){
    return {
      active: false,
      count: 0
    };
  },
  oninit() {
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
  onteardown() {
    this.storeUnsbscribe();
  },
});
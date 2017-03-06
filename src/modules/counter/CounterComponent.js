import Ractive from 'ractive';
import store from 'store/appStore';
import { createIncrementAction, createDecrementAction } from './actions';

export default Ractive.extend({
  template: `
    <div class="card">
      <header class="card-header">Counter Module</header>
      <div class="card-content">
        <div class="inner">
            <h4>Count: {{count}}</h4>
            <button on-click="@this.inc()" class="btn btn-success">Increment</button>
            <button on-click="@this.dec()" class="btn btn-error">Decrement</button>
        </div>
      </div>
    </div>
    `,
  data(){
    return {
      count: 0
    };
  },
  oninit() {
    this.storeUnsbscribe = store.subscribe(()=>{
      this.set('count', store.getState().counter);
    });
  },
  inc(){
    createIncrementAction();
  },
  dec(){
    createDecrementAction();
  },
  onteardown() {
    this.storeUnsbscribe();
  },
});
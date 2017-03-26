import Ractive from 'ractive';
import BaseLink from './BaseLink';
import NodeRoute from './NodeRoute';

Ractive.components.BaseLink = BaseLink;
Ractive.components.NodeRoute = NodeRoute;

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
    this.router = this.get('router');

    this.mapRouteStateToData = (toState) => {
      this.set('route', toState);
    };

    this.router.addListener(this.mapRouteStateToData);
  },
  oncomplete(){
    this.router.start();
  },
  onteardown() {
    this.router.removeListener(this.mapRouteStateToData);
  }
});
import Ractive from 'ractive';

const NodeRoute = Ractive.extend({
  template: `
    {{#if active}}
      {{>content}}
    {{/if}}
  `,
  data(){
    return {
      active: false
    };
  },
  oninit() {
    console.log('NodeRoute Init');

    this.observe('route', (route) => {
      this.set('active', route && route.name.indexOf(this.get('routeNode')) === 0);
    });
  },
  oncomplete() {
    console.log('NodeRoute Complete');

  }
});

Ractive.components.NodeRoute = NodeRoute;

export default NodeRoute;
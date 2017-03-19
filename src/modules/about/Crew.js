import Ractive from 'ractive';

export default Ractive.extend({
  template: `
    {{#if active}}
      <div class="inner">
          <div class="alert alert-info">The Crew</div>
      </div>
    {{/if}}
  `,
  data(){
    return {
      active: false
    };
  },
  oninit() {
    console.log('About Crew Init');

    this.observe('route', (route) => {
      this.set('active', route && route.name.indexOf(this.get('routeNode')) === 0);
    });
  },
  oncomplete() {
    console.log('About Crew Complete');

  }
});
import Ractive from 'ractive';

import Crew from './Crew';
import Contact from './Contact';

export default Ractive.extend({
  components: {
    Crew,
    Contact
  },
  template: `
    {{#if active}}  
      <div class="card">
        <header class="card-header">About</header>
        <div class="card-content">
          <div class="inner">
              <h2>About Page</h2>
          </div>
        </div>
        <div>
            <Crew routeNode="about.crew" route="{{route}}"></Crew>
            <Contact routeNode="about.contact" route="{{route}}"></Contact>
        </div>
      </div>
    {{/if}}
  `,
  data(){
    return {
      active: false
    };
  },
  oninit() {
    console.log('About Init');

    this.observe('route', (route) => {
      this.set('active', route && route.name.indexOf(this.get('routeNode')) === 0);
    });
  },
  oncomplete() {
    console.log('About Complete');

  }
});
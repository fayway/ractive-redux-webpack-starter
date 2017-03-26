import Ractive from 'ractive';

import Crew from './Crew';
import Contact from './Contact';

export default Ractive.extend({
  components: {
    Crew,
    Contact
  },
  template: `
    <NodeRoute>
      <div class="card">
        <header class="card-header">About</header>
        <div class="card-content">
          <div class="inner">
              <h2>About Page</h2>
          </div>
        </div>
        <div>
            <Crew routeNode="about.crew"></Crew>
            <Contact routeNode="about.contact"></Contact>
        </div>
      </div>
    </NodeRoute>
  `
});
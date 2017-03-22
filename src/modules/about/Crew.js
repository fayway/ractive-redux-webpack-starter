import Ractive from 'ractive';

export default Ractive.extend({
  template: `
    <NodeRoute>
      <div class="inner">
          <div class="alert alert-info">The Crew</div>
      </div>
    </NodeRoute>
  `,
  oninit() {
    console.log('About Crew Init');

  },
  oncomplete() {
    console.log('About Crew Complete');

  }
});
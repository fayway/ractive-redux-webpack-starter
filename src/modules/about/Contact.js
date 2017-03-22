import Ractive from 'ractive';

export default Ractive.extend({
  template: `
    <NodeRoute>
      <div class="inner">
          <div class="alert alert-success">Contact - {{name}}</div>
          <form class="form">
            <fieldset class="form-group">
              <label for="username">USERNAME:</label>
              <input id="username" type="text" placeholder="type your name..." value="{{name}}" class="form-control">
            </fieldset>
            <fieldset class="form-group form-textarea">
              <label for="message">MESSAGE:</label>
              <textarea id="message" rows="5" class="form-control">{{message}}</textarea>
            </fieldset>
            <div class="form-actions">
              <button type="button" class="btn btn-primary btn-block">Submit</button>
            </div>
          </form>
      </div>
    </NodeRoute>
  `,
  data(){
    return {
      name: 'Rich Harris',
      message: 'The Guardian of the DOM'
    };
  },
  oninit() {
    console.log('About Contact Init');

  },
  oncomplete() {
    console.log('About Contact Complete');

  }
});

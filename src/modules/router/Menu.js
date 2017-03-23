import Ractive from 'ractive';

const Link = Ractive.extend({
  template: `
    <a href="{{path}}" on-click="clickHandler(event)" class="{{classNames}}">
        {{>content}}
    </a>
  `,
  oninit() {
    this.router = this.findParent('RouterProvider').router;

    this.set('path', this.router.buildPath(this.get('routeName'), this.get('routeParams')));
  },
  clickHandler() {

  }
})

export default Ractive.extend({
  components: {
    Link
  },
  template: `
    <ul>
        <li><a href="/#/">Home</a></li>
        <li><a href="/#/about">About</a></li>
        <li><a href="/#/about/crew">About - Crew</a></li>
        <li><a href="/#/about/contact">About - Contact</a></li>
        <!--<li><Link routeName="about" /></li>-->
    </ul>
  `
});

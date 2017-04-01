import Ractive from 'ractive';

export default Ractive.extend({
  template: `
    <a href="{{path}}" class="{{linkClassName}}">
        {{>content}}
    </a>
  `,
  data() {
    return {
      activeClassName: 'active',
      strictEquality: true,
      ignoreQueryParams: true
    };
  },
  getRouter() {
    const routerProvider = this.findParent('RouterProvider');
    if (!routerProvider) {
      throw new Error('BaseLink Component must be placed with a RouterProvider Component');
    }
    return routerProvider.get('router');
  },
  oninit() {
    this.router = this.getRouter();

    const path = this.router.buildPath(this.get('routeName'), this.get('routeParams'));
    this.set('path', `/#${path}`);

    this.isActive = () => {
      const isActive = this.router.isActive(this.get('routeName'), this.get('routeParams'), this.get('strictEquality'), this.get('ignoreQueryParams'));
      const ClassNameArray = this.get('className') ? this.get('className').split(' ') : [];
      const linkClassName = ClassNameArray.concat(isActive ? [this.get('activeClassName')] : []).join(' ');
      this.set('linkClassName', linkClassName);
    };

    this.set('linkClassName', this.get('className'));
    this.router.addListener(this.isActive);
  },
  onteardown() {
    this.router.removeListener(this.isActive);
  }
});

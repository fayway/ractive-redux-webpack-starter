import Ractive from 'ractive';

export default Ractive.extend({
  template: `
    <ul>
        <li><a href="/#/">Home</a></li>
        <li><a href="/#/about">About</a></li>
        <li><a href="/#/about/crew">About - Crew</a></li>
        <li><a href="/#/about/contact">About - Contact</a></li>
    </ul>
  `,
});

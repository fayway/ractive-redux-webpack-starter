import Ractive from 'ractive';

export default Ractive.extend({
  css: `
    ul {
        list-style-type: none;
    }
    ul li {
      display: inline;
      padding: 0 0.5em;
    }
    ul li:after {
        content: '';
    }
    ul li a.active {
      background-color: #ffffff;
      color: #ff2e88;
      padding: 2px
    }
  `,
  template: `
    <ul class="menu">
        <li><BaseLink routeName="home">Home</BaseLink></li>
        <li><BaseLink routeName="about">About</BaseLink></li>
        <li><BaseLink routeName="about.crew" >About - Crew</BaseLink></li>
        <li><BaseLink routeName="about.contact">About - Contact</BaseLink></li>
    </ul>
  `
});

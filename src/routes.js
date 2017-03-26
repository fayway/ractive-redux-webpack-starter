export default [
  {
    name: 'home',
    path: '/',
    default: true
  },
  {
    name: 'about',
    path: '/about',
    children: [
      {
        name: 'crew',
        path: '/crew'},
      {
        name: 'contact',
        path: '/contact'
      }
    ]
  }
];

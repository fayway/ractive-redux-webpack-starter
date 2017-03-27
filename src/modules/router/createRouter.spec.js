import { describe, it } from 'mocha';
import { expect } from 'chai';

import createRouter from './createRouter';

const routes =  [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'about',
    path: '/about',
    default: true
  }
];

describe('createRouter', () => {
  it('should create a router with the right options and plugins', () => {
    const router = createRouter(routes, true, true);
    expect(router.getOptions().defaultRoute).to.equal('about');
    expect(router.hasPlugin('LISTENERS_PLUGIN')).to.be.true;
    expect(router.hasPlugin('BROWSER_PLUGIN')).to.be.true;
    expect(router.hasPlugin('LOGGER_PLUGIN')).to.be.true;
  });
});
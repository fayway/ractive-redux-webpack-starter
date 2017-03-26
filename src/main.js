import Ractive from 'ractive';
import App from './app';

import 'hack/dist/hack.css';
import 'hack/dist/dark.css';

Ractive.DEBUG = __IS_DEV__;

new App({
  el: '#root',
});
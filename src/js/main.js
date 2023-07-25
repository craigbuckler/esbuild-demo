import * as dom from './lib/dom.js';
import { formatHMS } from './lib/time.js';

// get clock element
const clock = dom.getAll('.clock');

if (clock.length) {

  console.log('initializing clock');

  setInterval(() => {

    clock.forEach(c => c.textContent = formatHMS());

  }, 1000);

}

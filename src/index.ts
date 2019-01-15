import { join } from 'lodash-es';
import './index.css';
import { environment } from './env/env';

declare const WEBPACK_ENV;

console.log('environment', environment);

document.body.appendChild((() => {
  const element = document.createElement('div');
  element.className = 'wb-title';

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = join(['It', 'works!'], ' ');
  return element;
})());

// console.log('WEBPACK_ENV', WEBPACK_ENV);
// console.log('process.env.NODE_ENV', process.env.NODE_ENV);

if (WEBPACK_ENV.DEBUG) {
  document.body.appendChild((() => {
    const element = document.createElement('p');
    element.innerHTML = 'Debugging enabled';
    return element;
  })());
}

document.body.appendChild((() => {
  const element = document.createElement('p');
  element.innerHTML = `Mode is ${WEBPACK_ENV.MODE}`;
  return element;
})());

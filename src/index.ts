/// <reference path="./types/globals.d.ts" />

import './app.scss';
import { join } from 'lodash-es';
import * as $ from 'jquery';
import { environment } from './env/env';

console.log('environment', environment);

(() => {
  const title = join(['It', 'works!'], ' ');
  const $block = $(`
    <header class="p-4">
      <div class="wb-title">${title}</div>
      <button class="btn btn-block btn-lg btn-primary">Bootstrap Button</button>
    </header>
  `);
  $('body').append($block);
})();

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

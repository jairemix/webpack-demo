/// <reference path="./types/globals.d.ts" />

import './app.scss';
import blueSquare from './images/blue-square.jpg';
import { join } from 'lodash-es';
import * as $ from 'jquery';
import { environment } from './env/env';

console.log('environment', environment);

(() => {
  const $wrap = $(`<div class="p-4 wb-wrap"></div>`);
  $('body').append($wrap);
})();

(() => {
  const title = join(['It', 'works!'], ' ');
  const $block = $(`
    <header>
      <div class="wb-title">${title}</div>
      <button class="btn btn-block btn-lg btn-primary">Bootstrap Button</button>
      <h4>This is an imported image</h4>
      <img src="${blueSquare}" />
      <h4>This is an imported css image</h4>
      <div class="wb-pink-square"></div>
    </header>
  `);
  $('body .wb-wrap').append($block);
})();

// console.log('WEBPACK_ENV', WEBPACK_ENV);
// console.log('process.env.NODE_ENV', process.env.NODE_ENV);

if (WEBPACK_ENV.DEBUG) {
  (() => {
    const $p = $(`<small class="d-block">Debugging enabled</small>`);
    $('body .wb-wrap').append($p);
  })();
}

(() => {
  const $p = $(`<small class="d-block">Mode is ${WEBPACK_ENV.MODE}</small>`);
  $('body .wb-wrap').append($p);
})();

/// <reference path="./types/globals.d.ts" />

import './app.scss';
import blueSquare from './images/blue-square.jpg';
import { join } from 'lodash-es';
import * as $ from 'jquery';
import { environment } from './env/env';
import LANG from './language/en.json';

console.log('environment', environment);

(() => {
  const $wrap = $(`<div class="p-4 wb-wrap"></div>`);
  $('body').append($wrap);
})();

(() => {
  const title = join(['It', 'works!'], ' ');
  const $block = $(`
    <header class="my-3">
      <div class="wb-title">${title}</div>
    </header>
  `);
  $('body .wb-wrap').append($block);
})();


(() => {
  const $sections = $(`
    <section class="my-3">
      <button class="btn btn-block btn-lg btn-primary">Bootstrap Button</button>
    </section>
    <section class="my-3">
      <button class="btn btn-secondary btn-sm">${LANG.LOG_IN} from JSON</button>
    </section>
    <section class="my-3">
      <h4>This is an imported image</h4>
      <img src="${blueSquare}" />
    </section>
    <section class="my-3">
      <h4>This is an imported css image</h4>
      <div class="wb-pink-square"></div>
    </section>
  `);
  $('body .wb-wrap').append($sections);
})();

(() => {
  const $section = $(`<section class="my-3"></section>`);
  $section.append($(`<small class="d-block">Mode is ${WEBPACK_ENV.MODE}</small>`));

  if (WEBPACK_ENV.DEBUG) {
    $section.append($(`<small class="d-block">Debugging enabled</small>`));
  }

  $('body .wb-wrap').append($section);
})();

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

const $bodyWrap = $('body .wb-wrap');

(() => {
  const $block = $(`
    <header class="my-4">
      <div class="wb-title">Webpack Demo</div>
    </header>
  `);
  $bodyWrap.append($block);
})();

(() => {
  class TextFormatter {
    constructor (private text: string) {}
    capitalize() {
      const words = this.text.split(' ');
      const capitalizedWords = words.map((w) => w.charAt(0).toUpperCase() + w.slice(1));
      return capitalizedWords.join(' ');
    }
  }
  const $section = $(`
    <section class="my-4">
      <h4>This is generated with Typescript-only features</h4>
      <p>${new TextFormatter('typescript is great.').capitalize()}</p>
    </section>
  `);
  $bodyWrap.append($section);
})();

(() => {
  const $sections = $(`
    <section class="my-4">
      <h4>This is some text generated with a lodash tree-shaken import</h4>
      <p>${join(['Lodash', 'Rules!'], ' ')}</p>
    </section>
    <section class="my-4">
      <h4>This is a button styled with imported SCSS</h4>
      <button class="btn btn-block btn-lg btn-primary">Bootstrap Button</button>
    </section>
    <section class="my-4">
      <h4>This is some text imported from JSON</h4>
      <button class="btn btn-secondary btn-sm">${LANG.LOG_IN}</button>
    </section>
    <section class="my-4">
      <h4>This is an imported image</h4>
      <img src="${blueSquare}" />
    </section>
    <section class="my-4">
      <h4>This is an image imported with CSS</h4>
      <div class="wb-pink-square"></div>
    </section>
  `);
  $bodyWrap.append($sections);
})();

(() => {
  const $section = $(`<section class="my-3"></section>`);
  $section.append($(`<small class="d-block">Mode is ${WEBPACK_ENV.MODE}</small>`));

  if (WEBPACK_ENV.DEBUG) {
    $section.append($(`<small class="d-block">Debugging enabled</small>`));
  }

  $bodyWrap.append($section);
})();

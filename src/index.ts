/// <reference path="./types/globals.d.ts" />

import './polyfills';
import './app.scss';
import blueSquareImg from './images/blue-square.jpg';
import catSvg from '@fortawesome/fontawesome-free/svgs/solid/cat.svg';

import { join } from 'lodash-es';
import * as $ from 'jquery';
import { environment } from './env/env';
import LANG from './language/en.json';
import { identity } from './shared';
import { cardComponent } from './templates/card';
import './ng1.x-templates/component.template.html';

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
      <p>${identity(join(['Lodash', 'Rules!'], ' '))}</p>
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
      <img class="wb-image" src="${blueSquareImg}" />
    </section>
    <section class="my-4">
      <h4>This is an image imported with CSS</h4>
      <div class="wb-pink-square"></div>
    </section>
    <section class="my-4">
      <h4>This is a CSS-based Font Awesome icon</h4>
      <span class="fas fa-star"></span>
    </section>
    <section class="my-4">
      <h4>This is an SVG Font Awesome icon</h4>
      <img class="wb-image" src="${catSvg}" />
    </section>
    <section class="my-4">
      <h4>This is an imported font</h4>
      <p class="wb-reanie-beanie">
        Reanie Beanie sourced from
        <a href="https://fonts.google.com/specimen/Reenie+Beanie?selection.family=Reenie+Beanie" target="_blank">
          Google Fonts
        </a>
      </p>
    </section>
    <section class="my-4">
      <h4>This is HTML imported as a string</h4>
      ${cardComponent}
    </section>
  `);
  $bodyWrap.append($sections);
})();

(() => {
  const $button = $(`<button class="btn btn-info">Lazy Load Module!</button>`);
  const $section = $(`
    <section class="my-4">
      <h4>This is will lazy load a module</h4>
    </section>
  `);
  $section.append($button);
  $bodyWrap.append($section);
  const onClick = async () => {
    const { getSomeText } = await import('./split1/split1');
    $button[0].innerText = getSomeText();
  };
  $button.on('click', onClick);
})();

(() => {
  const $section = $(`<section class="my-3 text-muted"></section>`);
  $section.append($(`<small class="d-block">Mode is ${WEBPACK_ENV.MODE}</small>`));

  if (WEBPACK_ENV.DEBUG) {
    $section.append($(`<small class="d-block">Debugging is enabled</small>`));
  }

  $section.append($(`<small class="d-block ">Backend endpoint is ${environment.backendEndpoint}</small>`));

  $bodyWrap.append($section);
})();

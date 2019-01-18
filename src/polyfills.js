import { Promise } from 'es6-promise';
// can also use core-js polyfills

if (!Promise) {
  window.Promise = Promise;
}

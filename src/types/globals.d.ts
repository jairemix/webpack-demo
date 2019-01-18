// /// <reference path="./library.d.ts" />

// fix for webpack environment variables
declare const WEBPACK_ENV: {
  DEBUG: boolean;
  MODE: 'production' | 'development';
};

// fix for webpack image imports
declare module '*.json';
declare module '*.svg';
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';

// fix for webpack font imports
declare module '*.woff';
declare module '*.woff2';
declare module '*.eot';
declare module '*.ttf';
declare module '*.otf';

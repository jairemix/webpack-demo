import { Dictionary } from 'lodash';

export class ScriptLoader {

  // record of all loaded scripts
  private readonly _loaded: Dictionary<boolean> = {};
  // promises of all pending scripts
  private readonly _pending: Dictionary<Promise<boolean>> = {};

  constructor() {}

  /**
   * load JS file dynamically with caching
   * @param url
   * @param refresh
   * @return Promise that resolves to true if the script has just loaded, false if it was already cached
   */
  // can also use this in the future: this.$q.resolve(import(url)) - currently only supported by Chrome
  loadJS(url: string, refresh?: boolean): Promise<boolean> {
    if (!refresh) {
      if (this._pending[url]) {
        return this._pending[url];
      } else if (this._loaded[url]) {
        return Promise.resolve(false);
      }
    }

    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', url);
    script.setAttribute('async', '');
    document.head.appendChild(script);

    return this._pending[url] = this._getLoadPromise(script)
      .then(() => {
        delete this._pending[url];
        this._loaded[url] = true;
        return true;
      })
      .catch((e) => {
        delete this._pending[url];
        return Promise.reject(e);
      });
  }

  /**
   * load CSS file dynamically with caching
   * @param url
   * @param refresh
   * @return Promise that resolves to true if the CSS has just loaded, false if it was already cached
   */
  loadCSS(url: string, refresh?: boolean): Promise<boolean> {
    if (!refresh) {
      if (this._pending[url]) {
        return this._pending[url];
      } else if (this._loaded[url]) {
        return Promise.resolve(false);
      }
    }

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('async', '');
    link.setAttribute('href', url);
    document.head.appendChild(link);

    return this._pending[url] = this._getLoadPromise(link)
      .then(() => {
        delete this._pending[url];
        this._loaded[url] = true;
        return true;
      })
      .catch((e) => {
        delete this._pending[url];
        return Promise.reject(e);
      });
  }
  /**
   * wraps onload and onerror functions of element into a Promise
   * @param ele
   */
  private _getLoadPromise(ele: HTMLElement): Promise<boolean> {
    return new Promise((resolve, reject) => {
      ele.onload = (_) => resolve();
      ele.onerror = (evt) => reject(evt);
    });
  }
}

export const scriptLoader = new ScriptLoader();

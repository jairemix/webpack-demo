import { join } from 'lodash-es';
import './index.css';

function component() {
  let element = document.createElement('div');
  element.className = 'wb-title';

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = join(['It', 'works!'], ' ');

  return element;
}

document.body.appendChild(component());
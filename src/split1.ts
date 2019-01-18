import { join } from 'lodash-es';
import { identity } from './shared';

const getSomeText = () => {
  return identity(join([
    'I',
    'don\'t',
    'like',
    'sand',
  ], ' '));
};

(window as any).getSomeText = getSomeText;

console.log('🛡 script1 loaded');
